import './globals.css'
import Navbar from '@/components/common/Navbar'
import Footer from '@/components/common/Footer'
import { StarLayer, StarsBackground } from '@/components/animate-ui/components/backgrounds/stars'
import { Toaster } from 'react-hot-toast'

export const metadata = {
  title: "Vaibhav Portfolio",
  description: "Frontend Developer Portfolio",
}



export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="text-[#fff] m-[0] bg-transparent relative overflow-x-hidden">

        {/* Background */}
        <div className="fixed inset-0 -z-[20] bg-gradient-to-b from-[#0f172a] via-[#020617] to-black" />

        {/* Stars */}
        <StarsBackground
          className="fixed inset-0 w-full h-full -z-[100] pointer-events-none"
          starColor="#fff"
        />

        <Navbar />

        <main className=" pt-[50px] px-[20px] md:px-[40px] max-w-[100%] mx-auto relative z-10">
          {children}
        </main>

        <Footer />
                <Toaster position="top-right" />

      </body>
    </html>
  )
}