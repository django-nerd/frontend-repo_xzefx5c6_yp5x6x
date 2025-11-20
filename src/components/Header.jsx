import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'

function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (open) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = ''
  }, [open])

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-200 ${scrolled ? 'bg-slate-900/80 backdrop-blur-md border-b border-white/10 py-2' : 'bg-transparent py-4'}`} aria-label="Site Header">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="text-[10px] tracking-[0.3em] text-blue-300/70">VISTAAR LABS</span>
          <a href="#home" className="text-white text-lg font-semibold" aria-label="Vistaar Verse home">Vistaar Verse</a>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm" aria-label="Primary Navigation">
          {['Home','About','Services','Real Estate','Events','Marketing','Insights','Contact'].map((item) => (
            <a key={item} href={`#${item.toLowerCase().replace(/\s+/g,'-')}`} className="text-slate-200/80 hover:text-white transition-colors" aria-label={item}>
              {item}
            </a>
          ))}
          <span className="ml-2 text-[10px] tracking-[0.3em] text-blue-300/70">GROWTH OS</span>
          <a href="#contact" className="ml-4 inline-flex items-center rounded-full bg-white/10 hover:bg-white/20 text-white px-4 py-2 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400" aria-label="Book Vistaar Pass">Book Vistaar Pass</a>
        </nav>
        <button className="md:hidden p-2 text-white" aria-label="Toggle navigation" aria-expanded={open} onClick={() => setOpen(v=>!v)}>
          {open ? <X size={22}/> : <Menu size={22}/>}        
        </button>
      </div>
      {open && (
        <div className="md:hidden mt-3 border-t border-white/10 bg-slate-900/95 backdrop-blur-md">
          <nav className="px-4 pt-3 pb-6 space-y-3" aria-label="Mobile Navigation">
            {['Home','About','Services','Real Estate','Events','Marketing','Insights','Contact'].map((item) => (
              <a key={item} href={`#${item.toLowerCase().replace(/\s+/g,'-')}`} className="block text-slate-200 hover:text-white" onClick={()=>setOpen(false)}>
                {item}
              </a>
            ))}
            <a href="#contact" onClick={()=>setOpen(false)} className="inline-flex items-center rounded-full bg-white/10 hover:bg-white/20 text-white px-4 py-2">Book Vistaar Pass</a>
          </nav>
        </div>
      )}
    </header>
  )
}

export default Header
