import { Routes, Route } from 'react-router-dom'

import Header from './components/Header'
import Footer from './components/footer'

import Home from './pages/Home'
import Sobre from './pages/Sobre'
import Faq from './pages/Faq'
import Contato from './pages/Contato'
import Missoes from './pages/Missoes'
import MissaoDetalhe from './pages/missao-detalhe'
import Recompensas from './pages/Recompensas'
import Integrantes from './pages/Integrantes'

const App = () => {
  return (
    <div>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/contato" element={<Contato />} />

        <Route path="/missoes" element={<Missoes />} />
        <Route path="/missao/:id" element={<MissaoDetalhe />} />
        <Route path="/recompensas" element={<Recompensas />} />

        <Route path="/integrantes" element={<Integrantes />} />
      </Routes>

      <Footer />
    </div>
  )
}

export default App