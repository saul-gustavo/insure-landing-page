import React from "react"
import Navbar from "@/components/Navbar/Navbar"
import Hero from '@/components/Hero/Hero.jsx'
import WeSec from "@/components/WeSec/WeSec"
import Find from "@/components/FindSec/Find"
import Footer from '@/components/Footer/Footer'

function App() {
  return (
    <main>
      <Navbar />
      <Hero />
      <WeSec />
      <Find />
      <Footer />
    </main>
  )
}

export default App
