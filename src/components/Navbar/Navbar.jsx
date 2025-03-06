import { useState } from "react";
import logo from '@/assets/logo.svg';
import waveNav from '@/assets/bg-pattern-mobile-nav.svg'
import '@/components/Navbar/Navbar.css';
import iconHam from '@/assets/icon-hamburger.svg';
import iconClose from '@/assets/icon-close.svg';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className="container">
            <nav className="nav">
                <img src={logo} alt="logo insure nav" />

                <ul className={`nav-menu ${isOpen ? "open" : ""}`}>
                    <li className="nav-li"><a href="#" className="nav-a">HOW WE WORK</a></li>
                    <li className="nav-li"><a href="#" className="nav-a">BLOG</a></li>
                    <li className="nav-li"><a href="#" className="nav-a">ACCOUNT</a></li>
                    <a href="#" className="btn-nav">VIEW PLANS</a>
                    <img src={waveNav} alt="wave nav imagen" className="wave-img" />
                </ul>

                <button className="btn-toggle" onClick={toggleMenu}>
                    <img src={isOpen ? iconClose : iconHam} alt="menu toggle icon" className="icon-img" />
                </button>
            </nav>
        </header>
    )
}