import { useState, useEffect } from 'react';

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('');

    const toggleMenu = () => setIsOpen(!isOpen);

    // Efecto para rastrear el scroll y determinar la sección activa (ScrollSpy)
    useEffect(() => {
        const handleScroll = () => {
            // Las IDs de las secciones que queremos rastrear
            const sectionIds = ['projects', 'stack', 'experience', 'contact'];
            // Agregamos un offset de 200px para que se active un poco antes de llegar a la sección
            const scrollPosition = window.scrollY + 200;

            for (const id of sectionIds) {
                const element = document.getElementById(id);
                if (element) {
                    const { offsetTop, offsetHeight } = element;
                    // Si el scroll está dentro de los límites de la sección
                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        setActiveSection(id);
                        return;
                    }
                }
            }

            // Si estamos hasta arriba (en el Hero), limpiamos el estado
            if (window.scrollY < 100) {
                setActiveSection('');
            }
        };

        window.addEventListener('scroll', handleScroll);
        // Limpiamos el event listener al desmontar el componente
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Función para determinar las clases del enlace dependiendo de si está activo o no
    const getLinkClasses = (section) => {
        const baseClasses = "transition-all duration-300 font-medium";
        const desktopClasses = activeSection === section
            ? "text-accent border-b-2 border-accent pb-1"
            : "text-zinc-400 hover:text-accent";

        return `${baseClasses} ${desktopClasses}`;
    };

    // Función para las clases del menú móvil
    const getMobileLinkClasses = (section) => {
        const baseClasses = "transition-all duration-300 font-medium block w-full";
        const mobileClasses = activeSection === section
            ? "text-accent pl-2 border-l-2 border-accent"
            : "text-zinc-400 hover:text-accent";

        return `${baseClasses} ${mobileClasses}`;
    };

    return (
        <header className="fixed top-0 w-full z-50 bg-base/80 backdrop-blur-md border-b border-zinc-800/50 transition-all duration-300">
            <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">

                {/* Logo / Nombre */}
                <div className="text-xl font-bold font-mono tracking-tighter text-white z-50">
                    <a href="#" className="hover:text-accent transition-colors">
                        Jovani<span className="text-accent">.dev</span>
                    </a>
                </div>

                {/* Navegación Desktop */}
                <nav className="hidden md:flex gap-8 text-sm">
                    <a href="#stack" className={getLinkClasses('stack')}>Tech Stack</a>
                    <a href="#projects" className={getLinkClasses('projects')}>Proyectos</a>
                    <a href="#experience" className={getLinkClasses('experience')}>Experiencia</a>
                    {/* <a href="#contact" className={getLinkClasses('contact')}>Contacto</a> */}
                </nav>

                {/* Botón CTA Desktop */}
                <div className="hidden md:block">
                    <a
                        href="#contact"
                        className="px-4 py-2 text-sm font-bold text-accent border border-accent/50 rounded-lg hover:bg-accent/10 transition-colors shadow-[0_0_15px_rgba(6,182,212,0.1)] hover:shadow-[0_0_20px_rgba(6,182,212,0.3)]"
                    >
                        Hablemos
                    </a>
                </div>

                {/* Botón Hamburguesa (Móvil) */}
                <button
                    className="md:hidden p-2 text-zinc-400 hover:text-accent transition-colors z-50 relative"
                    onClick={toggleMenu}
                    aria-label="Abrir menú"
                >
                    {isOpen ? (
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    ) : (
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    )}
                </button>
            </div>

            {/* Menú Desplegable (Móvil) */}
            <div
                className={`md:hidden absolute top-20 left-0 w-full bg-zinc-900 backdrop-blur-lg border-b border-zinc-800/50 transition-all duration-300 ease-in-out ${isOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-4'
                    }`}
            >
                <nav className="flex flex-col px-6 py-6 gap-6">
                    <a href="#stack" onClick={toggleMenu} className={getMobileLinkClasses('stack')}>Tech Stack</a>
                    <a href="#projects" onClick={toggleMenu} className={getMobileLinkClasses('projects')}>Proyectos</a>
                    <a href="#experience" onClick={toggleMenu} className={getMobileLinkClasses('experience')}>Experiencia</a>
                    {/* <a href="#contact" onClick={toggleMenu} className={getMobileLinkClasses('contact')}>Contacto</a> */}

                    {/* Botón CTA dentro del menú móvil */}
                    <div className="pt-4 border-t border-zinc-800/50 w-full">
                        <a
                            href="#contact"
                            onClick={toggleMenu}
                            className="block w-full text-center px-4 py-3 text-sm font-bold text-accent border border-accent/50 rounded-lg hover:bg-accent/10 transition-colors"
                        >
                            Hablemos
                        </a>
                    </div>
                </nav>
            </div>
        </header>
    );
};