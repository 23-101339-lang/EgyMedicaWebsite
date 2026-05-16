import React from 'react';
import { SectionReveal } from '../components/ui/SectionReveal';
import { MagneticButton } from '../components/ui/MagneticButton';
import { Link } from 'react-router-dom';
import './PageStyles.css';

const Exhibitors = () => {
    const list = [
        { name: 'NeuroGenix', tech: 'AI Diagnostics', desc: 'Predictive neural mapping using quantum algorithms at scale.', zone: 'Hall A1' },
        { name: 'CyberMed', tech: 'Cybersecurity', desc: 'Blockchain-secured patient data infrastructure for hospital networks.', zone: 'Hall A2' },
        { name: 'BioSynth', tech: 'Biotech', desc: 'Synthetic organ printing and advanced tissue engineering.', zone: 'Hall B1' },
        { name: 'OmniRobotics', tech: 'Surgical Robotics', desc: 'Sub-millimeter precise multi-arm surgical systems.', zone: 'Hall B2' },
        { name: 'NanoHeal', tech: 'Nano-Medicine', desc: 'Targeted drug delivery via intelligent nanobot swarms.', zone: 'Hall C1' },
        { name: 'VRCare', tech: 'VR Training', desc: 'Immersive surgical simulation environments for residents.', zone: 'Hall C2' },
        { name: 'GenomIQ', tech: 'Genomics', desc: 'Real-time DNA sequencing dashboards for clinical environments.', zone: 'Hall D1' },
        { name: 'LumiScan', tech: 'Imaging', desc: 'Photon-resolution full-body imaging at 10× current fidelity.', zone: 'Hall D2' },
    ];

    return (
        <div className="inner-page">
            <div className="orb-bg" style={{ width: 600, height: 600, background: 'var(--accent-cyan)', top: '-5%', left: '-15%' }} />

            <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                <SectionReveal direction="up">
                    <div className="page-header-v2">
                        <p className="page-kicker">Who's Exhibiting</p>
                        <h1 className="page-hero-title">
                            Featured<br /><span className="title-outline">Innovators</span>
                        </h1>
                        <p className="page-sub">Companies redefining what is possible in modern medicine. All live, all interactive.</p>
                    </div>
                </SectionReveal>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.5rem', marginBottom: '4rem' }}>
                    {list.map((ex, i) => (
                        <SectionReveal key={i} delay={(i % 4) * 0.1}>
                            <div className="glass-card-v2 hover-lift" style={{ display: 'flex', flexDirection: 'column', gap: '1rem', height: '100%' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                                    <span className="accent-badge">{ex.tech}</span>
                                    <span style={{ color: 'var(--text-muted)', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: 1 }}>{ex.zone}</span>
                                </div>
                                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', fontWeight: 800, color: '#fff', margin: 0 }}>{ex.name}</h3>
                                <p style={{ color: 'var(--text-secondary)', margin: 0, lineHeight: 1.6, flex: 1 }}>{ex.desc}</p>
                                <button className="btn-v2-ghost" style={{ alignSelf: 'flex-start', padding: '0.6rem 1.4rem', fontSize: '0.85rem' }}>
                                    View Booth
                                </button>
                            </div>
                        </SectionReveal>
                    ))}
                </div>

                <SectionReveal direction="up">
                    <MagneticButton className="btn-v2-primary"><Link to="/booking">Apply as Exhibitor</Link></MagneticButton>
                </SectionReveal>
            </div>
        </div>
    );
};

export default Exhibitors;
