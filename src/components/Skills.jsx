import { skills } from '../data/profile'
import './Skills.css'

export default function Skills() {
  return (
    <section id="skills" className="section skills">
      <h2>Skills</h2>

      <div className="skills__grid">
        {skills.map((group) => (
          <article key={group.title} className="skill" style={{ '--c': group.color }}>
            <h3>{group.title}</h3>
            <p className="skill__text">{group.text}</p>
            <ul className="skill__items">
              {group.items.map((item) => (
                <li key={item} className="chip">
                  <span className="chip__dot" />
                  {item}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}
