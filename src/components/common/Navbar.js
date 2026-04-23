'use client'

export default function Navbar() {
  return (
    <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50 pt-200px">
      <nav className="flex items-center gap-8 px-6 py-3 rounded-full 
        bg-[#0b1a0f]/80 backdrop-blur-md border border-[#1f3a2a]
        shadow-lg">

        {/* Logo */}
        <div className="flex items-center gap-2 font-semibold">
          <div className="w-6 h-6 bg-lime-400 rounded-full flex items-center justify-center text-black font-bold">
            V
          </div>
          <span>Vaibhav</span>
        </div>

        {/* Links */}
        <div className="flex gap-6 text-sm text-gray-300">
          <a href="#home" className="hover:text-white">Home</a>
          <a href="#projects" className="hover:text-white">Projects</a>
          <a href="#about" className="hover:text-white">About me</a>
          <a href="#contact" className="hover:text-white">Reach me</a>
        </div>

        {/* Resume Button */}
        <button className="ml-4 px-4 py-2 rounded-full border border-lime-400 text-lime-400 hover:bg-lime-400 hover:text-black transition">
          Resume ↓
        </button>

      </nav>
    </div>
  )
}