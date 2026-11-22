import { useState } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { GithubIcon } from './Icons'
import { domains, projects } from '../data/projects'
import './Projects.css'

const domainOf = (id) => domains.find((d) => d.id === id)

function Card({ project }) {
  const d = domainOf(project.domain)
  const hasLinks = project.github || project.demo

  return (
    <article className="proj" style={{ '--c': d.color }}>
      <div className="proj__top">
        <span className="proj__domain">{d.label}</span>
        <span className="proj__context">{project.context}</span>
      </div>

      <h3>{project.title}</h3>
      <p className="proj__desc">{project.description}</p>

      <ul className="proj__points">
        {project.highlights.map((h) => (
          <li key={h}>{h}</li>
        ))}
      </ul>

      {project.results.length > 0 && (
        <div className="proj__results">
          <ul>
            {project.results.map((r) => (
              <li key={r.label || r.value}>
                <strong>{r.value}</strong>
                {r.label && <span>{r.label}</span>}
              </li>
            ))}
          </ul>
          {project.resultNote && <p>{project.resultNote}</p>}
        </div>
      )}

      <ul className="proj__stack">
        {project.stack.map((t) => (
          <li key={t} className="chip"><span className="chip__dot" />{t}</li>
        ))}
      </ul>

      {hasLinks && (
        <div className="proj__foot">
          {project.github && (
            <a className="btn btn--ghost" href={project.github} target="_blank" rel="noreferrer">
              <GithubIcon size={17} /> GitHub
            </a>
          )}
          {project.demo && (
            <a className="btn btn--ghost" href={project.demo} target="_blank" rel="noreferrer">
              Live demo <ArrowUpRight size={16} />
            </a>
          )}
        </div>
      )}
    </article>
  )
}

export default function Projects() {
  const [filter, setFilter] = useState('all')

  const visible = filter === 'all' ? projects : projects.filter((p) => p.domain === filter)
  const count = (id) => (id === 'all' ? projects.length : projects.filter((p) => p.domain === id).length)

  return (
    <section id="projects" className="section projects">
      <h2>Projects</h2>

      <div className="filters" role="tablist" aria-label="Filter projects by domain">
        {[{ id: 'all', label: 'All', color: 'var(--text)' }, ...domains].map((f) => (
          <button
            key={f.id}
            role="tab"
            aria-selected={filter === f.id}
            className={`filter ${filter === f.id ? 'is-active' : ''}`}
            style={{ '--c': f.color }}
            onClick={() => setFilter(f.id)}
          >
            <span className="filter__dot" />
            {f.label}
            <span className="filter__count">{count(f.id)}</span>
          </button>
        ))}
      </div>

      <div className="proj__grid" key={filter}>
        {visible.map((p) => (
          <Card key={p.id} project={p} />
        ))}
      </div>
    </section>
  )
}
