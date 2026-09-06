import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between border-b border-border-soft bg-white/90 px-6 py-4 backdrop-blur-md">
      <Link to="/" className="font-display text-xl font-bold text-primary">
        soulpet
      </Link>
      <ul className="hidden items-center gap-6 text-sm font-semibold text-text-body md:flex">
        <li><Link to="/" className="hover:text-primary">Início</Link></li>
        <li><Link to="/sobre" className="hover:text-primary">Sobre</Link></li>
        <li><Link to="/missoes" className="hover:text-primary">Missões</Link></li>
        <li><Link to="/recompensas" className="hover:text-primary">Recompensas</Link></li>
        <li><Link to="/integrantes" className="hover:text-primary">Equipe</Link></li>
        <li><Link to="/faq" className="hover:text-primary">FAQ</Link></li>
        <li>
          <Link to="/contato" className="rounded-full bg-primary px-4 py-2 text-white hover:bg-secondary">
            Contato
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Header