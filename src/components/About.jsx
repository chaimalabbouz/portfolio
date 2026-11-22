import { about } from '../data/profile'
import './About.css'

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="about__intro">
        <h2>{about.title}</h2>
        {about.paragraphs.map((text) => (
          <p key={text}>{text}</p>
        ))}
        <p className="about__looking">
          <span className="about__pulse" />
          {about.lookingFor}
        </p>
      </div>

      <ul className="about__domains">
        {about.domains.map((d) => (
          <li key={d.name} className="domain" style={{ '--c': d.color }}>
            <h3>{d.name}</h3>
            <p>{d.text}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}
