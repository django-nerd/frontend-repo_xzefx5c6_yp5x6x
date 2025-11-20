function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="relative mt-24 border-t border-white/10 bg-gradient-to-t from-slate-950 to-transparent" aria-label="Footer">
      <div className="mx-auto max-w-7xl px-6 py-10 grid md:grid-cols-4 gap-8 text-sm text-slate-300">
        <div>
          <div className="text-white font-semibold mb-2">Vistaar Verse</div>
          <p className="text-slate-400">Powered by Vistaar Labs · Built for Scale</p>
        </div>
        <nav className="space-y-2" aria-label="Mini Sitemap">
          {['Home','About','Services','Real Estate','Events','Marketing','Insights','Contact'].map(i => (
            <a key={i} href={`#${i.toLowerCase().replace(/\s+/g,'-')}`} className="block hover:text-white">{i}</a>
          ))}
        </nav>
        <div>
          <div className="text-white font-semibold mb-2">Contact</div>
          <p>VISTAAR EVENT SOLUTIONS PVT. LTD</p>
          <p>Email: contact@brandxpt.com</p>
          <p>Phone: +91 9663994748 / +91 9663985458</p>
          <p>3rd Floor, 236, 2nd Main Rd, Pai Layout, Mahadevapura, Bengaluru, Karnataka 560016</p>
        </div>
        <div className="text-slate-400">© {year} Vistaar Verse — Vistaar Event Solutions Pvt. Ltd</div>
      </div>
    </footer>
  )
}

export default Footer
