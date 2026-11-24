import { useState } from 'react'
import { profile } from '../data/profile.js'
import { GitHubIcon, LinkedInIcon, MailIcon } from './Icons.jsx'

function CopyEmail({ email }) {
  const [copied, setCopied] = useState(false)
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // Clipboard blocked: the address is selectable text, so the visitor can copy it by hand.
    }
  }
  return (
    <div className="email-row">
      <span className="email-text mono">{email}</span>
      <button type="button" className="copy-btn" onClick={copy}>
        {copied ? 'Copied' : 'Copy'}
      </button>
    </div>
  )
}

export default function Contact() {
  return (
    <section id="contact">
      <div className="wrap">
        <div className="contact">
          <div>
            <span className="label">Contact</span>
            <h2 className="contact-title">Let's build something reliable.</h2>
            <p>
              I'm looking for backend developer roles and internships. Email is the best way to reach me.
            </p>
            {profile.email && <CopyEmail email={profile.email} />}
          </div>
          <div className="actions contact-actions">
            {profile.email && (
              <a className="btn primary" href={`mailto:${profile.email}`}>
                <MailIcon /> Email me
              </a>
            )}
            {profile.linkedin && (
              <a className="btn" href={profile.linkedin} target="_blank" rel="noopener noreferrer">
                <LinkedInIcon /> LinkedIn
              </a>
            )}
            <a className="btn" href={profile.github} target="_blank" rel="noopener noreferrer">
              <GitHubIcon /> GitHub
            </a>
            {profile.resume && (
              <a className="btn" href={profile.resume} target="_blank" rel="noopener noreferrer">Resume</a>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
