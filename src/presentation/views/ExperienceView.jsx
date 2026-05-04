
import { usePortfolio } from '../hooks/usePortfolio';
import { ExperienceItem } from '../components/ui/ExperienceItem';

export const ExperienceView = () => {
    const { experience, loading } = usePortfolio();

    if (loading) return null;

    return (
        <section id="experience" className="section-container">
            <div className="mb-12">
                <h2 className="text-3xl md:text-4xl mb-4">Trayectoria Profesional</h2>
                <div className="h-1 w-20 bg-accent rounded-full"></div>
            </div>

            <div className="max-w-4xl">
                {experience.map((exp) => (
                    <ExperienceItem key={exp.id} exp={exp} />
                ))}
            </div>
        </section>
    );
};