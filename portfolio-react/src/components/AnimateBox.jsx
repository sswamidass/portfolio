import { useAnimateOnScroll } from '../hooks/useAnimateOnScroll'

export default function AnimateBox({ effect = 'fadeInUp', className = '', style, children, tag: Tag = 'div' }) {
  const ref = useAnimateOnScroll(effect)
  return (
    <Tag ref={ref} className={`animate-box ${className}`} data-animate-effect={effect} style={style}>
      {children}
    </Tag>
  )
}
