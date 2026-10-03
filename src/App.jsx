import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Hero from './sections/Hero'
import Banda from './sections/Banda'
import Fotos from './sections/Fotos'
import Timeline from './sections/Timeline'
import Biografia from './sections/Biografia'
import Integrantes from './sections/Integrantes'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Banda />
        <Fotos />
        <Timeline />
        <Biografia />
        <Integrantes />
      </main>
      <Footer />
    </>
  )
}