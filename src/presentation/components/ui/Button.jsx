

export const Button = ({ children, onClick, variant = 'primary', href }) => {
    const baseStyles = "px-6 py-3 rounded-lg font-bold transition-all duration-300 transform hover:-translate-y-1 active:scale-95";
    const variants = {
        primary: "bg-accent hover:bg-accent-hover text-base shadow-lg shadow-accent/20",
        outline: "border-2 border-accent text-accent hover:bg-accent/10"
    };

    const Component = href ? 'a' : 'button';

    return (
        <Component
            href={href}
            onClick={onClick}
            className={`${baseStyles} ${variants[variant]}`}
        >
            {children}
        </Component>
    );
};