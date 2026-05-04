import React from 'react';
import { Badge } from './Badge';

export const ProjectCard = ({ project }) => {
    return (
        <div className="group bg-surface border border-borderline p-8 rounded-2xl transition-all duration-500 hover:border-accent/50 hover:shadow-2xl hover:shadow-accent/5">
            <div className="flex flex-wrap gap-2 mb-6">
                {project.stack.map((tech) => (
                    <Badge key={tech}>{tech}</Badge>
                ))}
            </div>

            <h3 className="text-2xl mb-4 group-hover:text-accent transition-colors">
                {project.title}
            </h3>

            <div className="space-y-4 text-sm leading-relaxed">
                <p>
                    <strong className="text-accent-light font-mono block mb-1 uppercase tracking-wider text-[10px]">El Reto</strong>
                    <span className="text-zinc-400">{project.challenge}</span>
                </p>
                <p>
                    <strong className="text-accent-light font-mono block mb-1 uppercase tracking-wider text-[10px]">La Solución</strong>
                    <span className="text-zinc-400">{project.solution}</span>
                </p>
                <p>
                    <strong className="text-accent-light font-mono block mb-1 uppercase tracking-wider text-[10px]">El Impacto</strong>
                    <span className="text-zinc-300 font-medium">{project.impact}</span>
                </p>
            </div>
        </div>
    );
};