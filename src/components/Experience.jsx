import { useState } from 'react'
import { experiences } from '../data/profile'
import './Experience.css'

function CompanyLogo({ src, name }) {
  const [failed, setFailed] = useState(false)
  return (
    <div className="xp__logo">
      {failed ? (
        <span>{name.slice(0, 2)}</span>
      ) : (
        <img src={src} alt={`${name} logo`} onError={() => setFailed(true)} />
      )}
    </div>
  )
}

export default function Experience() {
  return (
    <section id="experience" className="section experience">
      <h2>Experience</h2>

      <ol className="timeline">
        {experiences.map((xp) => (
          <li key={xp.company} className="xp">
            <div className="xp__when">
              <span className="xp__period">{xp.period}</span>
              <span className="xp__where">{xp.company}, {xp.location}</span>
            </div>

            <div className="xp__rail" aria-hidden="true" />

            <article className="xp__card">
              <header className="xp__head">
                <CompanyLogo src={xp.logo} name={xp.company} />
                <div>
                  <h3>{xp.project}</h3>
                  <p className="xp__role">{xp.role}</p>
                </div>
              </header>

              <p className="xp__summary">{xp.summary}</p>

              <ul className="xp__bullets">
                {xp.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>

              {xp.metrics?.length > 0 && (
                <ul className="xp__metrics">
                  {xp.metrics.map((m) => (
                    <li key={m.label}>
                      <strong>{m.value}</strong>
                      <span>{m.label}</span>
                    </li>
                  ))}
                </ul>
              )}

              {xp.stack?.length > 0 && (
                <ul className="xp__stack">
                  {xp.stack.map((t) => (
                    <li key={t} className="chip"><span className="chip__dot" />{t}</li>
                  ))}
                </ul>
              )}
            </article>
          </li>
        ))}
      </ol>
    </section>
  )
}