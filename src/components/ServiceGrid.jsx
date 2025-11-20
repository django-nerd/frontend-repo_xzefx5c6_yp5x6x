import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const tiles = [
  { title: 'Product Photography', desc: 'Sell with visuals that convert', img: 'assets/product-photo.webp' },
  { title: 'Real Estate Shoot', desc: 'Visuals that close deals faster', img: 'assets/realestate.webp' },
  { title: 'UGC Creation', desc: 'Raw, authentic, and viral', img: 'assets/ugc.webp' },
  { title: 'Video Production', desc: 'Shortform & cinematic brand films', img: 'assets/video.webp' },
  { title: 'Ecommerce Solutions', desc: 'From catalog to checkout', img: 'assets/ecom.webp' },
  { title: 'Workshops & Events', desc: 'Branded moments that move', img: 'assets/events.webp' }
]

function ServiceGrid() {
  const gridRef = useRef(null)

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (mq.matches) return

    const items = gridRef.current.querySelectorAll('[data-tile]')
    items.forEach((el) => {
      gsap.fromTo(el, { opacity: 0, scale: 0.92 }, { opacity: 1, scale: 1, duration: 0.8, ease: 'power3.out', scrollTrigger: { trigger: el, start: 'top 80%' } })
    })
  }, [])

  return (
    <section id="services" className="relative py-16 sm:py-24" aria-label="Services">
      <div className="mx-auto max-w-6xl px-6">
        <div ref={gridRef} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {tiles.map((t) => (
            <article key={t.title} data-tile className="group relative overflow-hidden rounded-2xl bg-white/5 border border-white/10">
              <img src={t.img} alt="" loading="lazy" className="w-full h-56 object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent" />
              <div className="absolute inset-0 p-5 flex flex-col justify-end">
                <h3 className="text-white text-lg font-semibold">{t.title}</h3>
                <p className="text-slate-300 text-sm">{t.desc}</p>
                <div className="mt-4 translate-y-4 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  <a href="#contact" className="inline-flex text-sm text-white/90 hover:text-white underline">Learn more</a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServiceGrid
