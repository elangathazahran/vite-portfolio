import { useRef } from 'react'
import '../../App.css'

function Contact() {
    const formRef = useRef<HTMLFormElement>(null)

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        alert('Thank you for your message! I will get back to you soon.')
        formRef.current?.reset()
    }

    return (
        <section id="contact" className="contact section">
            <div className="container">
                <h2 className="section-title">Contact <span>Me</span></h2>
                <div className="contact-content">
                    <div className="contact-info">
                        <h3>Get in Touch</h3>
                        <p>I'm always open to discussing new projects, collaborations, or just a friendly chat about web development. Whether you have a question, an idea, or simply want to say hello — feel free to reach out. Let's build something great together!</p>

                        <div className="info-item">
                            <i className="fas fa-map-marker-alt"></i>
                            <div>
                                <h4>Location</h4>
                                <p>Jawa Barat, Indonesia</p>
                            </div>
                        </div>

                        <div className="info-item">
                            <i className="fas fa-envelope"></i>
                            <div>
                                <h4>Email</h4>
                                <p>athazahranel@gmail.com</p>
                            </div>
                        </div>

                        <div className="info-item">
                            <i className="fas fa-phone-alt"></i>
                            <div>
                                <h4>Phone</h4>
                                <p>+62 8778 8612 930</p>
                            </div>
                        </div>

                        <div className="social-links">
                            <a href="https://www.instagram.com/zaayeenn_/" target="_blank" rel="noopener noreferrer" className="instagram">
                                <i className="fab fa-instagram"></i>
                                <i className="fab fa-instagram"></i>
                            </a>
                            <a href="https://www.linkedin.com/in/elang-atha-zahran-100459220/" target="_blank" rel="noopener noreferrer" className="linkedin">
                                <i className="fab fa-linkedin"></i>
                                <i className="fab fa-linkedin"></i>
                            </a>
                            <a href="https://github.com/elangathazahran" target="_blank" rel="noopener noreferrer" className="github">
                                <i className="fab fa-github"></i>
                                <i className="fab fa-github"></i>
                            </a>
                        </div>
                    </div>

                    <form className="contact-form" ref={formRef} onSubmit={handleSubmit}>
                        <div className="form-group">
                            <input type="text" placeholder="Your Name" required />
                        </div>
                        <div className="form-group">
                            <input type="email" placeholder="Your Email" required />
                        </div>
                        <div className="form-group">
                            <input type="text" placeholder="Subject" />
                        </div>
                        <div className="form-group">
                            <textarea placeholder="Your Message" required></textarea>
                        </div>
                        <button type="submit" className="btn">Send Message</button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contact