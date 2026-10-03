import { Link } from 'react-router-dom'

const integrantes = [
    {
        nome: 'John Lennon',
        imagem: '/img/integrante-john.png',
        rota: '/john-lennon',
        texto:
            'John Lennon foi um dos fundadores dos Beatles, atuando como vocalista, guitarrista e compositor. Ao lado de Paul McCartney, formou uma das parcerias de composição mais importantes da história da música.',
    },
    {
        nome: 'Paul McCartney',
        imagem: '/img/integrante-paul.png',
        texto:
            'Paul McCartney foi baixista, vocalista e compositor dos Beatles. Suas músicas ajudaram a definir o estilo da banda e, após o fim do grupo, ele continuou sua carreira musical com grande sucesso.',
    },
    {
        nome: 'George Harrison',
        imagem: '/img/integrante-george.png',
        texto:
            'George Harrison foi o guitarrista principal dos Beatles e também contribuiu como compositor e vocalista. Conhecido como o “Beatle quieto”, teve grande interesse pela música e cultura indianas.',
    },
    {
        nome: 'Ringo Starr',
        imagem: '/img/integrante-ringo.png',
        texto:
            'Ringo Starr foi o baterista dos Beatles, entrando para a banda em 1962. Seu estilo de tocar bateria marcou o som do grupo, e ele também participou dos vocais em algumas músicas.',
    },
]

export default function Integrantes() {
    return (
        <section id="integrantes" className="fundo-claro py-5">
            <div className="container">
                <div className="row justify-content-center text-center mb-5">
                    <div className="col-lg-8">
                        <h2 className="titulo">Os Quatro de Liverpool</h2>
                        <p className="paragrafo fs-5 text-muted mb-0">
                            John Lennon, Paul McCartney, George Harrison e Ringo Starr. Quatro
                            personalidades opostas que, juntas, criaram uma química impossível
                            de repetir.
                        </p>
                    </div>
                </div>

                <div className="row g-4">
                    {integrantes.map((integrante) => (
                        <div className="col-md-6 col-lg-3" key={integrante.nome}>
                            <div className="card border-0 shadow-sm h-100 p-4 hoverzada text-center">
                                <img
                                    className="img-fluid mx-auto mb-3 img-integrante"
                                    src={integrante.imagem}
                                    alt={`Retrato de ${integrante.nome}`}
                                />
                                <h3 className="h4 mb-3">{integrante.nome}</h3>
                                <p className="text-justificado text-muted mb-0">
                                    {integrante.texto}
                                </p>
                                {integrante.rota && (
                                    <Link to={integrante.rota} className="btn btn-dark mt-3">
                                        Sobre John
                                    </Link>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}