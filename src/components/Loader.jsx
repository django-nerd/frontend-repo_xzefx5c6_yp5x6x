import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'

function Loader() {
  const [done, setDone] = useState(false)
  const leftRef = useRef(null)
  const rightRef = useRef(null)
  const wrapRef = useRef(null)

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (mq.matches) {
      setTimeout(() => setDone(true), 300)
      return
    }

    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
    tl.set([leftRef.current, rightRef.current], { opacity: 0, y: 0 })
      .fromTo(leftRef.current, { y: -30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6 })
      .fromTo(rightRef.current, { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6 }, '-=0.28')
      .to(wrapRef.current, { opacity: 0, duration: 0.6, delay: 0.5, onComplete: () => setDone(true) })
  }, [])

  if (done) return null

  return (
    <div ref={wrapRef} className="fixed inset-0 z-[60] flex items-center justify-center bg-black text-white" aria-live="polite" data-skip-animation>
      <div className="flex items-center gap-6 text-2xl sm:text-3xl">
        <div ref={leftRef} className="font-medium">Activate</div>
        <div className="w-px h-6 bg-white/30" />
        <div ref={rightRef} className="font-semibold">Vistaar Verse</div>
      </div>
    </div>
  )
}

export default Loader
