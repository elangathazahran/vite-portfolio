import { useEffect, useState } from "react";
import '../../App.css'

import ReactJsPortfolio from '../images/react portfolio.png'
import Certiport from '../images/certiport.jpg'
import Gmetrix from '../images/gmtrix.jpg'
import BudgetTracker from '../images/budget_tracker.png'
import FeIntership from '../images/PKL.jpg'

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
        title: "Frontend Web Developer Internship",
        description: "Intern at PT Kreasi Sawala Nusantara (6 mo) | Responsive UI & teamwork.",
        category: "certifications",
        image: FeIntership,
        badge: "Certification",
    },
];

function Portfolio() {
    const [zoomImage, setZoomImage] = useState<string | null>(null);

    useEffect(() => {
        const filterButtons = document.querySelectorAll('.filter-btn');
        const portfolioItems = document.querySelectorAll('.portfolio-item');
        const portfolioGrid = document.querySelector('.portfolio-grid');

        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                filterButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');

                const filterValue = button.getAttribute('data-filter');

                const calculateDelay = (index: number) => {
                    const row = Math.floor(index / 3);
                    const col = index % 3;
                    return (row * 0.1) + (col * 0.05);
                };

                portfolioItems.forEach((item, index) => {
                    const matches = filterValue === 'all' || item.getAttribute('data-category') === filterValue;
                    if (item.classList.contains('active') && !matches) {
                        item.setAttribute('style', `transition-delay: ${calculateDelay(index)}s`);
                        item.classList.add('exit');
                        item.classList.remove('active');
                    }
                });

                setTimeout(() => {
                    portfolioItems.forEach((item, index) => {
                        const matches = filterValue === 'all' || item.getAttribute('data-category') === filterValue;
                        item.classList.remove('exit');
                        if (matches) {
                            item.setAttribute('style', `transition-delay: ${calculateDelay(index)}s`);
                            setTimeout(() => item.classList.add('active'), 50);
                        } else {
                            item.classList.remove('active');
                        }
                    });

                    void (portfolioGrid as HTMLElement)?.offsetWidth;
                }, 500);
            });
        });
    }, []);

    return (
        <>
            <section id="portfolio" className="portfolio section">
                <div className="container">
                    <h2 className="section-title">My <span>Portfolio</span></h2>

                    {/* Filter Buttons */}
                    <div className="portfolio-filter">
                        <button className="filter-btn active" data-filter="all">All Projects</button>
                        <button className="filter-btn" data-filter="web">Web Developments</button>
                        <button className="filter-btn" data-filter="freelance">Freelances</button>
                        <button className="filter-btn" data-filter="certifications">Certifications</button>
                    </div>

                    {/* Portfolio Grid */}
                    <div className="portfolio-grid">
                        {portfolioData.map((item, index) => (
                            <div key={index} className="portfolio-item active" data-category={item.category}>
                                <div className="portfolio-card">
                                    <div className="portfolio-img">
                                        <img src={item.image} alt={item.title} />
                                        <div className="portfolio-badge">{item.badge}</div>
                                    </div>
                                    <div className="portfolio-overlay">
                                        <div className="overlay-content">
                                            <h3>{item.title}</h3>
                                            <p>{item.description}</p>
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
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Zoom Modal */}
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