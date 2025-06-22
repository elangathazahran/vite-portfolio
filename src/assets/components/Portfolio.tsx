import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../../App.css";

import ReactJsPortfolio from "../images/react portfolio.png";
import Certiport from "../images/certiport.jpg";
import Gmetrix from "../images/gmtrix.jpg";
import BudgetTracker from "../images/budget_tracker.png";
import FeIntership from "../images/PKL.jpg";

type PortfolioItem = {
    title: string;
    description: string;
    category: string;
    image: string;
    badge: string;
    demoLink?: string;
    codeLink?: string;
};

const portfolioData: PortfolioItem[] = [
    {
        title: "Portfolio Website",
        description: "Custom portfolio with React Js",
        category: "web",
        image: ReactJsPortfolio,
        badge: "Web Development",
        demoLink: "https://els-reactjs-portfolio.vercel.app/",
        codeLink: "https://github.com/elangathazahran/reactjs-portfolio",
    },
    {
        title: "Certiport HTML & CSS",
        description: "I've completed the Certiport HTML and CSS certification exam",
        category: "certifications",
        image: Certiport,
        badge: "Certification",
    },
    {
        title: "Gmetrix HTML & CSS",
        description: "I've completed the Gmetrix HTML and CSS certification exam",
        category: "certifications",
        image: Gmetrix,
        badge: "Certification",
    },
    {
        title: "Budget Tracker",
        description: "Expense tracker built with Laravel and clean UI.",
        category: "web",
        image: BudgetTracker,
        badge: "Web Development",
        codeLink: "https://github.com/elangathazahran/budget-tracker",
    },
    {
        title: "Frontend Web Dev Internship",
        description:
            "6-month internship at PT Kreasi Sawala Nusantara as Frontend Developer - built responsive UIs and collaborated in teams.",
        category: "certifications",
        image: FeIntership,
        badge: "Certification",
    },
];

const categories = ["all", "web", "freelance", "certifications"];

function Portfolio() {
    const [activeCategory, setActiveCategory] = useState("all");
    const [zoomImage, setZoomImage] = useState<string | null>(null);

    const filteredData = activeCategory === "all"
        ? portfolioData
        : portfolioData.filter((item) => item.category === activeCategory);

    return (
        <>
            <section id="portfolio" className="portfolio section">
                <div className="container">
                    <h2 className="section-title">My <span>Portfolio</span></h2>

                    <div className="portfolio-filter">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                className={`filter-btn ${activeCategory === cat ? "active" : ""}`}
                                onClick={() => setActiveCategory(cat)}
                            >
                                {cat.charAt(0).toUpperCase() + cat.slice(1)}
                            </button>
                        ))}
                    </div>

                    <div className="portfolio-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}>
                        <AnimatePresence>
                            {filteredData.map((item, index) => (
                                <motion.div
                                    key={item.title}
                                    className="portfolio-item active"
                                    data-category={item.category}
                                    initial={{ opacity: 0, scale: 0.8, y: 30 }}
                                    animate={{ opacity: 1, scale: 1, y: 0 }}
                                    exit={{ opacity: 0, scale: 0.5, y: 20 }}
                                    transition={{ duration: 0.4, delay: index * 0.1 }}
                                >
                                    <div className="portfolio-card">
                                        <div className="portfolio-img">
                                            <img src={item.image} alt={item.title} />
                                            <div className="portfolio-badge">{item.badge}</div>
                                        </div>
                                        <div className="portfolio-overlay">
                                            <div className="overlay-content">
                                                <h3>{item.title}</h3>
                                                <small>{item.description}</small>
                                                <div className="portfolio-links">
                                                    {item.demoLink && (
                                                        <a href={item.demoLink} target="_blank" rel="noopener noreferrer" className="portfolio-link" title="Live Demo">
                                                            <i className="fas fa-link"></i>
                                                        </a>
                                                    )}
                                                    {item.codeLink && (
                                                        <a href={item.codeLink} target="_blank" rel="noopener noreferrer" className="portfolio-link" title="Source Code">
                                                            <i className="fab fa-github"></i>
                                                        </a>
                                                    )}
                                                    {!item.demoLink && !item.codeLink && (
                                                        <button
                                                            onClick={() => setZoomImage(item.image)}
                                                            className="portfolio-link"
                                                            title="Lihat Gambar"
                                                        >
                                                            <i className="fas fa-eye"></i>
                                                        </button>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>
                </div>
            </section>

            {zoomImage && (
                <div className="zoom-modal" style={{
                    display: 'flex',
                    position: 'fixed',
                    top: 0, left: 0,
                    width: '100vw', height: '100vh',
                    backgroundColor: 'rgba(0, 0, 0, 0.7)',
                    justifyContent: 'center',
                    alignItems: 'center',
                    zIndex: 9999
                }}>
                    <span
                        className="zoom-close"
                        onClick={() => setZoomImage(null)}
                        style={{
                            position: 'absolute',
                            top: 20,
                            right: 30,
                            fontSize: '2rem',
                            color: '#fff',
                            cursor: 'pointer'
                        }}
                    >&times;</span>
                    <img src={zoomImage} alt="Zoom" style={{ maxWidth: '90%', maxHeight: '90%' }} />
                </div>
            )}

            <section className="hire-banner">
                <div className="container">
                    <h1 className="hire-title">🚀Available for Freelance Projects!</h1>
                    <p className="hire-text">
                        Looking for a dedicated and creative developer? Let's work together!
                    </p>
                    <div className="btn-group">
                        <a href="https://wa.me/6287788612930" target="_blank" className="btn">
                            <i className="fa-brands fa-whatsapp"></i> hire me
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Portfolio;