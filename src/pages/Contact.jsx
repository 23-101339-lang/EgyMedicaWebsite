import React from 'react';
import { SectionReveal } from '../components/ui/SectionReveal';
import { MagneticButton } from '../components/ui/MagneticButton';
import './PageStyles.css';

const Contact = () => {
    const info = [
        { label: 'Location', value: 'Cairo International Convention Centre\nNasr City, Cairo, Egypt' },
        { label: 'General Enquiries', value: 'contact@egymedica.tech' },
        { label: 'Exhibitor Relations', value: 'exhibitors@egymedica.tech' },
        { label: 'Media & Press', value: 'press@egymedica.tech' },
    ];

    return (
        <div className="inner-page">
            <div className="orb-bg" style={{ width: 700, height: 700, background: 'var(--accent-cyan)', top: '-20%', right: '-20%' }} />
            <div className="orb-bg" style={{ width: 400, height: 400, background: 'var(--accent-blue)', bottom: '0%', left: '-10%' }} />

            <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                <SectionReveal direction="up">
                    <div className="page-header-v2">
                        <p className="page-kicker">Reach Out</p>
                        <h1 className="page-hero-title">
                            Connect <span className="title-outline">With Us</span>
                        </h1>
                        <p className="page-sub">We'd love to hear from you — whether you're an attendee, exhibitor, or media partner.</p>
                    </div>
                </SectionReveal>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px,1fr))', gap: '3rem', alignItems: 'start' }}>
                    {/* Form */}
                    <SectionReveal delay={0.1} direction="left">
                        <div className="glass-card-v2">
                            <p className="page-kicker" style={{ marginBottom: '1.5rem' }}>Send a Message</p>
                            <form className="form-v2" onSubmit={e => e.preventDefault()}>
                                <div className="form-field">
                                    <label>Full Name</label>
                                    <input className="form-input" type="text" placeholder="Dr. Jane Smith" />
                                </div>
                                <div className="form-field">
                                    <label>Email Address</label>
                                    <input className="form-input" type="email" placeholder="jane@hospital.com" />
                                </div>
                                <div className="form-field">
                                    <label>Subject</label>
                                    <input className="form-input" type="text" placeholder="Exhibition inquiry..." />
                                </div>
                                <div className="form-field">
                                    <label>Message</label>
                                    <textarea className="form-input" placeholder="Tell us more..." />
                                </div>
                                <MagneticButton className="btn-v2-primary" style={{ alignSelf: 'flex-start', marginTop: '0.5rem' }}>
                                    Send Message
                                </MagneticButton>
                            </form>
                        </div>
                    </SectionReveal>

                    {/* Info */}
                    <SectionReveal delay={0.25} direction="right">
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            {info.map((item, i) => (
                                <div key={i} className="glass-card-v2 hover-lift" style={{ padding: '1.75rem 2rem' }}>
                                    <p className="page-kicker" style={{ marginBottom: '0.5rem', fontSize: '0.7rem' }}>{item.label}</p>
                                    <p style={{ color: '#fff', fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: '1.05rem', margin: 0, whiteSpace: 'pre-line' }}>{item.value}</p>
                                </div>
                            ))}
                        </div>
                    </SectionReveal>
                </div>
            </div>
        </div>
    );
};

export default Contact;
