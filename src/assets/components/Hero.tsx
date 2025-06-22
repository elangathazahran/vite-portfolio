import { useEffect } from "react";
import '../../App.css'

function Hero() {
    useEffect(() => {
        // particles.js
        if ((window as any).particlesJS) {
            (window as any).particlesJS('particles-js', {
                particles: {
                    number: { value: 80, density: { enable: true, value_area: 800 } },
                    color: { value: "#ff4d4d" },
                    shape: { type: "circle" },
                    opacity: { value: 0.5 },
                    size: { value: 3, random: true },
                    line_linked: {
                        enable: true,
                        distance: 150,
                        color: "#ff4d4d",
                        opacity: 0.4,
                        width: 1
                    },
                    move: { enable: true, speed: 2 }
                },
                interactivity: {
                    events: {
                        onhover: { enable: true, mode: "grab" },
                        onclick: { enable: true, mode: "push" },
                        resize: true
                    },
                    modes: {
                        grab: { distance: 140, line_linked: { opacity: 1 } },
                        push: { particles_nb: 4 }
                    }
                },
                retina_detect: true
            })
        }

        // Typed.js
        if ((window as any).Typed) {
            new (window as any).Typed('.typing', {
                strings: ['Junior Fullstack Web Developer', 'UI/UX Designer', 'Freelancer'],
                typeSpeed: 50,
                backSpeed: 30,
                loop: true,
            })
        }
    }, [])
    return (
        <section id="home" className="hero">
            <div id="particles-js"></div>
            <div className="hero-content">
                <h1 className="hero-title">Hi, I'm <span>Elang Atha</span></h1>
                <p className="hero-subtitle">I am a, <span className="typing"></span></p>
                <div className="hero-buttons">
                    <a href="#portfolio" className="btn">View My Work</a>
                    <a href="#contact" className="btn btn-outline">Contact Me</a>
                </div>
            </div>
            <a href="#about" className="scroll-down">
                <i className="fas fa-chevron-down"></i>
            </a>
        </section>
    )
}
export default Hero