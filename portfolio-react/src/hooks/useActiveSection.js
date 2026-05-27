import { useEffect, useState } from 'react'

export function useActiveSection(sections) {
  const [activeSection, setActiveSection] = useState(null)

  useEffect(() => {
    const observers = []

    sections.forEach((sectionId) => {
      const el = document.querySelector(`[data-section="${sectionId}"]`)
      if (!el) return

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(sectionId)
          }
        },
        { threshold: 0, rootMargin: '-150px 0px -70% 0px' }
      )

      observer.observe(el)
      observers.push(observer)
    })

    return () => observers.forEach((o) => o.disconnect())
  }, [sections])

  return activeSection
}
