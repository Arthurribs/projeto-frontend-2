import Navbar from './components/Navbar'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <main className="container py-5" style={{ minHeight: '150vh' }}>
        <h1 className="titulo">The Beatles</h1>
      </main>
      <Footer />
    </>
  )
}