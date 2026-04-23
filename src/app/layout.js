import './globals.css'
import Navbar from '@/components/common/Navbar'
import Footer from '@/components/common/Footer'

export const metadata = {
  title: "Vaibhav Portfolio",
  description: "Frontend Developer Portfolio",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-black text-white py-10">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}