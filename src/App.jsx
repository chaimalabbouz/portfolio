import ScrollProgress from './components/ScrollProgress'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Education from './components/Education'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Certifications from './components/Certifications'
import Volunteering from './components/Volunteering'
import Contact from './components/Contact'
import Section from './components/Section'
import { sections } from './data/profile'

// Sections déjà construites. Les autres affichent un placeholder.
const pages = { about: About, experience: Experience, education: Education, projects: Projects, skills: Skills, certifications: Certifications, volunteering: Volunteering, contact: Contact }

export default function App() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        {sections.map(({ id, label }) => {
          const Page = pages[id]
          return Page ? <Page key={id} /> : <Section key={id} id={id} title={label} />
        })}
      </main>
    </>
  )
}