import { useEffect, useRef } from 'react'
import Spline from '@splinetool/react-spline'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SplitType from 'split-type'

gsap.registerPlugin(ScrollTrigger)

function Hero() {
  const headlineRef = useRef(null)
  const subRef = useRef(null)
  const ctaRef = useRef(null)
  const gridRef = useRef(null)

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')

    if (!mq.matches) {
      const split = new SplitType(headlineRef.current, { types: 'words' })
      gsap.fromTo(split.words, { clipPath: 'inset(0 100% 0 0)', opacity: 0 }, {
        clipPath: 'inset(0 0% 0 0)', opacity: 1, duration: 1.2, ease: 'power3.out', stagger: 0.06
      })

      gsap.fromTo(subRef.current, { y: 24, opacity: 0 }, { y: 0, opacity: 1, delay: 0.85, duration: 0.8, ease: 'power3.out' })
      gsap.fromTo(ctaRef.current, { scale: 0.98 }, { scale: 1, delay: 1.1, duration: 0.22, ease: 'power2.out' })

      ScrollTrigger.create({
        trigger: gridRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: true,
        onUpdate: (self) => {
          const y = -10 * self.progress
          gridRef.current.style.transform = `translateY(${y}px)`
        }
      })
    } else {
      // Reduced motion: simple fades
      gsap.set([headlineRef.current, subRef.current, ctaRef.current], { opacity: 1 })
    }

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill())
    }
  }, [])

  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center items-center text-center overflow-hidden">
      <div ref={gridRef} aria-hidden className="pointer-events-none absolute inset-0 opacity-40">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.15),transparent_60%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      <div className="absolute inset-0" aria-hidden>
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 px-6 max-w-4xl mx-auto">
        <p className="text-xs tracking-[0.25em] text-slate-200/70 mb-6">Brand-tech studio, AI-enhanced visuals, scroll-first journey, built for digital scale</p>
        <h1 ref={headlineRef} className="font-serif text-white text-5xl sm:text-6xl lg:text-7xl leading-tight">(Launch the Vistaar Era)</h1>
        <p ref={subRef} className="mt-5 text-slate-300 text-lg sm:text-xl">Crafted for the brands rewriting what’s next. Powered by creativity, content, and conversion.</p>

        <div ref={ctaRef} className="mt-8 flex items-center justify-center gap-4">
          <a href="#contact" className="group relative inline-flex items-center rounded-full px-6 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-400">
            <span className="absolute inset-0 rounded-full bg-white/10 backdrop-blur-md group-hover:bg-white/20 transition-colors" />
            <span className="relative">Book Vistaar Pass</span>
          </a>
          <a href="#portfolio" className="text-slate-200 hover:text-white transition-colors">See Portfolio</a>
        </div>

        <div className="sr-only" aria-live="polite">Scroll to explore the Vistaar Verse experience</div>

        <div className="absolute bottom-6 right-6 hidden sm:block" aria-hidden>
          <div className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center text-white text-xs animate-pulse">↓</div>
        </div>
      </div>
    </section>
  )
}

export default Hero
