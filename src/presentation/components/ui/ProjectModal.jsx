import React, { useState } from 'react';
import { Badge } from './Badge';

export const ProjectModal = ({ project, onClose }) => {
    // Estado para controlar la imagen actual del carrusel
    const [currentIndex, setCurrentIndex] = useState(0);

    if (!project) return null;

    const hasMultipleImages = project.images?.length > 1;

    // Funciones de navegación del carrusel
    const nextImage = (e) => {
        e.stopPropagation(); // Evita que el clic propague eventos indeseados
        setCurrentIndex((prev) => (prev === project.images.length - 1 ? 0 : prev + 1));
    };

    const prevImage = (e) => {
        e.stopPropagation();
        setCurrentIndex((prev) => (prev === 0 ? project.images.length - 1 : prev - 1));
    };

    const goToImage = (e, index) => {
        e.stopPropagation();
        setCurrentIndex(index);
    };

    return (
        <div
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-base/90 backdrop-blur-sm"
            onClick={onClose}
        >
            <div
                className="relative bg-surface border border-zinc-800 w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl shadow-2xl shadow-accent/10 flex flex-col"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Botón de cerrar principal */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 p-2 bg-zinc-900/80 backdrop-blur rounded-full text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors z-20"
                    aria-label="Cerrar modal"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                {/* Área del Carrusel Visual */}
                {project.images?.length > 0 && (
                    <div className="w-full h-64 md:h-106 bg-zinc-950 border-b border-zinc-800 relative group shrink-0">
                        {/* Imagen principal con transición suave */}
                        <img
                            src={project.images[currentIndex]}
                            alt={`${project.title} - Captura ${currentIndex + 1}`}
                            className="w-full h-full object-cover opacity-90 transition-opacity duration-300"
                        />

                        {/* Controles del Carrusel (Solo visibles si hay más de 1 imagen) */}
                        {hasMultipleImages && (
                            <>
                                {/* Botón Anterior */}
                                <button
                                    onClick={prevImage}
                                    className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-zinc-900/80 backdrop-blur rounded-full text-zinc-300 opacity-0 group-hover:opacity-100 hover:bg-accent hover:text-white transition-all shadow-lg"
                                >
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                    </svg>
                                </button>

                                {/* Botón Siguiente */}
                                <button
                                    onClick={nextImage}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-zinc-900/80 backdrop-blur rounded-full text-zinc-300 opacity-0 group-hover:opacity-100 hover:bg-accent hover:text-white transition-all shadow-lg"
                                >
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </button>

                                {/* Indicadores (Dots) en la parte inferior */}
                                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 bg-zinc-900/50 backdrop-blur-md px-3 py-2 rounded-full">
                                    {project.images.map((_, idx) => (
                                        <button
                                            key={idx}
                                            onClick={(e) => goToImage(e, idx)}
                                            className={`w-2 h-2 rounded-full transition-all ${currentIndex === idx ? 'bg-accent w-6' : 'bg-zinc-500 hover:bg-zinc-300'
                                                }`}
                                            aria-label={`Ir a imagen ${idx + 1}`}
                                        />
                                    ))}
                                </div>
                            </>
                        )}
                    </div>
                )}

                {/* Contenido Completo del Modal */}
                <div className="p-8 shrink-0">
                    <div className="flex flex-wrap gap-2 mb-4">
                        {project.stack.map((tech) => (
                            <Badge key={tech}>{tech}</Badge>
                        ))}
                    </div>

                    <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">{project.title}</h2>

                    <div className="space-y-8 text-zinc-300 leading-relaxed">
                        <div>
                            <h3 className="text-accent font-mono uppercase tracking-widest text-sm mb-3 flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-accent"></span> El Reto
                            </h3>
                            <p>{project.challenge}</p>
                        </div>
                        <div>
                            <h3 className="text-accent font-mono uppercase tracking-widest text-sm mb-3 flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-accent"></span> La Solución
                            </h3>
                            <p>{project.solution}</p>
                        </div>
                        <div className="p-4 bg-zinc-900/50 rounded-xl border border-zinc-800">
                            <h3 className="text-accent font-mono uppercase tracking-widest text-sm mb-2 flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-accent"></span> El Impacto
                            </h3>
                            <p className="font-medium text-white">{project.impact}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};