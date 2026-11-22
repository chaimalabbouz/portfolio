import { useEffect, useState } from 'react'

/** Retourne l'id de la section actuellement visible au centre de l'écran. */
export function useScrollSpy(ids) {
  const [active, setActive] = useState('')
  const key = ids.join('|')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: '-40% 0px -55% 0px' }
    )
    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key])

  return active
}
