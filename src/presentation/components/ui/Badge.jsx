import React from 'react';

export const Badge = ({ children }) => (
    <span className="px-3 py-1 text-xs font-mono border border-accent/30 bg-accent/10 text-accent-light rounded-full">
        {children}
    </span>
);