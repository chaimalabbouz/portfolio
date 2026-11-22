import { useState } from 'react'
import { Camera } from 'lucide-react'
import { volunteering } from '../data/profile'
import './Volunteering.css'

function Photo({ item }) {
  const [failed, setFailed] = useState(false)
  return (
    <div className="vol__media" tabIndex={0}>
      {failed ? (
        <div className="vol__img vol__placeholder" aria-hidden="true">
          <Camera size={34} />
        </div>
      ) : (
        <img className="vol__img" src={item.image} alt={item.title} loading="lazy" onError={() => setFailed(true)} />
      )}
      <div className="vol__overlay">
        <p>{item.description}</p>
      </div>
    </div>
  )
}

export default function Volunteering() {
  return (
    <section id="volunteering" className="section volunteering">
      <h2>Volunteering</h2>
      <p className="vol__intro">
        Beyond code: organizing events, creating content and being part of a team that wins together.
      </p>

      <div className="vol__grid">
        {volunteering.map((item) => (
          <article key={item.title} className="vol">
            <Photo item={item} />
            <h3>{item.title}</h3>
            <p className="vol__role">{item.role}</p>
            
          </article>
        ))}
      </div>
    </section>
  )
}