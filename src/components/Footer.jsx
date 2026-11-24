import { profile } from '../data/profile.js'

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <span>© {new Date().getFullYear()} {profile.name}</span>
        <span className="mono">status: all systems operational</span>
      </div>
    </footer>
  )
}
