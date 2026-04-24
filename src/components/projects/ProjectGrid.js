import { projects } from '@/data/projects'
import ProjectCard from './ProjectCard'

export default function ProjectGrid() {
  return (
    <section id="projects" className="p-20">
      <h2 className="text-3xl mb-10">Projects</h2>
      <div className="grid grid-cols-3 md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  )
}