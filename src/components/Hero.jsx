import { profile, projects } from '../data/profile.js'
import { GitHubIcon } from './Icons.jsx'
import StatusBoard from './StatusBoard.jsx'

export default function Hero() {
  const live = projects.filter((p) => p.status === 'live').length
  return (
    <div className="wrap">
      <div className="hero">
        <div>
          <div className="intro">
            <picture className="avatar">
              <source srcSet={`${import.meta.env.BASE_URL}akash.webp`} type="image/webp" />
              <img
                src={`${import.meta.env.BASE_URL}akash.jpg`}
                alt={`Portrait of ${profile.name}`}
                width="480"
                height="581"
              />
            </picture>
            <div className="intro-text">
              <strong>{profile.name}</strong>
              <span>{profile.role}</span>
              <span className="pill"><i aria-hidden="true" />Open to backend roles &amp; internships</span>
            </div>
          </div>
          <h1>I build backends that <em>stay up</em>.</h1>
          <p className="lede">
            I'm {profile.name}, a backend developer. I design APIs, background jobs and data pipelines in
            Node.js and Python, test them, and ship them to production. Right now I'm contributing to open
            source on the way to Google Summer of Code and LFX Mentorship.
          </p>
          <div className="actions">
            <a className="btn primary" href="#work">See my projects</a>
            <a className="btn" href={profile.github} target="_blank" rel="noopener noreferrer">
              <GitHubIcon /> GitHub
            </a>
          </div>
          <div className="facts">
            <span><b>{projects.length}</b> shipped projects</span>
            <span><b>{live}</b> live deployments</span>
            <span><b>JS · Python</b> primary languages</span>
          </div>
        </div>
        <StatusBoard />
      </div>
    </div>
  )
}
