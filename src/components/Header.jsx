const links = [
  { href: '#work', label: 'Work' },
  { href: '#skills', label: 'Skills' },
  { href: '#now', label: 'Now' },
]

export default function Header() {
  return (
    <header className="top">
      <div className="wrap">
        <a className="brand" href="#top">
          <span className="dot" aria-hidden="true" />
          akash.dev
        </a>
        <nav className="links" aria-label="Sections">
          {links.map((l) => (
            <a key={l.href} href={l.href}>{l.label}</a>
          ))}
          <a className="cta" href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  )
}
