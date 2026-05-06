import { Badge } from './Badge';

const FALLBACK_ACCENT = {
    torneos: { gradient: 'from-blue-950 to-slate-950', icon: '🏆' },
    'trail-tracker': { gradient: 'from-cyan-950 to-slate-950', icon: '🏔️' },
    'vision-artificial': { gradient: 'from-violet-950 to-slate-950', icon: '👁️' },
};

export const ProjectCard = ({ project, onClick }) => {
    const fallback = FALLBACK_ACCENT[project.id] ?? { gradient: 'from-zinc-900 to-zinc-950', icon: '💻' };
    const hasImages = project.images?.length > 0;

    return (
        <div
            onClick={onClick}
            className="group bg-surface border border-borderline rounded-2xl transition-all duration-500 hover:border-accent/50 hover:shadow-2xl hover:shadow-accent/5 cursor-pointer overflow-hidden flex flex-col h-full"
        >
            {/* Header visual — imagen real o fallback con gradiente */}
            <div className="h-48 w-full overflow-hidden border-b border-borderline relative">
                {hasImages ? (
                    <img
                        src={project.images[0]}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                    />
                ) : (
                    <div className={`w-full h-full bg-gradient-to-br ${fallback.gradient} flex items-center justify-center`}>
                        <span className="text-5xl opacity-40 group-hover:opacity-70 group-hover:scale-110 transition-all duration-500">
                            {fallback.icon}
                        </span>
                    </div>
                )}
            </div>

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

                <div className="space-y-4 text-sm leading-relaxed flex-1">
                    <p className="line-clamp-3 text-zinc-400">
                        <strong className="text-zinc-300">Reto:</strong> {project.challenge}
                    </p>
                </div>

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