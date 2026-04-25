'use client'

export default function BlogCard({ blog }) {
  return (
    <div className=" group block w-full rounded-[28px] overflow-hidden bg-[#000000] border border-[#fff]/10 shadow-[0_10px_40px_rgba(0,0,0,0.6)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.8)] transition-all duration-500 " >

      {/* 🔥 Image Section */}
      <div className="relative w-full h-[260px] overflow-hidden">

        <div className=" absolute inset-0 z-10 bg-gradient-to-b from-transparent via-transparent to-black/80 " />

        <img
          src={blog.image || "https://via.placeholder.com/400x260?text=No+Image"}
          alt={blog.title}
          className=" w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.08] "
        />

      </div>

      {/* 🔥 Content */}
      <div className="px-[28px] py-[26px]">

        {/* Title */}
        <h3 className=" text-[22px] md:text-[26px] font-semibold text-[#fff] mb-[10px] tracking-[-0.3px] group-hover:text-lime-400 transition ">
          {blog.title}
        </h3>

        {/* Description */}
        <p className=" text-[15px] text-[#fff]/70 leading-[1.7] mb-[20px] ">
          {blog.description}
        </p>

        {/* Footer */}
        <div className="flex items-center justify-between">

          {/* ✅ Only this is clickable */}
          <a href={blog.url} target="_blank" rel="noopener noreferrer" className=" px-[14px] py-[6px] rounded-full border border-[#fff]/20 text-[13px] text-[#fff]/80 backdrop-blur-md hover:bg-lime-400 hover:text-black transition " >
            {blog.tag || "Read Blog ↗"}
          </a>

        </div>

      </div>

    </div>
  )
}