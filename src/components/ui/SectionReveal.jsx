import React from 'react';
import { useScrollObserver } from '../../hooks/useScrollObserver';
import './UI.css';

export const SectionReveal = ({ children, direction = 'up', delay = 0, className = '' }) => {
    const [ref, isVisible] = useScrollObserver({ threshold: 0.15, triggerOnce: true });

    const getTransform = () => {
        switch (direction) {
            case 'left': return 'translateX(-50px)';
            case 'right': return 'translateX(50px)';
            case 'up': default: return 'translateY(50px)';
        }
    };

    const style = {
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translate(0)' : getTransform(),
        transition: `opacity 0.8s ease ${delay}s, transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${delay}s`,
    };

    return (
        <div ref={ref} style={style} className={className}>
            {children}
        </div>
    );
};
