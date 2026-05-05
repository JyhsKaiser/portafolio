import { Badge } from './Badge';

export const ProjectCard = ({ project, onClick }) => {
    return (
        <div
            onClick={onClick}
            className="group bg-surface border border-borderline rounded-2xl transition-all duration-500 hover:border-accent/50 hover:shadow-2xl hover:shadow-accent/5 cursor-pointer overflow-hidden flex flex-col h-full"
        >
            {/* Imagen de Portada (Opcional) */}
            {project.images?.length > 0 && (
                <div className="h-48 w-full overflow-hidden border-b border-borderline">
                    <img
                        src={project.images[0]}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                    />
                </div>
            )}

            <div className="p-8 flex-1 flex flex-col">
                <div className="flex flex-wrap gap-2 mb-6">
                    {project.stack.slice(0, 3).map((tech) => (
                        <Badge key={tech}>{tech}</Badge>
                    ))}
                    {project.stack.length > 3 && (
                        <Badge>+{project.stack.length - 3}</Badge>
                    )}
                </div>

                <h3 className="text-2xl mb-4 group-hover:text-accent transition-colors font-bold">
                    {project.title}
                </h3>

                {/* Resumen con Line Clamp para no romper el grid */}
                <div className="space-y-4 text-sm leading-relaxed flex-1">
                    <p className="line-clamp-3 text-zinc-400">
                        <strong className="text-zinc-300">Reto:</strong> {project.challenge}
                    </p>
                </div>

                {/* Indicador de acción */}
                <div className="mt-6 pt-4 border-t border-zinc-800/50 flex items-center text-accent font-mono text-xs uppercase tracking-widest group-hover:translate-x-2 transition-transform">
                    Ver Detalles
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                </div>
            </div>
        </div>
    );
};