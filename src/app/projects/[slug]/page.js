import { projects } from '@/data/projects'

export default function ProjectPage({ params }) {
  const project = projects.find(p => p.slug === params.slug)

  if (!project) return <div>Not Found</div>

  return (
    <div className="p-20">
      <h1 className="text-4xl mb-4">{project.title}</h1>
      <p>{project.description}</p>

      <h3 className="mt-6">Tech Stack:</h3>
      <ul>
        {project.tech.map((t, i) => (
          <li key={i}>{t}</li>
        ))}
      </ul>
    </div>
  )
}