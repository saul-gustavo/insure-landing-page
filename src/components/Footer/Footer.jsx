import '@/components/Footer/Footer.css'
import logoFooter from '@/assets/logo.svg'
import Facebook from '@/components/Icons/Facebook'
import Twitter from '@/components/Icons/Twitter'
import Pinterest from '@/components/Icons/Pinterest'
import Instagram from '@/components/Icons/Instagram'

export default function Footer() {
    return (
        <footer className="footer">
            <div className="wave-footer"></div>

            <div className="footer-top">
                <img src={logoFooter} alt="logo insure footer" className='logo-footer' />

                <div className="social-footer">
                    <Facebook />
                    <Twitter />
                    <Pinterest />
                    <Instagram />
                </div>
            </div>

            <div className="footer-links">

                <nav class="footer-list">
                    <h4 class="list-title">OUR COMPANY</h4>
                    <ul class="foo-list-menu">
                        <li class="foo-list-item"><a href="#" class="foo-list-link">HOW WE WORK</a></li>
                        <li class="foo-list-item"><a href="#" class="foo-list-link">WHY INSURE?</a></li>
                        <li class="foo-list-item"><a href="#" class="foo-list-link">VIEW PLANS</a></li>
                        <li class="foo-list-item"><a href="#" class="foo-list-link">REVIEWS</a></li>
                    </ul>
                </nav>

                <nav class="footer-list">
                    <h4 class="list-title">HELP ME</h4>
                    <ul class="foo-list-menu">
                        <li class="foo-list-item"><a href="#" class="foo-list-link">FAQ</a></li>
                        <li class="foo-list-item"><a href="#" class="foo-list-link">TERMS OF USE</a></li>
                        <li class="foo-list-item"><a href="#" class="foo-list-link">PRIVACY POLICY</a></li>
                        <li class="foo-list-item"><a href="#" class="foo-list-link">COOKIES</a></li>
                    </ul>
                </nav>

                <nav class="footer-list">
                    <h4 class="list-title">CONTACT</h4>
                    <ul class="foo-list-menu">
                        <li class="foo-list-item"><a href="#" class="foo-list-link">SALES</a></li>
                        <li class="foo-list-item"><a href="#" class="foo-list-link">SUPPORT</a></li>
                        <li class="foo-list-item"><a href="#" class="foo-list-link">LIVE CHAT</a></li>
                    </ul>
                </nav>

                <nav class="footer-list">
                    <h4 class="list-title">OTHERS</h4>
                    <ul class="foo-list-menu">
                        <li class="foo-list-item"><a href="#" class="foo-list-link">CAREERS</a></li>
                        <li class="foo-list-item"><a href="#" class="foo-list-link">PRESS</a></li>
                        <li class="foo-list-item"><a href="#" class="foo-list-link">LICENSES</a></li>
                    </ul>
                </nav>
            </div>

            <div className="line-footer"></div>
        </footer>
    )
}