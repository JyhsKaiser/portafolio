import { usePortfolio } from '../hooks/usePortfolio';
import { Button } from '../components/ui/Button';

export const FooterView = () => {
    const { footer, loading } = usePortfolio();

    if (loading || !footer) return null;

    return (
        // Utilizamos min-h-[60vh] para hacerlo alto y flex para centrar todo verticalmente
        <footer id="contact" className="relative border-t border-zinc-800 bg-surface min-h-[80vh] flex flex-col justify-center overflow-hidden mt-30">

            {/* Glow de fondo para darle profundidad e interactividad visual */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="relative z-10 section-container text-center flex flex-col items-center px-4 w-full">

                {/* Subtítulo estilo terminal para mantener la consistencia */}
                <p className="text-accent font-mono text-sm tracking-[0.2em] uppercase mb-4 font-bold">
                    ¿Qué sigue?
                </p>

                <h2 className="text-5xl md:text-6xl lg:text-7xl font-black mb-8 text-white tracking-tight">
                    {footer.heading}
                </h2>

                <p className="text-zinc-400 max-w-2xl mx-auto mb-12 text-lg md:text-xl leading-relaxed">
                    {footer.paragraph}
                </p>

                <div className="flex flex-col sm:flex-row justify-center items-center gap-8">
                    {/* Botón de Email Principal */}
                    <Button href={`mailto:${footer.email}`}>
                        {footer.email}
                    </Button>

                    {/* Contenedor de Redes Sociales con Iconos */}
                    <div className="flex gap-4 items-center">

                        {/* Enlace GitHub con SVG */}
                        <a
                            href={footer.github}
                            target="_blank"
                            rel="noreferrer"
                            className="group p-4 bg-zinc-900 border border-zinc-800 rounded-full hover:border-accent hover:bg-accent/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(6,182,212,0.2)]"
                            aria-label="Perfil de GitHub"
                        >
                            <svg className="w-6 h-6 text-zinc-400 group-hover:text-accent transition-colors" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                            </svg>
                        </a>

                        {/* Enlace LinkedIn con SVG */}
                        <a
                            href={footer.linkedin}
                            target="_blank"
                            rel="noreferrer"
                            className="group p-4 bg-zinc-900 border border-zinc-800 rounded-full hover:border-accent hover:bg-accent/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(6,182,212,0.2)]"
                            aria-label="Perfil de LinkedIn"
                        >
                            <svg className="w-6 h-6 text-zinc-400 group-hover:text-accent transition-colors" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                            </svg>
                        </a>

                    </div>
                </div>

                {/* Firma y Copyright Inferior */}
                <div className="mt-20 pt-8 border-t border-zinc-800/50 w-full flex flex-col md:flex-row justify-between items-center gap-4 max-w-4xl mx-auto">
                    <p className="text-zinc-500 font-mono text-sm ">
                        © {new Date().getFullYear()} Jovani. All rights reserved.
                    </p>
                    <p className="text-zinc-600 font-mono text-xs flex items-center gap-1">
                        {/* Construido con <span className="text-accent">React</span> & Tailwind */}
                    </p>
                </div>

            </div>
        </footer>
    );
};