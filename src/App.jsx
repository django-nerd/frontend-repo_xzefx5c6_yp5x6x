import Header from './components/Header'
import Loader from './components/Loader'
import Hero from './components/Hero'
import ValueBlock from './components/ValueBlock'
import ServiceGrid from './components/ServiceGrid'
import Pillars from './components/Pillars'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Loader />
      <Header />
      <main>
        <Hero />
        <ValueBlock />
        <ServiceGrid />
        <Pillars />
      </main>
      <Footer />
    </div>
  )
}

export default App
