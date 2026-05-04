import React from 'react';
import { usePortfolio } from '../hooks/usePortfolio';
import { ProjectCard } from '../components/ui/ProjectCard';

export const ProjectsView = () => {
    const { projects, loading } = usePortfolio();

    if (loading) return null;

    return (
        <section id="projects" className="section-container">
            <div className="mb-12">
                <h2 className="text-3xl md:text-4xl mb-4">Proyectos Destacados</h2>
                <div className="h-1 w-20 bg-accent rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {projects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
        </section>
    );
};