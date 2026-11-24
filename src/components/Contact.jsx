import { profile } from '../data/profile.js'

export default function Contact() {
  return (
    <section id="contact">
      <div className="wrap">
        <div className="contact">
          <div>
            <span className="label">Contact</span>
            <h2 className="contact-title">Let's build something reliable.</h2>
            <p>
              I'm looking for backend developer roles and internships. The fastest way to see how I work is
              to read the code, then reach out.
            </p>
          </div>
          <div className="actions">
            {profile.email && <a className="btn primary" href={`mailto:${profile.email}`}>Email me</a>}
            <a className={`btn ${profile.email ? '' : 'primary'}`} href={profile.github} target="_blank" rel="noopener noreferrer">GitHub profile</a>
            {profile.linkedin && <a className="btn" href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>}
            {profile.resume && <a className="btn" href={profile.resume} target="_blank" rel="noopener noreferrer">Resume</a>}
            <a className="btn" href={`${profile.github}?tab=repositories`} target="_blank" rel="noopener noreferrer">All repositories</a>
          </div>
        </div>
      </div>
    </section>
  )
}
