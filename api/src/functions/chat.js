const { app } = require('@azure/functions');
const { GoogleGenerativeAI } = require('@google/generative-ai');

app.http('chat', {
    methods: ['POST'],
    authLevel: 'anonymous',
    handler: async (request, context) => {
        try {
            const body = await request.json();
            const userMessage = body.message;

            // Verificamos si la llave existe antes de llamar a Google
            if (!process.env.GEMINI_API_KEY) {
                context.log("ALERTA: La llave GEMINI_API_KEY no está configurada.");
                return {
                    status: 500,
                    jsonBody: { reply: "Error de configuración de servidor: Llave API faltante." }
                };
            }

            const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
            // const model = genAI.getGenerativeModel({ model: "gemini-pro" });
            const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });
            // El prompt del sistema concatenado para máxima compatibilidad
            const systemPrompt = `
Eres el asistente virtual integrado en el portafolio de Jovani, un Ingeniero en Software especializado en desarrollo Full Stack.
Responde de forma concisa, profesional y amigable.
Contexto:
- Tech Stack: Java (Spring Boot), React, Angular, SvelteKit, Azure, Docker, Linux, Ciberseguridad.
- Logro: Lideró migración SEDUCA (UAEMéx) a SvelteKit/Fastify.
- Logro: Arquitectura microservicios en sistema de torneos.
Si no sabes algo, invita a contactar a Jovani a jyhskaiser@gmail.com.

PREGUNTA DEL USUARIO:
${userMessage}
            `;

            const result = await model.generateContent(systemPrompt);
            const responseText = result.response.text();

            return {
                status: 200,
                jsonBody: { reply: responseText }
            };

        } catch (error) {
            context.log("Error de conexión con Gemini:", error);
            return {
                status: 500,
                jsonBody: { reply: "Ups, los servidores de mi IA están tomando un respiro. Intenta enviarme un correo." }
            };
        }
    }
});