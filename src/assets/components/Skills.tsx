import { useEffect } from 'react'
import '../../App.css'

import PHP from '../images/skills/php.png'
import Laravel from '../images/skills/laravel.png'
import CSS from '../images/skills/css.png'
import HTML from '../images/skills/html.png'
import Javascript from '../images/skills/js.png'
import React from '../images/skills/react.png'
import Next from '../images/skills/nextjs.png'
import Flask from '../images/skills/flask.png'
import Python from '../images/skills/python.png'
import Github from '../images/skills/github.png'
import Tailwind from '../images/skills/tailwind.png'
import Bootstrap from '../images/skills/bootstrap.png'

function Skills() {
    useEffect(() => {
        const swiper = new (window as any).Swiper('.mySwiper', {
            slidesPerView: 5,
            spaceBetween: 20,
            loop: true,
            freeMode: true,
            grabCursor: true,
            allowTouchMove: true,

            // ✅ Responsiveness
            breakpoints: {
                320: {
                    slidesPerView: 2,
                },
                480: {
                    slidesPerView: 3,
                },
                768: {
                    slidesPerView: 4,
                },
                1024: {
                    slidesPerView: 5,
                }
            },
        });

        let autoplay = true;
        let currentProgress = 0;
        const speed = 0.001;

        function smoothAutoplay() {
            if (autoplay) {
                currentProgress += speed;
                if (currentProgress >= 0.999) {
                    currentProgress = 0;
                    swiper.slideToLoop(0, 500);
                } else {
                    swiper.setProgress(currentProgress);
                }
            }
            requestAnimationFrame(smoothAutoplay);
        }

        requestAnimationFrame(smoothAutoplay);

        let timeout: any;
        swiper.el.addEventListener('pointerdown', () => {
            autoplay = false;
            clearTimeout(timeout);
        });
        swiper.el.addEventListener('pointerup', () => {
            timeout = setTimeout(() => (autoplay = true), 1000);
        });
    }, []);

    const skills = [
        { name: 'PHP', img: PHP },
        { name: 'Laravel', img: Laravel },
        { name: 'CSS3', img: CSS },
        { name: 'HTML5', img: HTML },
        { name: 'Javascript', img: Javascript },
        { name: 'React Js', img: React },
        { name: 'Next Js', img: Next },
        { name: 'Flask', img: Flask },
        { name: 'Python', img: Python },
        { name: 'Github', img: Github },
        { name: 'Tailwind', img: Tailwind },
        { name: 'Bootstrap 5', img: Bootstrap },
    ]

    return (
        <section id="skills" className="skills section">
            <div className="container">
                <h2 className="section-title">My <span>Skills</span></h2>
                <div className="swiper mySwiper">
                    <div className="swiper-wrapper">
                        {skills.map((skill, index) => (
                            <div className="swiper-slide" key={index}>
                                <div className="card">
                                    <img src={skill.img} alt={skill.name} />
                                    <span>{skill.name}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills