import React, { useRef } from 'react';
import { useMousePosition } from '../../hooks/useMousePosition';
import './UI.css';

export const GlowCard = ({ children, className = '' }) => {
    const cardRef = useRef(null);
    const mousePosition = useMousePosition();

    const getGlowPosition = () => {
        if (!cardRef.current || mousePosition.x === null) return { x: 50, y: 50 };
        const rect = cardRef.current.getBoundingClientRect();
        const x = mousePosition.x - rect.left;
        const y = mousePosition.y - rect.top;
        return { x, y };
    };

    const glowPos = getGlowPosition();

    return (
        <div ref={cardRef} className={`glow-card ${className}`}>
            <div
                className="glow-card-background"
                style={{
                    background: `radial-gradient(circle 400px at ${glowPos.x}px ${glowPos.y}px, rgba(0, 240, 255, 0.12), transparent 40%)`
                }}
            />
            <div className="glow-card-content">
                {children}
            </div>
        </div>
    );
};
