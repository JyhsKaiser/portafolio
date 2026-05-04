
import { usePortfolio } from '../hooks/usePortfolio';
import { Button } from '../components/ui/Button';

export const FooterView = () => {
    const { footer, loading } = usePortfolio();

    if (loading || !footer) return null;

    return (
        <footer id="contact" className="border-t border-zinc-800 bg-surface mt-20">
            <div className="section-container text-center py-20 flex flex-col items-center">
                <h2 className="text-3xl md:text-4xl mb-6">{footer.heading}</h2>
                <p className="text-zinc-400 max-w-2xl mx-auto mb-10 text-lg leading-relaxed">
                    {footer.paragraph}
                </p>

                <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
                    <Button href={`mailto:${footer.email}`}>
                        {footer.email}
                    </Button>

                    <div className="flex gap-6 mt-4 sm:mt-0">
                        <a
                            href={footer.github}
                            target="_blank"
                            rel="noreferrer"
                            className="text-zinc-400 hover:text-accent font-mono transition-colors"
                        >
                            [ GitHub ]
                        </a>
                        <a
                            href={footer.linkedin}
                            target="_blank"
                            rel="noreferrer"
                            className="text-zinc-400 hover:text-accent font-mono transition-colors"
                        >
                            [ LinkedIn ]
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};