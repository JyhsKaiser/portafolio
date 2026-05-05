import { usePortfolio } from '../hooks/usePortfolio';
import { Button } from '../components/ui/Button';
import profileImage from "/assets/profile.webp";

export const HeroView = () => {
    const { hero, loading } = usePortfolio();

    if (loading || !hero) return null;

    return (
        <section className="section-container min-h-[90vh] flex items-center relative">
            {/* <section className="section-container min-h-[80vh] flex items-center my-10"> */}
            <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-8 w-full pb-16">
                {/* <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-8 w-full"> */}

                {/* Columna Izquierda: Texto y Call to Actions */}
                <div className="space-y-6 flex-1 max-w-3xl text-center lg:text-left">

                    {/* Bloque de Título Exacto a tu Imagen */}
                    <div className="mb-8">
                        <p className="text-accent font-mono text-xl tracking-[0.15em] uppercase mb-4 font-bold">
                            Hola, soy
                        </p>
                        <h1 className="text-7xl md:text-8xl lg:text-9xl font-black text-white leading-none mb-6 tracking-tight">
                            Jovani
                        </h1>
                        <div className="font-mono text-xl md:text-2xl lg:text-3xl font-bold flex flex-wrap items-center justify-center lg:justify-start gap-2">
                            <span className="text-accent">{'>'}</span>
                            <span className="text-zinc-300">Ingeniero en Software</span>
                            <span className="text-zinc-600">&</span>
                            <span className="text-zinc-300">Desarrollador Full Stack</span>
                        </div>
                    </div>

                    <p className="text-lg md:text-xl text-zinc-400 leading-relaxed">
                        {hero.description}
                    </p>

                    <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-4">
                        <Button href="#projects">Ver Proyectos Clave</Button>
                        <Button variant="outline" href="#contact">Contactar</Button>
                    </div>
                </div>

                {/* Columna Derecha: Imagen de Perfil */}
                <div className="flex-1 flex justify-center lg:justify-center w-full">
                    {/* Contenedor relativo para el efecto de resplandor */}
                    <div className="relative group">
                        {/* Resplandor desenfocado (Glow) */}
                        <div className="absolute inset-0 bg-accent blur-[80px] opacity-20 group-hover:opacity-30 transition-opacity duration-500 rounded-4xl"></div>

                        {/* Imagen de Perfil */}
                        <img
                            src={profileImage}
                            alt="Jovani - Software Architect"
                            className="relative z-10 w-64 h-64 md:w-80 md:h-80 lg:w-[350px] lg:h-[600px] object-cover rounded-4xl border-2 border-zinc-800 shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]"
                        />
                    </div>
                </div>

            </div>
            {/* Scroll Indicator Animado */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center opacity-70 hover:opacity-100 transition-opacity cursor-pointer hidden md:flex">
                <span className="text-[10px] text-zinc-500 font-mono tracking-widest uppercase mb-2">Scroll</span>
                <svg
                    className="w-5 h-5 text-accent animate-bounce"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
            </div>
        </section>
    );
};