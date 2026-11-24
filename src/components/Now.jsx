import { timeline } from '../data/profile.js'
import SectionHead from './SectionHead.jsx'

export default function Now() {
  return (
    <section id="now">
      <div className="wrap">
        <SectionHead label="Currently" title="What I'm working on" />
        <div className="now">
          <pre className="yaml">
            <span className="c"># now.yaml</span>{'\n'}
            <span className="k">learning:</span>{'     [system design, BullMQ + Redis,\n                CI/CD with GitHub Actions]\n'}
            <span className="k">building:</span>{'     '}<span className="s">DevPulse v2</span>{'\n'}
            <span className="c">{'  - background workers on a queue\n  - webhook alerts\n  - SSL certificate expiry checks\n  - OpenAPI docs'}</span>{'\n'}
            <span className="k">contributing:</span>{' '}<span className="s">SymPy and Python open source</span>{'\n'}
            <span className="k">goal:</span>{'         '}<span className="s">GSoC / LFX Mentorship 2027</span>
          </pre>
          <ol className="timeline">
            {timeline.map((t) => (
              <li key={t.title}>
                <time>{t.when}</time>
                <div><b>{t.title}</b><span>{t.text}</span></div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
