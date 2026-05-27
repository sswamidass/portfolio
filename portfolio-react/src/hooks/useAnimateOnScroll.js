import { useEffect, useRef } from 'react'

export function useAnimateOnScroll(effect = 'fadeInUp') {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !el.classList.contains('animated')) {
          const animClass = effect === 'fadeIn'
            ? 'fadeIn'
            : effect === 'fadeInLeft'
            ? 'fadeInLeft'
            : effect === 'fadeInRight'
            ? 'fadeInRight'
            : 'fadeInUp'
          el.classList.add(animClass, 'animated')
          observer.unobserve(el)
        }
      },
      { threshold: 0.15 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [effect])

  return ref
}
