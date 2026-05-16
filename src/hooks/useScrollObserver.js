import { useEffect, useRef, useState } from 'react';

export const useScrollObserver = (options = { threshold: 0.1, triggerOnce: true }) => {
    const [isIntersecting, setIntersecting] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIntersecting(true);
                if (options.triggerOnce && ref.current) {
                    observer.unobserve(ref.current);
                }
            } else if (!options.triggerOnce) {
                setIntersecting(false);
            }
        }, options);

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, [options.threshold, options.triggerOnce]);

    return [ref, isIntersecting];
};
