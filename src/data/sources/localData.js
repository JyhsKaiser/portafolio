export const portfolioData = {
    hero: {
        title: "Jovani | Software Architect & Security Lead",
        subtitle: "Construyendo ecosistemas digitales seguros y escalables.",
        description: "Especializado en la creación y migración de sistemas críticos utilizando stacks modernos. Mi enfoque combina arquitectura de software limpia con protocolos de ciberseguridad desde la raíz, garantizando el rendimiento y la integridad de la información para organizaciones de alto impacto."
    },
    techStack: {
        core: ["Java (Spring Boot)", "SvelteKit", "React", "Angular"],
        backendAndData: ["Node.js (Fastify)", "Python", "MySQL", "PostgreSQL", "Prisma", "Zod"],
        infrastructureAndSecurity: ["Docker", "Azure", "Git", "Fedora Linux", "Kali Linux (Pentesting Tools)"]
    },
    projects: [
        {
            id: "torneos",
            title: "Sistema de Gestión de Torneos Deportivos",
            stack: ["Java", "Spring Boot", "Microservicios", "React", "Vite"],
            challenge: "Diseñar un ecosistema de gestión deportiva integral (árbitros, equipos, estadísticas y convocatorias) evitando la creación de un monolito frágil, garantizando que el alto tráfico durante los encuentros no afectara la gestión de credenciales o registros.",
            solution: "Arquitectura orientada a microservicios implementando tres nodos independientes (S1: Gestión de Usuarios/Equipos, S2: Convocatorias, S3: Encuentros y Estadísticas). Se implementó la comunicación inter-servicios mediante clientes Feign y se orquestó el consumo de las APIs (puertos 8080, 8081, 8082) a través de un Factory Pattern en un frontend modular construido con React y Vite.",
            impact: "Alta disponibilidad y escalabilidad por dominio. El aislamiento de los servicios asegura que la caída o saturación del módulo de estadísticas no comprometa la operatividad del registro de nuevos jugadores o la administración de credenciales."
        },
        {
            id: "trail-tracker",
            title: "Trail Tracker (Plataforma Full-Stack & Cloud)",
            stack: ["Angular", "Spring Boot", "MySQL", "Azure"],
            challenge: "Desarrollar una plataforma integral para la monitorización de métricas de rendimiento y estrategias de recuperación en el trail running, requiriendo un procesamiento de datos preciso y una visualización fluida para el usuario final.",
            solution: "Construcción de una arquitectura Full-Stack utilizando Spring Boot para un backend robusto acoplado a una base de datos relacional en MySQL. El consumo de la API se implementó a través de un cliente reactivo en Angular, optimizando todo el ecosistema para su despliegue y gestión en la infraestructura en la nube de Azure.",
            impact: "Creación de una solución end-to-end que transforma datos en bruto en analíticas accionables. Este proyecto demuestra autonomía total en el ciclo de vida del software: desde el modelado de la base de datos y la lógica de negocio, hasta el despliegue en un entorno Cloud de grado de producción."
        },
        {
            id: "vision-artificial",
            title: "Sistemas de Visión Artificial y OCR",
            stack: ["Python", "OpenCV", "Tesseract OCR", "Data Processing"],
            challenge: "Automatizar la toma de decisiones en procesos físicos reales —como la clasificación agrícola y la digitalización de matrices impresas— eliminando el error humano mediante el análisis digital no invasivo.",
            solution: "Ingeniería de pipelines de visión por computadora en Python. Se implementó el análisis del espacio de color HSV mediante OpenCV para determinar la madurez y calibre de frutos en tiempo real. Paralelamente, se integró Tesseract OCR para la detección y extracción precisa de datos alfanuméricos desde medios físicos.",
            impact: "Evidencia una capacidad avanzada para salir del desarrollo web tradicional y resolver problemas algorítmicos complejos, conectando el software con el mundo físico mediante automatización y procesamiento de imágenes en tiempo real."
        }
    ],
    experience: [
        {
            id: "uaemex-seduca",
            role: "Desarrollador Full Stack",
            institution: "Dirección de Educación Continua y Digital - UAEMéx",
            period: "Abril 2026 - Actualidad",
            challenge: "Migración de un sistema legado estructurado en PHP (SEDUCA) hacia un ecosistema moderno y escalable.",
            impact: [
                "Ejecuto la reingeniería del sistema adoptando en producción un stack basado en SvelteKit, Fastify y Prisma.",
                "Desarrollo el módulo CMS completo orientado a administradores y docentes, abarcando la gestión de actividades, materiales y evaluaciones.",
                "Rediseño los flujos de interacción entre el profesor y el LMS, logrando reducir la carga administrativa y mejorando significativamente la experiencia de usuario.",
                "Aseguro la estabilidad del código mediante la gestión de entregas bajo la metodología SCRUM con ciclos auditados por QA en cada sprint."
            ]
        },
        {
            id: "adem-comem",
            role: "Desarrollador de Proyecto de Vinculación",
            institution: "Agencia Digital del Estado de México (ADEM)",
            period: "Noviembre 2025 - Marzo 2026",
            challenge: "Reingeniería del sistema de control escolar del COMEM para superar las limitaciones de sus tecnologías legadas.",
            impact: [
                "Implementé una arquitectura limpia utilizando Spring Boot y Angular para la reestructuración completa del sistema.",
                "Optimicé el esquema de base de datos en MySQL, eliminando la duplicidad de información y generando una mejora notable en los tiempos de respuesta.",
                "Automaticé procesos críticos mediante el desarrollo de un módulo de pagos con envío automático de reportes, erradicando la gestión manual.",
                "Diseñé la interfaz desde sus prototipos en Figma hasta su implementación frontend, priorizando la eficiencia administrativa y la UX."
            ]
        }
    ],
    footer: {
        heading: "¿Construimos algo escalable?",
        paragraph: "Si buscas modernizar un sistema complejo, optimizar el rendimiento de tu plataforma o integrar seguridad desde la arquitectura base, mi bandeja de entrada está abierta.",
        email: "jyhskaiser@gmail.com",
        github: "https://www.github.com/JyhsKaiser",
        linkedin: "https://www.linkedin.com/in/jyonhers/"
    }
};