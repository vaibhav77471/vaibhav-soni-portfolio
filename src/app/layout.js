import './globals.css'
import Navbar from '@/components/common/Navbar'
import Footer from '@/components/common/Footer'
import { StarLayer, StarsBackground } from '@/components/animate-ui/components/backgrounds/stars'

export const metadata = {
  title: "Vaibhav Portfolio",
  description: "Frontend Developer Portfolio",
}



export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="text-[#fff] py-[0] p-[0] m-[0] bg-transparent relative overflow-x-hidden">

        {/* 🔥 Gradient Background (IMPORTANT) */}
        <div className="fixed inset-0 -z-[20] bg-gradient-to-b from-[#0f172a] via-[#020617] to-black" />

        {/* ⭐ Stars */}
        <StarsBackground
          className="fixed inset-0 w-full h-full -z-[100] pointer-events-none"
          starColor="#fff"
        />

        <Navbar />
        {children}
        <Footer />

      </body>
    </html>
  )
}