import { useEffect, useRef } from 'react'

export default function CursorEffect() {
  const dotRef = useRef(null)

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return undefined

    let x = 0
    let y = 0
    let raf
    const move = (event) => {
      x = event.clientX
      y = event.clientY
      if (!raf) {
        raf = requestAnimationFrame(() => {
          if (dotRef.current) dotRef.current.style.transform = `translate3d(${x - 10}px, ${y - 10}px, 0)`
          raf = null
        })
      }
    }

    window.addEventListener('mousemove', move)
    return () => {
      window.removeEventListener('mousemove', move)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [])

  return <div ref={dotRef} className="pointer-events-none fixed left-0 top-0 z-[75] hidden h-5 w-5 rounded-full bg-secondary/30 blur-[1px] md:block" aria-hidden="true" />
}
