import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Hero from './sections/Hero'
import Banda from './sections/Banda'
import Fotos from './sections/Fotos'
import Timeline from './sections/Timeline'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Banda />
        <Fotos />
        <Timeline />
      </main>
      <Footer />
    </>
  )
}