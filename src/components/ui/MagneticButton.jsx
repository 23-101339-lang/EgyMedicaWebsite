import React, { useRef, useState } from 'react';

export const MagneticButton = ({ children, className = '', as = 'button', onClick, ...props }) => {
    const ref = useRef(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouse = (e) => {
        const { clientX, clientY } = e;
        const { height, width, left, top } = ref.current.getBoundingClientRect();
        const middleX = clientX - (left + width / 2);
        const middleY = clientY - (top + height / 2);
        // Move element by 20% of the distance to edge
        setPosition({ x: middleX * 0.2, y: middleY * 0.2 });
    };

    const reset = () => {
        setPosition({ x: 0, y: 0 });
    };

    const { x, y } = position;

    // Conditionally remove transition when moving for instant snappiness, add it back on leave.
    const isMoving = x !== 0 || y !== 0;

    const Element = as;

    return (
        <Element
            className={`magnetic-element ${className}`}
            ref={ref}
            onMouseMove={handleMouse}
            onMouseLeave={reset}
            onClick={onClick}
            style={{
                transform: `translate(${x}px, ${y}px)`,
                transition: isMoving ? 'none' : 'transform 0.5s cubic-bezier(0.25, 1, 0.5, 1)'
            }}
            {...props}
        >
            <span
                style={{
                    transform: `translate(${x * 0.2}px, ${y * 0.2}px)`,
                    display: 'inline-block',
                    transition: isMoving ? 'none' : 'transform 0.5s cubic-bezier(0.25, 1, 0.5, 1)'
                }}
            >
                {children}
            </span>
        </Element>
    );
};
