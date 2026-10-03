import { useState } from 'react'
import { links } from '../data/links'
import LinkMenu from './LinkMenu'

export default function Navbar() {
  // Controla se o menu hambúrguer está aberto no celular
  const [menuAberto, setMenuAberto] = useState(false)

  function fecharMenu() {
    setMenuAberto(false)
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark navbar-beatles sticky-top py-0">
      <div className="container">
        <a className="navbar-brand" href="/#inicio" onClick={fecharMenu}>
          <img src="/img/logo-branca.png" alt="The Beatles" height="80" />
        </a>

        <button
          className="navbar-toggler"
          type="button"
          aria-controls="menuNavegacao"
          aria-expanded={menuAberto}
          aria-label="Abrir menu"
          onClick={() => setMenuAberto(!menuAberto)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className={`collapse navbar-collapse ${menuAberto ? 'show' : ''}`}
          id="menuNavegacao"
        >
          <ul className="navbar-nav ms-auto">
            {links.map((link) => (
              <li className="nav-item" key={link.href}>
                <LinkMenu link={link} onClick={fecharMenu} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}