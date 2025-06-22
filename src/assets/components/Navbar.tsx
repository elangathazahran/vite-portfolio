import { useEffect, useState } from "react";
import '../../App.css'

function Navbar() {
    const [navActive, setNavActive] = useState(false)

    useEffect(() => {
        // Navbar scroll
        const navbar = document.querySelector('.navbar')!
        const backToTop = document.querySelector('.back-to-top')
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) navbar.classList.add('scrolled')
            else navbar.classList.remove('scrolled')

            if (backToTop) {
                if (window.scrollY > 300) backToTop.classList.add('active')
                else backToTop.classList.remove('active')
            }
        })

        // Theme switch
        const themeSwitch = document.getElementById('checkbox') as HTMLInputElement
        const currentTheme = localStorage.getItem('theme')

        themeSwitch.addEventListener('change', () => {
            if (themeSwitch.checked) {
                document.documentElement.setAttribute('data-theme', 'light')
                localStorage.setItem('theme', 'light')
            } else {
                document.documentElement.setAttribute('data-theme', 'dark')
                localStorage.setItem('theme', 'dark')
            }
        })

        if (currentTheme) {
            document.documentElement.setAttribute('data-theme', currentTheme)
            if (currentTheme === 'light') themeSwitch.checked = true
        }
    }, [])

    const closeMenu = () => {
        setNavActive(false)
    }

    return (
        <nav className="navbar">
            <div className="container">
                <a href="#" className="logo">Portfolio</a>
                <div className={`nav-links ${navActive ? 'active' : ''}`}>
                    <a href="#home" onClick={closeMenu}>Home</a>
                    <a href="#about" onClick={closeMenu}>About</a>
                    <a href="#experience" onClick={closeMenu}>Experience</a>
                    <a href="#skills" onClick={closeMenu}>Skills</a>
                    <a href="#portfolio" onClick={closeMenu}>Portfolio</a>
                    <a href="#contact" onClick={closeMenu}>Contact</a>
                    <div className="theme-switch-wrapper">
                        <label className="theme-switch" htmlFor="checkbox">
                            <input type="checkbox" id="checkbox" />
                            <div className="slider round"></div>
                        </label>
                    </div>
                </div>
                <div
                    className={`hamburger ${navActive ? 'active' : ''}`}
                    onClick={() => setNavActive(!navActive)}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </nav>
    )
}

export default Navbar