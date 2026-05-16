import React from 'react';
import { SectionReveal } from '../components/ui/SectionReveal';
import { MagneticButton } from '../components/ui/MagneticButton';
import './PageStyles.css';

const Booking = () => {
    const tiers = [
        { name: 'Visitor Pass', price: '$80', features: ['1-Day Access', 'Exhibition Floor', 'Keynote Viewing', 'Event Guide'] },
        { name: 'Professional Pass', price: '$200', features: ['3-Day Full Access', 'All Keynotes & Panels', 'CME Credits (18)', 'Networking Events', 'Priority Zone Entry'], highlight: true },
        { name: 'VIP Executive', price: '$500', features: ['3-Day Full Access', 'Private Meeting Rooms', 'Executive Lounge', 'Press & Gala Access', 'Dedicated Concierge'] },
    ];

    return (
        <div className="inner-page">
            <div className="orb-bg" style={{ width: 600, height: 600, background: 'var(--accent-teal)', top: '-10%', left: '-15%' }} />
            <div className="orb-bg" style={{ width: 500, height: 500, background: 'var(--accent-blue)', bottom: '5%', right: '-10%' }} />

            <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                <SectionReveal direction="up">
                    <div className="page-header-v2" style={{ textAlign: 'center' }}>
                        <p className="page-kicker" style={{ justifyContent: 'center' }}>October 14–16, 2026</p>
                        <h1 className="page-hero-title">
                            Secure Your <span className="title-outline">Pass</span>
                        </h1>
                        <p className="page-sub" style={{ margin: '0 auto' }}>Join thousands of visionaries at the MENA region's premier medical tech exhibition.</p>
                    </div>
                </SectionReveal>

                {/* Tiers */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px,1fr))', gap: '1.5rem', marginBottom: '5rem' }}>
                    {tiers.map((tier, i) => (
                        <SectionReveal key={i} delay={i * 0.1}>
                            <div
                                className="glass-card-v2 hover-lift"
                                style={{
                                    border: tier.highlight ? '1px solid var(--accent-cyan)' : undefined,
                                    position: 'relative',
                                    overflow: 'hidden'
                                }}
                            >
                                {tier.highlight && (
                                    <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 2, background: 'linear-gradient(90deg, var(--accent-cyan), var(--accent-teal))' }} />
                                )}
                                {tier.highlight && (
                                    <span className="accent-badge" style={{ position: 'absolute', top: '1.5rem', right: '1.5rem' }}>Most Popular</span>
                                )}
                                <p style={{ color: 'var(--text-muted)', textTransform: 'uppercase', fontSize: '0.8rem', letterSpacing: '1px', marginBottom: '0.5rem' }}>{tier.name}</p>
                                <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '3.5rem', fontWeight: 900, color: tier.highlight ? 'var(--accent-cyan)' : '#fff', margin: '0 0 2rem', lineHeight: 1 }}>
                                    {tier.price}<span style={{ fontSize: '1rem', color: 'var(--text-muted)', fontWeight: 400 }}>/person</span>
                                </h2>
                                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 2rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                                    {tier.features.map((f, fi) => (
                                        <li key={fi} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
                                            <span className="pulse-dot"></span>
                                            {f}
                                        </li>
                                    ))}
                                </ul>
                                <MagneticButton className={tier.highlight ? 'btn-v2-primary' : 'btn-v2-ghost'} style={{ width: '100%', textAlign: 'center' }}>
                                    Select Pass
                                </MagneticButton>
                            </div>
                        </SectionReveal>
                    ))}
                </div>

                {/* Form */}
                <SectionReveal direction="up">
                    <div className="glass-card-v2" style={{ maxWidth: 640, margin: '0 auto' }}>
                        <p className="page-kicker" style={{ marginBottom: '1.5rem' }}>Complete Your Registration</p>
                        <form className="form-v2" onSubmit={e => e.preventDefault()}>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }}>
                                <div className="form-field">
                                    <label>Full Name</label>
                                    <input className="form-input" type="text" placeholder="Dr. John Doe" />
                                </div>
                                <div className="form-field">
                                    <label>Specialty</label>
                                    <input className="form-input" type="text" placeholder="Cardiology" />
                                </div>
                            </div>
                            <div className="form-field">
                                <label>Organization / Hospital</label>
                                <input className="form-input" type="text" placeholder="Cairo University Hospital" />
                            </div>
                            <div className="form-field">
                                <label>Work Email</label>
                                <input className="form-input" type="email" placeholder="john@hospital.org" />
                            </div>
                            <MagneticButton className="btn-v2-primary" style={{ width: '100%', marginTop: '0.75rem', textAlign: 'center' }}>
                                Complete Registration →
                            </MagneticButton>
                        </form>
                    </div>
                </SectionReveal>
            </div>
        </div>
    );
};

export default Booking;
