import { usePortfolio } from '../hooks/usePortfolio';
import { Badge } from '../components/ui/Badge';

export const TechStackView = () => {
    const { techStack, loading } = usePortfolio();

    if (loading || !techStack) return null;

    return (
        <section id="stack" className="section-container my-10 md:mx-20 lg:mx-50">
            <div className="mb-12">
                <h2 className="text-3xl md:text-4xl mb-4">Tech Stack</h2>
                <div className="h-1 w-20 bg-accent rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                {/* 1. Frontend */}
                <div className="bg-surface p-8 rounded-2xl border border-borderline hover:border-accent/30 transition-colors">
                    <h3 className="text-xl text-white font-bold mb-6 font-mono">1. Frontend</h3>
                    <div className="flex flex-wrap gap-3">
                        {techStack.frontend.map((tech) => (
                            <Badge key={tech}>{tech}</Badge>
                        ))}
                    </div>
                </div>

                {/* 2. Backend */}
                <div className="bg-surface p-8 rounded-2xl border border-borderline hover:border-accent/30 transition-colors">
                    <h3 className="text-xl text-white font-bold mb-6 font-mono">2. Backend</h3>
                    <div className="flex flex-wrap gap-3">
                        {techStack.backend.map((tech) => (
                            <Badge key={tech}>{tech}</Badge>
                        ))}
                    </div>
                </div>

                {/* 3. Datos */}
                <div className="bg-surface p-8 rounded-2xl border border-borderline hover:border-accent/30 transition-colors">
                    <h3 className="text-xl text-white font-bold mb-6 font-mono">3. Datos</h3>
                    <div className="flex flex-wrap gap-3">
                        {techStack.datos.map((tech) => (
                            <Badge key={tech}>{tech}</Badge>
                        ))}
                    </div>
                </div>

                {/* 4. Infraestructura */}
                <div className="bg-surface p-8 rounded-2xl border border-borderline hover:border-accent/30 transition-colors lg:col-start-1 lg:col-span-1">
                    <h3 className="text-xl text-white font-bold mb-6 font-mono">4. Infraestructura</h3>
                    <div className="flex flex-wrap gap-3">
                        {techStack.infraestructura.map((tech) => (
                            <Badge key={tech}>{tech}</Badge>
                        ))}
                    </div>
                </div>

                {/* 5. Seguridad */}
                <div className="bg-surface p-8 rounded-2xl border border-borderline hover:border-accent/30 transition-colors lg:col-start-2 lg:col-span-2">
                    <h3 className="text-xl text-white font-bold mb-6 font-mono">5. Seguridad & Análisis</h3>
                    <div className="flex flex-wrap gap-3">
                        {techStack.seguridad.map((tech) => (
                            <Badge key={tech}>{tech}</Badge>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};