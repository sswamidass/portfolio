import { useLayoutEffect, useRef } from 'react'

/**
 * Scales a fixed-size design (e.g. a 600×408 print card) to fit the width of
 * its container. Sets a `--fit` custom property on the container equal to
 * containerWidth / designWidth; the CSS applies it via transform: scale().
 */
export function useFitScale(designWidth) {
  const ref = useRef(null)

  useLayoutEffect(() => {
    const el = ref.current
    if (!el) return undefined

    const apply = () => {
      const width = el.clientWidth
      if (width > 0) el.style.setProperty('--fit', String(width / designWidth))
    }

    apply()
    if (typeof ResizeObserver === 'undefined') return undefined

    const ro = new ResizeObserver(apply)
    ro.observe(el)
    return () => ro.disconnect()
  }, [designWidth])

  return ref
}
