import { Link } from 'react-router-dom'

// Recebe um item do array de links e decide como mostrar:
// - rota (ex: /john-lennon): usa <Link>, que troca de página sem recarregar
// - âncora (ex: /#biografia): usa <a>, para o navegador rolar até a seção
export default function LinkMenu({ link, onClick }) {
    if (link.rota) {
        return (
            <Link className="nav-link" to={link.href} onClick={onClick}>
                {link.texto}
            </Link>
        )
    }

    return (
        <a className="nav-link" href={link.href} onClick={onClick}>
            {link.texto}
        </a>
    )
}