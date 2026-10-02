import { links } from '../data/links'

export default function Footer() {
    return (
        <footer className="footer-beatles">
            <div className="container">
                <div className="row align-items-center g-4">
                    <div className="col-md-2 text-center text-md-start">
                        <img
                            className="img-fluid logo-footer"
                            src="/img/logo-footer.png"
                            alt="Logo dos Beatles"
                        />
                    </div>

                    <div className="col-md-6">
                        <p>
                            <b>Trabalho de Front-end 2</b> - Banda
                            <br />
                            Parte 1 (grupo): Enzo Gabriel, Arthur Ribeiro, Gabriel Carrajola,
                            Matheus Bonatti, Levi Lara e Jaderson Andrade.
                            <br />
                            Versão em React: Arthur Ribeiro.
                            <br />
                            Todos os direitos reservados © 2026 - The Beatles
                        </p>
                    </div>

                    <div className="col-md-4">
                        <ul className="list-unstyled row row-cols-2 mb-0">
                            {links.map((link) => (
                                <li className="col nav-item" key={link.href}>
                                    <a className="nav-link" href={link.href}>
                                        {link.texto}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}