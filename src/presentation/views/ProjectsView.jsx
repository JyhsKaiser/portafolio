import { useState } from 'react';
import { usePortfolio } from '../hooks/usePortfolio';
import { ProjectCard } from '../components/ui/ProjectCard';
import { ProjectModal } from '../components/ui/ProjectModal';

export const ProjectsView = () => {
    const { projects, loading } = usePortfolio();
    const [selectedProject, setSelectedProject] = useState(null); // Estado del modal

    if (loading) return null;

    return (
        <section id="projects" className="section-container relative md:mx-20 lg:mx-50">
            <div className="mb-12">
                <h2 className="text-3xl md:text-4xl mb-4">Proyectos Destacados</h2>
                <div className="h-1 w-20 bg-accent rounded-full"></div>
            </div>

            {/* Grid de Tarjetas */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project) => (
                    <ProjectCard
                        key={project.id}
                        project={project}
                        onClick={() => setSelectedProject(project)} // Abrimos el modal con este proyecto
                    />
                ))}
            </div>

            {/* Renderizado Condicional del Modal */}
            {selectedProject && (
                <ProjectModal
                    project={selectedProject}
                    onClose={() => setSelectedProject(null)} // Cerramos el modal
                />
            )}
        </section>
    );
};