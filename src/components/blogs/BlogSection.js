'use client'

import { blogs } from '@/data/blogs'
import BlogCard from './BlogCard' // adjust path if needed

export default function BlogSection() {
  return (
    <section id="blogs" className="min-h-screen px-[80px] py-[100px] bg-transparent backdrop-blur-md" >
      {/* Heading */}
      <h2 className="text-[42px] font-bold text-[#fff] mb-[40px] text-center">
        Blogs
      </h2>

      {/* Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-[30px] max-w-5xl mx-auto">
        {blogs.map((blog, i) => (
          <BlogCard key={i} blog={blog} />
        ))}
      </div>
    </section>
  )
}