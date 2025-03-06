import React from "react";
import heroImg from '@/assets/image-intro-desktop.jpg'
import '@/components/Hero/Hero.css'


export default function Hero() {
    return (
        <section className="hero container">
            <div className="hero-text">
                <div className="line-top"></div>
                <h1 class="hero-title">Humanizing your insurance.</h1>
                <p class="hero-sub"> Get your life insurance coverage easier and faster. We blend our expertise
                    and technology to help you find the plan that’s right for you. Ensure you
                    and your loved ones are protected.</p>
                <a href="#" class="hero-a-btn">VIEW PLANS</a>
                <div className="wave-top"></div>
            </div>
            <div className="hero-imagen">
                <img src={heroImg} alt="insure imagen hero" className="hero-img" />
            </div>
            <div className="wave-top-desk"></div>
        </section>
    )
}