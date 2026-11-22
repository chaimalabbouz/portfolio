import { useState } from 'react'
import { Award, ArrowUpRight } from 'lucide-react'
import { certifications } from '../data/profile'
import './Certifications.css'

function Preview({ src, title }) {
  const [failed, setFailed] = useState(false)
  return (
    <div className="cert__media">
      {failed ? (
        <span className="cert__placeholder" aria-hidden="true"><Award size={34} /></span>
      ) : (
        <img src={src} alt={`${title} certificate`} loading="lazy" onError={() => setFailed(true)} />
      )}
    </div>
  )
}

export default function Certifications() {
  return (
    <section id="certifications" className="section certs">
      <h2>Certificates</h2>
      <p className="certs__intro">Online courses and tracks, each with a verifiable statement of accomplishment.</p>

      <ul className="certs__grid">
        {certifications.map((c) => (
          <li key={c.href}>
            <a className="cert" href={c.href} target="_blank" rel="noreferrer" style={{ '--c': c.color }}>
              <Preview src={c.image} title={c.title} />
              <span className="cert__body">
                <span className="cert__issuer">{c.issuer}</span>
                <span className="cert__title">{c.title}</span>
                <span className="cert__link">View certificate <ArrowUpRight size={15} /></span>
              </span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}