import '@/components/WeSec/WeSec.css'
import snappy from '@/assets/icon-snappy-process.svg'
import affortable from '@/assets/icon-affordable-prices.svg'
import people from '@/assets/icon-people-first.svg'

export default function WeSec() {
    return (
        <div className="were-section container">
            <div className="were-wave-top"></div>
            <div className="line-were"></div>
            <h1 class="were-title">We’re different</h1>

            <div class="main-cards">
                <article class="card">
                    <img src={snappy} alt="snappy process icon" class="card-img" />
                    <div class="card-content">
                        <h2 class="title-card">Snappy Process</h2>
                        <p class="card-sub"> Our application process can be completed in minutes, not hours. Don’t get
                            stuck filling in tedious forms.</p>
                    </div>
                </article>

                <article class="card">
                    <img src={affortable} alt="Affordable prices icon" class="card-img" />
                    <div class="card-content">
                        <h2 class="title-card">Affordable Prices</h2>
                        <p class="card-sub">We don’t want you worrying about high monthly costs. Our prices may be low,
                            but we still offer the best coverage possible.</p>
                    </div>
                </article>

                <article class="card">
                    <img src={people} alt="people first icon" class="card-img" />
                    <div class="card-content">
                        <h2 class="title-card">People First</h2>
                        <p class="card-sub">Our plans aren’t full of conditions and clauses to prevent payouts. We make
                            sure you’re covered when you need it.</p>
                    </div>
                </article>
            </div>
        </div>
    )
}