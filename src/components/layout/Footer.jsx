import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer section">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-brand">
                        <h2 className="footer-logo">EGY<span>MEDICA</span></h2>
                        <p className="footer-desc">
                            The premier futuristic healthcare and medical exhibition in Egypt.
                            Discover innovation, connect with leaders, and shape the future of medicine.
                        </p>
                    </div>
                    <div className="footer-links-grid">
                        <div className="footer-column">
                            <h3>Explore</h3>
                            <Link to="/about">About Us</Link>
                            <Link to="/exhibitors">Exhibitors</Link>
                            <Link to="/schedule">Schedule</Link>
                        </div>
                        <div className="footer-column">
                            <h3>Support</h3>
                            <Link to="/faq">FAQ</Link>
                            <Link to="/contact">Contact</Link>
                            <Link to="/booking">Registration</Link>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} EGYMEDICA. All rights reserved.</p>
                    <div className="social-links">
                        <a href="#">Twitter</a>
                        <a href="#">LinkedIn</a>
                        <a href="#">Instagram</a>
                    </div>
                </div>
            </div>
            <div className="footer-glow"></div>
        </footer>
    );
};

export default Footer;
