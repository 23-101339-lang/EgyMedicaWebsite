import React, { useState } from 'react';
import { SectionReveal } from '../components/ui/SectionReveal';
import './PageStyles.css';

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const faqs = [
        { q: 'Who can attend EGYMEDICA 2026?', a: 'EGYMEDICA is open to medical professionals, healthcare executives, medical students, and tech industry innovators. Registration is required for all attendees. Badge types range from single-day visitor to full professional pass.' },
        { q: 'Are there live robotic surgery demonstrations?', a: 'Yes! The OmniRobotics zone in Hall B2 features 3 live multi-arm setups operating daily on synthetic tissue mockups, running at 11AM, 2PM and 5PM.' },
        { q: 'How can my company become an exhibitor?', a: 'Visit our Contact page to request an Exhibitor Prospectus. Spaces in the AI, Biotech, and Robotics zones are limited and typically fill 6 months in advance.' },
        { q: 'Is there a virtual attendance option?', a: 'EGYMEDICA 2026 will feature an immersive VR portal for remote attendees, allowing you to walk the exhibition floor virtually via Oculus or standard web browser.' },
        { q: 'What is the registration deadline?', a: 'Early bird registration closes August 31, 2026. Full price registration remains open until October 10, 2026 or until capacity is reached.' },
        { q: 'Are continuing education credits available?', a: 'Yes — participating physicians and nurses can earn up to 18 CME/CNE credits over the 3-day event. Full details are available in the attendee portal after registration.' },
    ];

    return (
        <div className="inner-page">
            <div className="orb-bg" style={{ width: 500, height: 500, background: 'var(--accent-blue)', top: '0%', right: '-10%' }} />

            <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                <SectionReveal direction="up">
                    <div className="page-header-v2">
                        <p className="page-kicker">Got Questions?</p>
                        <h1 className="page-hero-title">
                            FAQ<span className="title-outline">s</span>
                        </h1>
                        <p className="page-sub">Everything you need to know before attending EGYMEDICA 2026.</p>
                    </div>
                </SectionReveal>

                <div style={{ maxWidth: 780 }}>
                    {faqs.map((faq, i) => (
                        <SectionReveal key={i} delay={i * 0.06}>
                            <div
                                className={`faq-accordion-item ${openIndex === i ? 'open' : ''}`}
                                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                            >
                                <div className="faq-question">
                                    <h3>{faq.q}</h3>
                                    <div className="faq-icon">{openIndex === i ? '−' : '+'}</div>
                                </div>
                                <div className="faq-answer">
                                    <p>{faq.a}</p>
                                </div>
                            </div>
                        </SectionReveal>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FAQ;
