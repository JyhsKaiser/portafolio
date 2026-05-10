import { useState, useRef, useEffect } from 'react';

export const AIChatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { role: 'assistant', content: '¡Hola! Soy el asistente IA de Jovani. ¿En qué te puedo ayudar o qué quieres saber sobre su perfil?' }
    ]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const messagesEndRef = useRef(null);
    // 1. Añadimos un ref para manipular el input directamente
    const inputRef = useRef(null);

    // Auto-scroll al último mensaje
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    // 2. Efecto para auto-enfocar el input cuando se abre el chat o termina de cargar
    useEffect(() => {
        if (isOpen && !isLoading) {
            // Un pequeño timeout asegura que la animación de apertura haya terminado
            setTimeout(() => inputRef.current?.focus(), 100);
        }
    }, [isOpen, isLoading]);

    const sendMessage = async (e) => {
        e.preventDefault();
        if (!input.trim()) return;

        const userText = input;
        setMessages(prev => [...prev, { role: 'user', content: userText }]);
        setInput('');
        setIsLoading(true);

        try {
            const response = await fetch('/api/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ message: userText })
            });

            const data = await response.json();
            setMessages(prev => [...prev, { role: 'assistant', content: data.reply }]);
        } catch (error) {
            setMessages(prev => [...prev, { role: 'assistant', content: 'Hubo un error de red. Intenta más tarde.' }]);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            {/* Botón flotante: Movido a bottom-24 right-6 (Justo arriba de WhatsApp) */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="fixed bottom-24 right-6 z-50 flex items-center justify-center w-14 h-14 bg-accent text-white rounded-full shadow-lg shadow-accent/30 hover:bg-accent-hover hover:scale-110 hover:-translate-y-1 transition-all duration-300"
                aria-label="Abrir Asistente IA"
            >
                {isOpen ? (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                ) : (
                    // Nuevo Icono de Robot
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h2m4 0h2m-6 4h4" />
                    </svg>
                )}
            </button>

            {/* Ventana del Chatbot: Movida a bottom-40 right-6, con dimensiones responsivas */}
            <div className={`fixed bottom-40 right-6 z-50 w-[calc(100vw-3rem)] sm:w-80 md:w-96 h-[500px] max-h-[70vh] bg-surface border border-zinc-800 rounded-2xl shadow-2xl transition-all duration-300 origin-bottom-right flex flex-col overflow-hidden ${isOpen ? 'scale-100 opacity-100 visible' : 'scale-0 opacity-0 invisible'}`}>

                {/* Header (shrink-0 evita que se aplaste al faltar espacio) */}
                <div className="bg-zinc-900 border-b border-zinc-800 p-4 flex items-center gap-3 shrink-0">
                    <div className="w-2 h-2 rounded-full bg-accent animate-pulse"></div>
                    <h3 className="text-white font-mono text-sm font-bold">Asistente IA de Jovani</h3>
                </div>

                {/* Área de Mensajes (flex-1 para absorber el espacio, overscroll-contain para UX) */}
                <div className="flex-1 p-4 overflow-y-auto flex flex-col gap-4 scrollbar-thin overscroll-contain">
                    {messages.map((msg, index) => (
                        <div key={index} className={`max-w-[85%] p-3 rounded-2xl text-sm ${msg.role === 'user' ? 'bg-accent text-white self-end rounded-br-sm' : 'bg-zinc-800 text-zinc-300 self-start rounded-bl-sm'}`}>
                            {msg.content}
                        </div>
                    ))}
                    {isLoading && (
                        <div className="bg-zinc-800 text-zinc-300 self-start rounded-2xl rounded-bl-sm p-3 max-w-[85%] flex gap-1 items-center">
                            <span className="w-2 h-2 bg-zinc-500 rounded-full animate-bounce"></span>
                            <span className="w-2 h-2 bg-zinc-500 rounded-full animate-bounce delay-75"></span>
                            <span className="w-2 h-2 bg-zinc-500 rounded-full animate-bounce delay-150"></span>
                        </div>
                    )}
                    <div ref={messagesEndRef} />
                </div>

                {/* Input Area */}
                <form onSubmit={sendMessage} className="p-3 bg-zinc-900 border-t border-zinc-800 flex gap-2 shrink-0">
                    <input
                        ref={inputRef} // 3. Vinculamos el ref al elemento DOM
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="Pregúntale a la IA..."
                        className="flex-1 bg-base border border-zinc-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-accent"
                        disabled={isLoading}
                    />
                    <button
                        type="submit"
                        disabled={isLoading || !input.trim()}
                        className="p-2 bg-accent text-white rounded-lg hover:bg-accent-hover disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg>
                    </button>
                </form>
            </div>
        </>
    );
};