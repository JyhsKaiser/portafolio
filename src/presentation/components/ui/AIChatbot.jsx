import { useState, useRef, useEffect } from 'react';

export const AIChatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { role: 'assistant', content: '¡Hola! Soy el asistente IA de Jovani. ¿En qué te puedo ayudar o qué quieres saber sobre su perfil?' }
    ]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef(null);

    // Auto-scroll al último mensaje
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    const sendMessage = async (e) => {
        e.preventDefault();
        if (!input.trim()) return;

        const userText = input;
        setMessages(prev => [...prev, { role: 'user', content: userText }]);
        setInput('');
        setIsLoading(true);

        try {
            // Llamamos a nuestro propio backend serverless de Azure
            // En desarrollo local Vite puede necesitar un proxy, pero en Azure esto funciona directo
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
            {/* Botón flotante para abrir el chat (Lado inferior izquierdo) */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="fixed bottom-6 left-6 z-50 flex items-center justify-center w-14 h-14 bg-accent text-white rounded-full shadow-lg shadow-accent/30 hover:bg-accent-hover hover:scale-110 hover:-translate-y-1 transition-all duration-300"
                aria-label="Abrir Asistente IA"
            >
                {isOpen ? (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                ) : (
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8m-7-.75a2 2 0 100 4h8a2 2 0 100-4h-8zM12 3a9 9 0 100 18 9 9 0 000-18z" /></svg>
                )}
            </button>

            {/* Ventana del Chatbot */}
            <div className={`fixed bottom-24 left-6 z-50 w-80 md:w-96 bg-surface border border-zinc-800 rounded-2xl shadow-2xl transition-all duration-300 origin-bottom-left flex flex-col overflow-hidden ${isOpen ? 'scale-100 opacity-100 visible' : 'scale-0 opacity-0 invisible'}`}>

                {/* Header del Chat */}
                <div className="bg-zinc-900 border-b border-zinc-800 p-4 flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent animate-pulse"></div>
                    <h3 className="text-white font-mono text-sm font-bold">Asistente IA de Jovani</h3>
                </div>

                {/* Área de Mensajes */}
                <div className="flex-1 p-4 h-80 overflow-y-auto flex flex-col gap-4 scrollbar-thin">
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
                <form onSubmit={sendMessage} className="p-3 bg-zinc-900 border-t border-zinc-800 flex gap-2">
                    <input
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