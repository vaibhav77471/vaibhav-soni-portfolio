import { blogs } from '@/data/blogs'

export default function BlogSection() {
  return (
    <section id="blogs" className="p-20">
      <h2 className="text-3xl mb-5">Blogs</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {blogs.map((blog, i) => (
          <a
            key={i}
            href={blog.url}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800 p-6 rounded-lg shadow hover:bg-gray-700 transition-colors block"
          >
            <h3 className="text-xl font-bold mb-2 text-lime-400">{blog.title}</h3>
            <p className="text-gray-300 mb-2">{blog.description}</p>
            <span className="text-lime-300 font-semibold">Read →</span>
          </a>
        ))}
      </div>
    </section>
  )
}