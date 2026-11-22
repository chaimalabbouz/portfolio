import { GithubIcon } from './Icons'
import { useScrollSpy } from '../hooks/useScrollSpy'
import { profile, sections } from '../data/profile'
import './Navbar.css'

const ids = sections.map((s) => s.id)

export default function Navbar() {
  const active = useScrollSpy(ids)

  const goTo = (id) => (e) => {
    e.preventDefault()
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <header className="nav">
      <div className="nav__inner">
        <a href="#home" className="nav__logo" onClick={goTo('home')}>
          <span className="nav__dot" />
          {profile.handle}
          <span className="nav__tld">.ai</span>
        </a>

        <nav className="nav__links" aria-label="Main">
          {sections.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={goTo(id)}
              className={active === id ? 'is-active' : ''}
              aria-current={active === id ? 'true' : undefined}
            >
              {label}
            </a>
          ))}
        </nav>

        <a className="icon-btn" href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub">
          <GithubIcon />
        </a>
      </div>
    </header>
  )
}