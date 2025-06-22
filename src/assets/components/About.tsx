import '../../App.css'
import AboutImg from '../images/grid1.png'

function About() {
    return (
        <section id="about" className="about section">
            <div className="container">
                <h2 className="section-title">About <span>Me</span></h2>
                <div className="about-content">
                    <div className="about-img">
                        <div className="img-box">
                            <img src={AboutImg} alt="Profile Image" />
                        </div>
                    </div>
                    <div className="about-text">
                        <h3>I'm a passionate web developer</h3>
                        <p>As a passionate Fullstack Web Developer, I specialize in building scalable, responsive, and
                            user-friendly web applications. I work with a modern tech stack including HTML5, CSS3, Bootstrap
                            5, JavaScript, PHP, Laravel, and React.js. I take pride in writing clean, efficient code and
                            creating seamless user experiences.</p>
                        <p>I thrive in team environments where collaboration and continuous learning are key. Keeping up
                            with the latest technologies and best practices is part of my daily routine, ensuring that the
                            solutions I develop are not only functional but also future-ready. Whether it's front-end design
                            or back-end logic, I enjoy bringing ideas to life through code and solving real-world problems
                            with smart digital solutions.</p>
                        <a href="https://drive.google.com/uc?export=download&id=11wosUfp3EdpWZaOVFNSYJbLB9EYEds2G"
                            className="btn" download>
                            Download CV
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default About