import { useMemo } from 'react'
import { projects } from '../data/profile.js'

// Decorative heartbeat bars (not real uptime data).
function Beats() {
  const heights = useMemo(
    () => Array.from({ length: 32 }, () => 55 + Math.round(Math.random() * 45)),
    [],
  )
  return (
    <span className="beats" aria-hidden="true">
      {heights.map((h, i) => (
        <span key={i} style={{ height: `${h}%` }} />
      ))}
    </span>
  )
}

export default function StatusBoard() {
  const liveCount = projects.filter((p) => p.status === 'live').length
  return (
    <aside className="board" aria-label="Project status">
      <div className="board-head">
        <strong>Project status</strong>
        <span className="state live">{liveCount} live</span>
      </div>
      {projects.map((p) => (
        <a key={p.id} className="svc" href={p.demo ?? p.repo} target="_blank" rel="noopener noreferrer">
          <span className="name">{p.shortName ?? p.name}</span>
          <span className={`state ${p.status === 'live' ? 'live' : 'code'}`}>
            {p.status === 'live' ? '● live' : 'source'}
          </span>
          <span className="host">{p.host}</span>
          {p.status === 'live' && <Beats />}
        </a>
      ))}
      <div className="board-foot">
        Free-tier hosting on Render: first load can take ~30s while the server wakes up.
      </div>
    </aside>
  )
}
