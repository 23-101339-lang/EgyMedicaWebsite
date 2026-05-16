import React from 'react';
import { SectionReveal } from '../components/ui/SectionReveal';
import { MagneticButton } from '../components/ui/MagneticButton';
import { Link } from 'react-router-dom';
import './PageStyles.css';

const About = () => {
    const team = [
        { name: 'Dr. Sarah El-Sayed', role: 'Exhibition Director', specialty: 'AI Diagnostics' },
        { name: 'Prof. Karim Mansour', role: 'Technology Advisor', specialty: 'Surgical Robotics' },
        { name: 'Dr. Nadia Farid', role: 'Biotech Lead', specialty: 'Genomic Medicine' },
    ];

    return (
        <div className="inner-page">
            {/* Background glow orbs */}
            <div className="orb-bg" style={{ width: 700, height: 700, background: 'var(--accent-teal)', top: '-10%', right: '-15%' }} />
            <div className="orb-bg" style={{ width: 500, height: 500, background: 'var(--accent-blue)', bottom: '10%', left: '-10%' }} />

            <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                {/* Header */}
                <SectionReveal direction="up">
                    <div className="page-header-v2">
                        <p className="page-kicker">About the Exhibition</p>
                        <h1 className="page-hero-title">
                            Our <span className="title-outline">Vision</span>
                        </h1>
                        <p className="page-sub">EGYMEDICA is not merely an exhibition; it is the catalyst for the next century of medical advancement in the MENA region.</p>
                    </div>
                </SectionReveal>

                {/* Stats */}
                <SectionReveal delay={0.1}>
                    <div className="stats-row">
                        <div className="stat-block">
                            <span className="stat-num shimmer-text">20+</span>
                            <span className="stat-label">Years of Excellence</span>
                        </div>
                        <div className="stat-block">
                            <span className="stat-num shimmer-text">85k+</span>
                            <span className="stat-label">Total Attendees</span>
                        </div>
                        <div className="stat-block">
                            <span className="stat-num shimmer-text">500+</span>
                            <span className="stat-label">Global Exhibitors</span>
                        </div>
                        <div className="stat-block">
                            <span className="stat-num shimmer-text">40+</span>
                            <span className="stat-label">Countries Represented</span>
                        </div>
                    </div>
                </SectionReveal>

                {/* Mission */}
                <SectionReveal delay={0.2} direction="up">
                    <div className="glass-card-v2" style={{ marginBottom: '3rem' }}>
                        <p className="page-kicker">Our Mission</p>
                        <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', lineHeight: 1.75, maxWidth: 800 }}>
                            We bring together the brightest minds in robotics, artificial intelligence, and biotechnology. By creating an immersive environment where technology and healthcare intersect, we empower organizations to disrupt traditional medical paradigms and architect a healthier global future.
                        </p>
                    </div>
                </SectionReveal>

                {/* Team */}
                <SectionReveal delay={0.1}>
                    <p className="page-kicker" style={{ marginBottom: '2rem' }}>Advisory Board</p>
                </SectionReveal>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px,1fr))', gap: '1.5rem', marginBottom: '5rem' }}>
                    {team.map((member, i) => (
                        <SectionReveal key={i} delay={i * 0.1}>
                            <div className="glass-card-v2 hover-lift" style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                                <div style={{ width: 50, height: 50, borderRadius: '50%', background: 'rgba(0,240,255,0.1)', border: '1px solid rgba(0,240,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-cyan)', fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '1.2rem' }}>
                                    {member.name[0]}
                                </div>
                                <p style={{ color: '#fff', fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '1.1rem', margin: 0 }}>{member.name}</p>
                                <p style={{ color: 'var(--accent-teal)', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '1px', margin: 0 }}>{member.role}</p>
                                <span className="accent-badge">{member.specialty}</span>
                            </div>
                        </SectionReveal>
                    ))}
                </div>

                {/* CTA */}
                <SectionReveal direction="up">
                    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                        <MagneticButton className="btn-v2-primary"><Link to="/booking">Register Now</Link></MagneticButton>
                        <MagneticButton className="btn-v2-ghost"><Link to="/exhibitors">Meet the Exhibitors</Link></MagneticButton>
                    </div>
                </SectionReveal>
            </div>
        </div>
    );
};

export default About;
