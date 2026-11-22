import { useState } from 'react'
import { ArrowUpRight, Check, Copy, Mail } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './Icons'
import { profile } from '../data/profile'
import './Contact.css'

const links = [
  { label: 'LinkedIn', value: 'linkedin.com/in/chaima-labbouz', href: profile.linkedin, Icon: LinkedinIcon },
  { label: 'GitHub', value: 'github.com/chaimalabbouz', href: profile.github, Icon: GithubIcon },
]

export default function Contact() {
  const [copied, setCopied] = useState(false)

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      /* le clic sur le lien mailto reste disponible */
    }
  }

  return (
    <>
      <section id="contact" className="section contact">
        <div className="contact__intro">
          <h2>Let&apos;s build something together.</h2>
          <p>
            I&apos;m looking for my first role in GenAI, Computer Vision or ML &amp; MLOps. If you have an
            opportunity or a project in mind, I&apos;d be glad to hear about it.
          </p>
          <p className="contact__status">
            <span className="about__pulse" />
            {profile.status} · {profile.location}
          </p>
         
        </div>

        <ul className="contact__list">
          <li className="contact__row contact__row--email">
            <a href={`mailto:${profile.email}`}>
              <span className="contact__icon"><Mail size={22} /></span>
              <span className="contact__text">
                <span className="contact__label">Email</span>
                <span className="contact__value">{profile.email}</span>
              </span>
            </a>
            <button className="icon-btn" onClick={copyEmail} aria-label="Copy email address">
              {copied ? <Check size={18} /> : <Copy size={18} />}
            </button>
          </li>

          {links.map(({ label, value, href, Icon }) => (
            <li key={label} className="contact__row">
              <a href={href} target="_blank" rel="noreferrer">
                <span className="contact__icon"><Icon size={22} /></span>
                <span className="contact__text">
                  <span className="contact__label">{label}</span>
                  <span className="contact__value">{value}</span>
                </span>
                <ArrowUpRight size={20} className="contact__arrow" />
              </a>
            </li>
          ))}
        </ul>
      </section>

      <footer className="footer">
        <span>© 2026 {profile.firstName} {profile.lastName}</span>
        <span>Built with React &amp; Vite</span>
      </footer>
    </>
  )
}