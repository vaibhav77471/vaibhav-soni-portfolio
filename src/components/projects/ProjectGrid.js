import { projects } from '@/data/projects'
import ProjectCard from './ProjectCard'

export default function ProjectGrid() {
  return (
  <section id="projects" className="p-[20px] h-[auto] flex flex-col items-center justify-start bg-transparent backdrop-blur-md">
      <h1 className="text-[50px] font-bold text-[#fff] mb-10">Featured Projects</h1>
      <div className="grid grid-cols-3 md:grid-cols-2 p-[20px] gap-[20px] w-[100%]">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  )
}