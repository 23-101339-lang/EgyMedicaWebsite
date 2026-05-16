import React, { useState } from 'react';
import { SectionReveal } from '../components/ui/SectionReveal';
import { MagneticButton } from '../components/ui/MagneticButton';
import { Link } from 'react-router-dom';
import './PageStyles.css';

const Schedule = () => {
    const [activeDay, setActiveDay] = useState(0);

    const days = [
        {
            label: 'Day 1 — Oct 14',
            items: [
                { time: '09:00 AM', title: 'Grand Opening Ceremony', speaker: 'Dr. Sarah El-Sayed · Director' },
                { time: '11:00 AM', title: 'Future of AI in Diagnostics', speaker: 'International Panel' },
                { time: '01:30 PM', title: 'Robotic Surgery Live Demo', speaker: 'OmniRobotics Team' },
                { time: '04:00 PM', title: 'Nano-Medicine Keynote', speaker: 'Prof. Ahmad Zaki' },
                { time: '07:00 PM', title: 'Welcome Gala Reception', speaker: 'All Attendees' },
            ]
        },
        {
            label: 'Day 2 — Oct 15',
            items: [
                { time: '09:30 AM', title: 'Genomics & Precision Medicine', speaker: 'GenomIQ Research' },
                { time: '11:30 AM', title: 'Blockchain in Healthcare', speaker: 'CyberMed Security' },
                { time: '02:00 PM', title: 'VR in Medical Training', speaker: 'VRCare Systems' },
                { time: '04:30 PM', title: 'Biotech Innovation Awards', speaker: 'Awards Committee' },
            ]
        },
        {
            label: 'Day 3 — Oct 16',
            items: [
                { time: '10:00 AM', title: 'Imaging Technology Showcase', speaker: 'LumiScan Labs' },
                { time: '12:00 PM', title: 'Investor Pitch Session', speaker: '12 Startups' },
                { time: '02:30 PM', title: 'Closing Keynote Address', speaker: 'Ministry of Health, Egypt' },
                { time: '05:00 PM', title: 'Networking & Closing Ceremony', speaker: 'All Attendees' },
            ]
        }
    ];

    return (
        <div className="inner-page">
            <div className="orb-bg" style={{ width: 600, height: 600, background: 'var(--accent-teal)', top: '20%', right: '-15%' }} />

            <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                <SectionReveal direction="up">
                    <div className="page-header-v2">
                        <p className="page-kicker">3 Days · 40+ Sessions</p>
                        <h1 className="page-hero-title">
                            Event<br /><span className="title-outline">Schedule</span>
                        </h1>
                        <p className="page-sub">Plan your exhibition experience. Join keynotes, live demos, workshops, and exclusive networking sessions.</p>
                    </div>
                </SectionReveal>

                {/* Day Tabs */}
                <SectionReveal delay={0.1}>
                    <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '4rem', flexWrap: 'wrap' }}>
                        {days.map((day, i) => (
                            <button
                                key={i}
                                onClick={() => setActiveDay(i)}
                                style={{
                                    padding: '0.75rem 1.75rem',
                                    borderRadius: '50px',
                                    border: `1px solid ${activeDay === i ? 'var(--accent-cyan)' : 'rgba(255,255,255,0.12)'}`,
                                    background: activeDay === i ? 'var(--accent-cyan)' : 'transparent',
                                    color: activeDay === i ? '#000' : '#fff',
                                    fontFamily: 'var(--font-heading)',
                                    fontWeight: 700,
                                    fontSize: '0.9rem',
                                    cursor: 'pointer',
                                    transition: 'all 0.3s'
                                }}
                            >
                                {day.label}
                            </button>
                        ))}
                    </div>
                </SectionReveal>

                {/* Timeline */}
                <div className="timeline-v2" style={{ maxWidth: 760 }}>
                    {days[activeDay].items.map((item, i) => (
                        <SectionReveal key={`${activeDay}-${i}`} delay={i * 0.08} direction="left">
                            <div className="timeline-item-v2">
                                <p className="t-time"><span className="pulse-dot" style={{ marginRight: '0.5rem' }}></span>{item.time}</p>
                                <h3 className="t-title">{item.title}</h3>
                                <p className="t-speaker">{item.speaker}</p>
                            </div>
                        </SectionReveal>
                    ))}
                </div>

                <div style={{ marginTop: '4rem' }}>
                    <SectionReveal direction="up">
                        <MagneticButton className="btn-v2-primary"><Link to="/booking">Register to Attend</Link></MagneticButton>
                    </SectionReveal>
                </div>
            </div>
        </div>
    );
};

export default Schedule;
