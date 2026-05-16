import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MagneticButton } from '../components/ui/MagneticButton';
import './PageStyles.css';

const NotFound = () => {
    return (
        <div className="inner-page" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div className="orb-bg" style={{ width: 700, height: 700, background: 'var(--accent-cyan)', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', opacity: 0.08 }} />

            <div style={{ textAlign: 'center', position: 'relative', zIndex: 2, padding: '0 2rem' }}>
                <p className="page-kicker" style={{ justifyContent: 'center', marginBottom: '1rem' }}>Error 404</p>
                <h1
                    style={{
                        fontFamily: 'var(--font-heading)',
                        fontSize: 'clamp(8rem, 20vw, 16rem)',
                        fontWeight: 900,
                        lineHeight: 0.9,
                        color: 'transparent',
                        WebkitTextStroke: '2px rgba(255,255,255,0.15)',
                        margin: '0 0 2rem',
                        userSelect: 'none',
                    }}
                >
                    404
                </h1>
                <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', marginBottom: '0.75rem', maxWidth: 480, margin: '0 auto 2rem' }}>
                    Signal lost. The coordinate you requested doesn't exist in our grid.
                </p>
                <MagneticButton className="btn-v2-primary">
                    <Link to="/">Return to Mission Control</Link>
                </MagneticButton>
            </div>
        </div>
    );
};

export default NotFound;
