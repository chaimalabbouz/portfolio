import { useState } from 'react'
import { ArrowUpRight, Mail } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './Icons'
import { profile } from '../data/profile'
import './Hero.css'

function Avatar() {
  const [failed, setFailed] = useState(false)
  const initials = profile.firstName[0] + profile.lastName[0]
  return (
    <div className="avatar">
      {failed ? (
        <span className="avatar__initials">{initials}</span>
      ) : (
        <img src={profile.photo} alt={`${profile.firstName} ${profile.lastName}`} onError={() => setFailed(true)} />
      )}
      <span className="avatar__status" />
    </div>
  )
}

export default function Hero() {
  const goTo = (id) => (e) => {
    e.preventDefault()
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="hero">
      <div className="hero__grid" aria-hidden="true" />

      <div className="hero__text">
        <h1 className="hero__name">
          {profile.firstName}
          <br />
          {profile.lastName}
          <span className="hero__dot">.</span>
        </h1>

        <p className="hero__tagline">
          <span className="hero__prompt">&gt;</span>{' '}
          {profile.tagline.map((part, i) =>
            typeof part === 'string' ? part : <em key={i}>{part.em}</em>
          )}
        </p>

        <div className="hero__cta">
          <a className="btn btn--primary btn--lg" href="#projects" onClick={goTo('projects')}>
            View selected work <ArrowUpRight size={18} />
          </a>
          <a className="btn btn--ghost btn--lg" href="#contact" onClick={goTo('contact')}>
            Get in touch
          </a>
        </div>

        <ul className="hero__stack">
          {profile.stack.map((tech) => (
            <li key={tech} className="chip">
              <span className="chip__dot" />
              {tech}
            </li>
          ))}
        </ul>
      </div>

      <aside className="hero__card card" aria-label="Profile summary">
        <Avatar />

        <dl className="card__facts">
          <div><dt>Role</dt><dd>{profile.role}</dd></div>
          <div><dt>School</dt><dd>{profile.school}</dd></div>
          <div><dt>Location</dt><dd>{profile.location}</dd></div>
          <div><dt>Focus</dt><dd>{profile.focus}</dd></div>
        </dl>

        <ul className="card__links">
          <li><a href={`mailto:${profile.email}`}><Mail size={20} /> Email</a></li>
          <li><a href={profile.linkedin} target="_blank" rel="noreferrer"><LinkedinIcon /> LinkedIn</a></li>
          <li><a href={profile.github} target="_blank" rel="noreferrer"><GithubIcon /> GitHub</a></li>
        </ul>

        <div className="card__status">
          <span>status</span>
          <span><i className="card__pulse" /> {profile.status}</span>
        </div>

        
      </aside>
    </section>
  )
}
