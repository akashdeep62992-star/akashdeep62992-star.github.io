import { skills } from '../data/profile.js'
import SectionHead from './SectionHead.jsx'

export default function Skills() {
  return (
    <section id="skills">
      <div className="wrap">
        <SectionHead label="Toolbox" title="What I work with">
          Grouped by where it sits in the stack. Everything here is used in at least one project above.
        </SectionHead>
        <div className="skills">
          {skills.map((s) => (
            <div key={s.group} className="skill">
              <h3>{s.group}</h3>
              <div className="tags">
                {s.items.map((i) => <span key={i} className="tag">{i}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
