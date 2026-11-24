import { projects } from '../data/profile.js'
import SectionHead from './SectionHead.jsx'
import ProjectCard from './ProjectCard.jsx'

export default function Projects() {
  return (
    <section id="work">
      <div className="wrap">
        <SectionHead label="Selected work" title="Projects">
          Each one is deployed or runnable, with tests and a README that explains the design decisions.
        </SectionHead>
        {projects.map((p) => <ProjectCard key={p.id} project={p} />)}
      </div>
    </section>
  )
}
