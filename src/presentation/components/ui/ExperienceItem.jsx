

export const ExperienceItem = ({ exp }) => {
    return (
        <div className="relative pl-8 pb-12 border-l border-zinc-800 last:border-0">
            {/* Indicador de la línea de tiempo (Azul Eléctrico) */}
            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-base border-2 border-accent shadow-[0_0_10px_rgba(6,182,212,0.5)]"></div>

            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                    <h3 className="text-xl text-white group-hover:text-accent transition-colors">
                        {exp.role}
                    </h3>
                    <p className="text-accent-light font-mono text-sm uppercase tracking-tight">
                        {exp.institution}
                    </p>
                </div>
                <span className="text-zinc-500 font-mono text-xs mt-1 md:mt-0">
                    {exp.period}
                </span>
            </div>

            <div className="space-y-4">
                <p className="text-sm text-zinc-400 italic">
                    <strong className="text-zinc-300 not-italic">El Reto:</strong> {exp.challenge}
                </p>

                <ul className="space-y-2">
                    {exp.impact.map((item, index) => (
                        <li key={index} className="text-sm text-zinc-400 flex items-start">
                            <span className="text-accent mr-2 mt-1.5 w-1.5 h-1.5 rounded-full bg-accent inline-block shrink-0"></span>
                            {item}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};