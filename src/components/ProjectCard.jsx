export default function ProjectCard({ project: p }) {
  const live = p.status === 'live'
  return (
    <article className="project">
      <div className="p-main">
        <div className="p-kicker">
          <span className="label">{p.kicker}</span>
          <span className={`state ${live ? 'live' : 'code'}`}>{live ? '● live' : 'source'}</span>
        </div>
        <h3>{p.name}</h3>
        <p className="desc">{p.description}</p>
        <ul>
          {p.highlights.map((h) => <li key={h}>{h}</li>)}
        </ul>
        <div className="tags">
          {p.tags.map((t) => <span key={t} className="tag">{t}</span>)}
        </div>
        <div className="p-links">
          {p.demo && (
            <a className="btn primary" href={p.demo} target="_blank" rel="noopener noreferrer">Live demo ↗</a>
          )}
          <a className="btn" href={p.repo} target="_blank" rel="noopener noreferrer">Source code</a>
        </div>
      </div>
      <div className="p-side">
        <span className="label">{p.sideLabel}</span>
        <pre className="arch">{p.diagram}</pre>
        <div className="stats">
          {p.stats.map(([value, caption]) => (
            <div key={caption} className="stat"><b>{value}</b><span>{caption}</span></div>
          ))}
        </div>
      </div>
    </article>
  )
}
