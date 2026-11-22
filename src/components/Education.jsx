import { useState } from 'react'
import { education } from '../data/profile'
import './Education.css'

function SchoolLogo({ src, name }) {
  const [failed, setFailed] = useState(false)
  // Affiche le sigle complet entre parenthèses (ENIT, IPEIEM) si le logo est absent
  const acronym = name.match(/\(([^)]+)\)/)?.[1] ?? name.slice(0, 2)
  return (
    <div className="edu__logo">
      {failed ? (
        <span>{acronym}</span>
      ) : (
        <img src={src} alt={`${name} logo`} onError={() => setFailed(true)} />
      )}
    </div>
  )
}

export default function Education() {
  return (
    <section id="education" className="section education">
      <h2>Education</h2>

      <ul className="edu__list">
        {education.map((e) => (
          <li key={e.school} className="edu">
            <SchoolLogo src={e.logo} name={e.school} />

            <div className="edu__body">
              <p className="edu__period">{e.period}</p>
              <h3>{e.school}</h3>
              <p className="edu__degree">{e.degree}</p>
              <p className="edu__place">{e.location}</p>

              <div className="edu__badge">
                <strong>{e.badge.value}</strong>
                <span>{e.badge.label}</span>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}