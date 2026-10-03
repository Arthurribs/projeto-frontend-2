import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import LandingPage from './pages/LandingPage'
import JohnLennon from './pages/JohnLennon'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/john-lennon" element={<JohnLennon />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}