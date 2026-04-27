'use client'

import { useState, useEffect } from 'react'
import { blogs } from '@/data/blogs'
import BlogCard from './BlogCard'

export default function BlogSection() {
  const [visibleCount, setVisibleCount] = useState(4)
  const [cols, setCols] = useState(1)

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 4)
  }

  useEffect(() => {
    const updateCols = () => {
      const width = window.innerWidth

      if (width >= 1024) {
        setCols(2)
      } else {
        setCols(1)
      }
    }

    updateCols()
    window.addEventListener('resize', updateCols)

    return () => window.removeEventListener('resize', updateCols)
  }, [])

  return (
    <section
      id="blogs"
      className="min-h-screen bg-transparent backdrop-blur-[12px] px-0 sm:px-4 md:px-6 lg:px-8 scroll-mt-[80px] md:scroll-mt-[100px]"
    >
      {/* Heading */}
      <h2 className="text-[42px] font-bold text-[#fff] mb-[40px] text-center">
        Blogs
      </h2>

      {/* Grid */}
      <div
        className="grid gap-[30px] max-w-[1100px] mx-auto"
        style={{
          gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))`,
        }}
      >
        {blogs.slice(0, visibleCount).map((blog, i) => (
          <BlogCard key={i} blog={blog} />
        ))}
      </div>

      {/* Load More Button */}
      {visibleCount < blogs.length && (
        <div className="flex justify-center mt-[50px]">
          <button
            onClick={handleLoadMore}
            className="px-[32px] py-[12px] relative overflow-hidden rounded-[16px] text-white font-[600] bg-[rgba(255,255,255,0.08)] backdrop-blur-[16px] border border-[rgba(255,255,255,0.2)] shadow-[0_0_20px_rgba(168,85,247,0.3)] transition-all duration-[300ms] hover:scale-[1.05] hover:bg-[rgba(255,255,255,0.15)] hover:shadow-[0_0_30px_rgba(168,85,247,0.6)]"
          >
            <span className="relative text-[grey] z-[10]">
              See More Blogs
            </span>

            <span className="absolute inset-[0] bg-[linear-gradient(90deg,rgba(168,85,247,0.2),rgba(236,72,153,0.2),rgba(168,85,247,0.2))] opacity-[0] hover:opacity-[1] transition duration-[300ms]" />

            <span className="absolute top-[0] left-[-100%] w-[100%] h-[100%] bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.3),transparent)] skew-x-[12deg] transition-all duration-[700ms] hover:left-[100%]" />
          </button>
        </div>
      )}
    </section>
  )
}