
import { usePortfolio } from '../hooks/usePortfolio';
import { Button } from '../components/ui/Button';

export const HeroView = () => {
    const { hero, loading } = usePortfolio();

    if (loading || !hero) return null;

    return (
        <section className="section-container flex flex-col justify-center min-h-[80vh]">
            <div className="space-y-6 max-w-3xl">
                <h1 className="text-5xl md:text-7xl">
                    {hero.title}
                </h1>
                <h2 className="text-2xl md:text-3xl text-accent-light font-mono">
                    {hero.subtitle}
                </h2>
                <p className="text-lg md:text-xl text-zinc-400 leading-relaxed">
                    {hero.description}
                </p>
                <div className="flex gap-4 pt-4">
                    <Button href="#projects">Ver Proyectos Clave</Button>
                    <Button variant="outline" href="#contact">Contactar</Button>
                </div>
            </div>
        </section>
    );
};