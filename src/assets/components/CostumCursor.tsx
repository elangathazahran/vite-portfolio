import { useEffect, useState } from "react";
import '../../App.css'

function CostumCursor() {
    const [isActive, setIsActive] = useState(true);

    useEffect(() => {
        const mediaQuery = window.matchMedia('(max-width: 575.98px)');

        const handleMediaChange = (e: MediaQueryListEvent | MediaQueryList) => {
            setIsActive(!e.matches);
        };

        handleMediaChange(mediaQuery); // Set state pertama kali
        mediaQuery.addEventListener('change', handleMediaChange);

        return () => {
            mediaQuery.removeEventListener('change', handleMediaChange);
        };
    }, []);

    useEffect(() => {
        if (!isActive) return;

        const cursor = document.querySelector('.cursor') as HTMLElement;
        const follower = document.querySelector('.cursor-follower') as HTMLElement;

        let mouseX = 0, mouseY = 0;
        let followerX = 0, followerY = 0;

        const animate = () => {
            followerX += (mouseX - followerX) * 0.1;
            followerY += (mouseY - followerY) * 0.1;

            if (cursor) {
                cursor.style.left = mouseX + 'px';
                cursor.style.top = mouseY + 'px';
            }
            if (follower) {
                follower.style.left = followerX + 'px';
                follower.style.top = followerY + 'px';
            }

            requestAnimationFrame(animate);
        };

        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        });

        animate();

        const hoverElements = document.querySelectorAll('a, button, .portfolio-card, .filter-btn, .portfolio-link');
        const handleEnter = () => {
            if (cursor && follower) {
                cursor.style.transform = 'translate(-50%, -50%) scale(1.5)';
                follower.style.transform = 'translate(-50%, -50%) scale(0.5)';
                follower.style.backgroundColor = 'rgba(255, 77, 77, 0.5)';
            }
        };
        const handleLeave = () => {
            if (cursor && follower) {
                cursor.style.transform = 'translate(-50%, -50%) scale(1)';
                follower.style.transform = 'translate(-50%, -50%) scale(1)';
                follower.style.backgroundColor = 'transparent';
            }
        };

        hoverElements.forEach(el => {
            el.addEventListener('mouseenter', handleEnter);
            el.addEventListener('mouseleave', handleLeave);
        });

        return () => {
            document.removeEventListener('mousemove', () => { });
            hoverElements.forEach(el => {
                el.removeEventListener('mouseenter', handleEnter);
                el.removeEventListener('mouseleave', handleLeave);
            });
        };
    }, [isActive]);

    if (!isActive) return null;

    return (
        <>
            <div className="cursor"></div>
            <div className="cursor-follower"></div>
        </>
    );
}

export default CostumCursor;