const { app } = require('@azure/functions');
const { GoogleGenerativeAI } = require('@google/generative-ai');

app.http('chat', {
    methods: ['POST'],
    authLevel: 'anonymous',
    handler: async (request, context) => {
        try {
            const body = await request.json();
            const userMessage = body.message;

            // Inicializamos Gemini con tu llave segura
            const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

            // El prompt del sistema con todo tu contexto profesional
            const systemPrompt = `
                Eres el asistente virtual integrado en el portafolio de Jovani, un Software Architect & Security Lead de México.
                Tu objetivo es responder de forma concisa, profesional y amigable a reclutadores o clientes.
                
                Contexto sobre Jovani:
                - Estudia Ingeniería de Software en la UAEMéx.
                - Tech Stack principal: Java (Spring Boot), React, Angular, SvelteKit, Azure, Docker, Linux y herramientas de Ciberseguridad.
                - Logro clave 1: Lideró la migración del sistema SEDUCA (UAEMéx) de un monolito PHP a un ecosistema moderno con SvelteKit y Fastify.
                - Logro clave 2: Implementó arquitectura de microservicios en un sistema de torneos deportivos para alta disponibilidad.
                
                Reglas:
                1. Sé directo y no uses respuestas excesivamente largas.
                2. Si no sabes algo, invita al usuario a contactar a Jovani al correo jyhskaiser@gmail.com o a través de su LinkedIn.
            `;

            // Usamos el modelo gemini-1.5-flash (es el más rápido y recomendado para chatbots)
            const model = genAI.getGenerativeModel({
                model: "gemini-1.5-flash",
                systemInstruction: systemPrompt
            });

            // Generamos la respuesta
            const result = await model.generateContent(userMessage);
            const responseText = result.response.text();

            return {
                status: 200,
                jsonBody: {
                    reply: responseText
                }
            };

        } catch (error) {
            context.error("Error conectando con Gemini:", error);
            return {
                status: 500,
                jsonBody: { reply: "Ups, los servidores de mi IA están tomando un respiro. Por favor, intenta enviarme un correo directamente." }
            };
        }
    }
});