import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

function ValueBlock() {
  const titleRef = useRef(null)
  const subRef = useRef(null)

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (mq.matches) return

    const chars = titleRef.current.textContent.split('')
    titleRef.current.innerHTML = chars.map((c, i) => `<span class="inline-block will-change-transform">${c}</span>`).join('')
    gsap.fromTo(titleRef.current.querySelectorAll('span'), { y: 20, opacity: 0 }, { y: 0, opacity: 1, stagger: 0.02, ease: 'power3.out', duration: 0.6 })
    gsap.fromTo(subRef.current, { opacity: 0 }, { opacity: 1, delay: 0.6, duration: 0.8 })
  }, [])

  return (
    <section className="relative py-16 sm:py-24" aria-label="Value Statement">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <h2 ref={titleRef} className="font-serif text-6xl sm:text-7xl tracking-tight text-white">MARKETING</h2>
        <p ref={subRef} className="mt-4 italic text-lg text-slate-300">at the speed of scale</p>
      </div>
    </section>
  )
}

export default ValueBlock
