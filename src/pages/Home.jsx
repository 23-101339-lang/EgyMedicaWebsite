import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Activity, Dna, Hexagon, Plus, Heart, Shield, Microscope } from 'lucide-react';
import { MagneticButton } from '../components/ui/MagneticButton';
import { SectionReveal } from '../components/ui/SectionReveal';
import './Home.css';

const Home = () => {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const ingredients = [
        { id: '01', title: 'AI Diagnostics', desc: 'Neural imaging models processing 10,000 scans per second with 99.8% accuracy.', pos: 'top-left' },
        { id: '02', title: 'Surgical Robotics', desc: 'Sub-millimeter precision in minimally invasive procedures.', pos: 'top-right' },
        { id: '03', title: 'Genomic Sequencing', desc: 'Real-time DNA mapping and genetic algorithm visualization.', pos: 'bottom-left' },
        { id: '04', title: 'Nano-Medicine', desc: 'Targeted drug delivery systems via intelligent nanobot swarms.', pos: 'bottom-right' },
    ];

    const recipes = [
        { title: 'Robotic Surgery Live', img: '/images/tech_surgery.png', tag: 'Hall A5' },
        { title: 'Biotech Innovation', img: '/images/biotech_dna.png', tag: 'Hall B2' },
        { title: 'Future Exhibition', img: '/images/future_exhibition.png', tag: 'Hall C7' },
        { title: 'Genomics Lab', img: '/images/biotech_dna.png', tag: 'Hall D1' },
    ];

    return (
        <div className="home-v2">

            {/* ─────────── SECTION 1: BIG HERO ─────────── */}
            <section className="hero-v2">
                <div className="hero-v2-bg-glow"></div>
                <div className="wavy-bottom"></div>

                <div className="hero-v2-content">
                    <div className="hero-v2-left">
                        <div className="hero-v2-tag"><Activity size={14} /> EGYMEDICA 2026</div>
                        <h1 className="hero-v2-title">
                            THE FUTURE<br />
                            OF <span className="hero-accent-outline">MEDICINE</span><br />
                            IS HERE
                        </h1>
                        <p className="hero-v2-sub">
                            The MENA's most immersive medical tech exhibition. 3 days. 500+ innovators. One defining moment.
                        </p>
                        <div className="hero-v2-actions">
                            <MagneticButton className="btn-v2-primary">
                                <Link to="/booking">Secure Your Pass</Link>
                            </MagneticButton>
                            <MagneticButton className="btn-v2-ghost">
                                <Link to="/exhibitors">Explore Exhibitors</Link>
                            </MagneticButton>
                        </div>
                        <div className="hero-v2-stats">
                            <div className="stat"><span>500+</span><p>Exhibitors</p></div>
                            <div className="stat-divider"></div>
                            <div className="stat"><span>85K+</span><p>Attendees</p></div>
                            <div className="stat-divider"></div>
                            <div className="stat"><span>3</span><p>Days</p></div>
                        </div>
                    </div>

                    <div className="hero-v2-right">
                        <div className="floating-device-wrapper" style={{ transform: `translateY(${scrollY * -0.08}px)` }}>
                            <img src="/images/hero_device.png" alt="Surgical Robot" className="hero-device-img floating-anim" />
                            <div className="device-glow-ring"></div>
                        </div>
                        {/* Floating annotation badges */}
                        <div className="annotation-badge badge-1">
                            <Heart size={14} />
                            <span>Precision Care</span>
                        </div>
                        <div className="annotation-badge badge-2">
                            <Shield size={14} />
                            <span>Zero Margin Error</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* ─────────── SECTION 2: INTRO TEXT ─────────── */}
            <section className="intro-section section">
                <SectionReveal direction="up">
                    <div className="intro-inner container">
                        <div className="intro-kicker">
                            <span className="kicker-line"></span>
                            <span>The Exhibition</span>
                        </div>
                        <h2 className="intro-headline">
                            A <em>revolutionary</em> convergence of science, technology, and human ingenuity — all under one roof.
                        </h2>
                        <p className="intro-body">
                            EGYMEDICA is not a trade show. It is a living laboratory — a space where tomorrow's cures are demonstrated today, where practitioners meet innovators, and where the boundaries of what is medically possible are publicly redefined.
                        </p>
                    </div>
                </SectionReveal>
            </section>

            {/* ─────────── SECTION 3: INGREDIENTS / PILLARS ─────────── */}
            <section className="pillars-section section">
                <div className="container">
                    <SectionReveal>
                        <div className="section-label-row">
                            <span className="section-kicker">Innovation Engine</span>
                            <h2 className="section-heading-lg">4 Pillars of the Exhibition</h2>
                        </div>
                    </SectionReveal>
                    <div className="pillars-annotated-layout">
                        <div className="pill-center-visual" style={{ transform: `translateY(${scrollY * -0.05}px)` }}>
                            <img src="/images/floating_pill.png" alt="Medical Capsule" className="pill-center-img floating-anim-slow" />
                        </div>
                        {ingredients.map((item, i) => (
                            <SectionReveal key={i} delay={i * 0.1} direction={i % 2 === 0 ? 'left' : 'right'}>
                                <div className={`pillar-annotation pillar-${item.pos}`}>
                                    <div className="pillar-arrow-line"></div>
                                    <div className="pillar-tag">{item.title}</div>
                                    <p className="pillar-desc">{item.desc}</p>
                                </div>
                            </SectionReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* ─────────── SECTION 4: STETHOSCOPE SPLIT ─────────── */}
            <section className="split-v2-section">
                <div className="split-v2-left">
                    <div className="split-device-container" style={{ transform: `translateY(${scrollY * -0.06}px)` }}>
                        <img src="/images/stethoscope.png" alt="Digital Stethoscope" className="split-device-img floating-anim" />
                    </div>
                </div>
                <div className="split-v2-right">
                    <SectionReveal direction="right">
                        <span className="section-kicker">The Technology</span>
                        <h2 className="split-heading">
                            EGYMEDICA<br /><span className="split-accent">2026</span>
                        </h2>
                        <p className="split-body">
                            For three immersive days, the exhibition floor becomes the world's most advanced medical technology showcase. Walk through corridors of innovation where digital meets diagnosis, where algorithms meet anatomy, and where technology finally meets its highest purpose — healing.
                        </p>
                        <div className="split-feature-icons">
                            <div className="feature-icon-item"><Dna size={28} /><span>Genomics</span></div>
                            <div className="feature-icon-item"><Activity size={28} /><span>Live Demos</span></div>
                            <div className="feature-icon-item"><Hexagon size={28} /><span>Nano-Tech</span></div>
                        </div>
                        <MagneticButton className="btn-v2-primary">
                            <Link to="/schedule">View Full Schedule</Link>
                        </MagneticButton>
                    </SectionReveal>
                </div>
            </section>

            {/* ─────────── SECTION 5: MARQUEE ─────────── */}
            <div className="marquee-v2-wrapper">
                <div className="marquee-v2">
                    {['Redefining Healthcare', 'Surgical Precision', 'Genomic Frontiers', 'AI Diagnostics', 'Nano-Medicine', 'Live Demos', 'MENA\'s #1 Exhibition'].map((t, i) => (
                        <React.Fragment key={i}>
                            <span>{t}</span>
                            <Plus size={20} className="marquee-plus" />
                        </React.Fragment>
                    ))}
                    {['Redefining Healthcare', 'Surgical Precision', 'Genomic Frontiers', 'AI Diagnostics', 'Nano-Medicine', 'Live Demos', 'MENA\'s #1 Exhibition'].map((t, i) => (
                        <React.Fragment key={i + 100}>
                            <span>{t}</span>
                            <Plus size={20} className="marquee-plus" />
                        </React.Fragment>
                    ))}
                </div>
            </div>

            {/* ─────────── SECTION 6: EXHIBITION ZONES (RECIPE CARDS) ─────────── */}
            <section className="zones-section section">
                <div className="zones-header">
                    <SectionReveal direction="left">
                        <div className="zones-left-card">
                            <h2 className="zones-cta-title">Explore Our<br />Exhibition Zones</h2>
                            <MagneticButton className="btn-v2-primary">
                                <Link to="/exhibitors">See All Zones</Link>
                            </MagneticButton>
                        </div>
                    </SectionReveal>
                    <div className="zones-grid">
                        {recipes.map((zone, i) => (
                            <SectionReveal key={i} delay={i * 0.1}>
                                <div className="zone-card">
                                    <img src={zone.img} alt={zone.title} />
                                    <div className="zone-card-info">
                                        <p className="zone-tag">{zone.tag}</p>
                                        <h3>{zone.title}</h3>
                                    </div>
                                </div>
                            </SectionReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* ─────────── SECTION 7: DARK CTA ─────────── */}
            <section
                className="cta-v2-section"
                style={{ backgroundImage: 'linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.9)), url("/images/future_exhibition.png")', backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed' }}
            >
                <SectionReveal direction="up">
                    <h2 className="cta-v2-title">Ready to be<br /><span className="cta-v2-accent">part of history?</span></h2>
                    <p className="cta-v2-sub">October 14–16, 2026 · Cairo International Convention Centre, Egypt.</p>
                    <MagneticButton className="btn-v2-primary btn-v2-large">
                        <Link to="/booking">Register Now</Link>
                    </MagneticButton>
                </SectionReveal>
            </section>

        </div>
    );
};

export default Home;
