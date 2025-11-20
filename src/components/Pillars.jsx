import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const pillars = [
  { title: 'Branding', micro: 'Identity systems that amplify recognition and trust.' },
  { title: 'Creative Media', micro: 'Photography, video, podcast & immersive content.' },
  { title: 'Marketing', micro: 'Precision targeting and data-driven growth.' },
  { title: 'Technology', micro: 'Web, automation, analytics — engineered for scale.' }
]

function Pillars() {
  const wrapRef = useRef(null)
  const leftRef = useRef(null)
  const rightRef = useRef(null)

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (mq.matches) return

    const pin = ScrollTrigger.create({
      trigger: wrapRef.current,
      start: 'top top',
      end: '+=2500',
      scrub: true,
      pin: leftRef.current,
      anticipatePin: 1
    })

    const panels = rightRef.current.querySelectorAll('[data-panel]')
    panels.forEach((panel, i) => {
      gsap.fromTo(panel, { opacity: 0.3, xPercent: 10, scale: 0.98 }, { opacity: 1, xPercent: 0, scale: 1, ease: 'power3.out', scrollTrigger: { trigger: panel, start: 'top 70%', end: 'bottom 60%', scrub: true } })
    })

    return () => {
      pin.kill()
      ScrollTrigger.getAll().forEach(s => s.kill())
    }
  }, [])

  return (
    <section className="relative py-24" aria-label="Four Pillars">
      <div ref={wrapRef} className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-10 items-start">
        <div ref={leftRef} className="sticky top-28 self-start">
          <h3 className="text-3xl sm:text-4xl font-serif text-white mb-6">The pillars of scale</h3>
          <p className="text-slate-300">Our framework blends brand, media, marketing and technology into a single growth system.</p>
          <ul className="mt-8 space-y-6">
            {pillars.map(p => (
              <li key={p.title} className="text-white/90">
                <div className="text-xl font-semibold">{p.title}</div>
                <div className="text-slate-400 text-sm">{p.micro}</div>
              </li>
            ))}
          </ul>
        </div>
        <div ref={rightRef} className="space-y-10">
          {pillars.map((p, i) => (
            <div key={p.title} data-panel className="h-[60vh] rounded-2xl overflow-hidden relative bg-white/5 border border-white/10">
              <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(99,102,241,0.25),rgba(56,189,248,0.25))] opacity-10" />
              <div className="absolute inset-0 flex items-end p-6">
                <div>
                  <div className="text-white text-2xl font-semibold">{p.title}</div>
                  <div className="text-slate-300 max-w-md">{p.micro}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Pillars
