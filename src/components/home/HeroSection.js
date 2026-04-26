import { Bebas_Neue, Poppins, Inter } from 'next/font/google'
import './hero.css'

const bebas = Bebas_Neue({
  subsets: ['latin'],
  weight: '400',
})

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600'],
})

const inter = Inter({
  subsets: ['latin'],
})

export default function HeroSection() {
  return (
    <section className="hero" id="home">
      <div className="hero-wrapper">

        <h1 className="hero-title">HI! I'M</h1>

        <div className="hero-avatar">
          <img src="/images/vaibhav.webp" alt="Vaibhav Soni" />
        </div>

        <h2 className="hero-name">VAIBHAV</h2>

        <p className="hero-tagline">
          A Software Engineer crafting innovative solutions and immersive digital experiences
        </p>

      </div>
    </section>
  )
}