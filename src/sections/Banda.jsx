const numeros = [
    { valor: '13', descricao: 'Álbuns de Estúdio' },
    { valor: '+600', descricao: 'Milhões de Discos' },
    { valor: '10', descricao: 'Anos Juntos' },
    { valor: '4', descricao: 'Lendas da Música' },
]

export default function Banda() {
    return (
        <section id="banda" className="faixa-preta text-white py-5">
            <div className="container text-center">
                <h2 className="titulo text-white mb-4">A Banda em Números</h2>

                <div className="row g-4 mb-4">
                    {numeros.map((numero) => (
                        <div className="col-md-3 passada" key={numero.descricao}>
                            <p className="num-home">{numero.valor}</p>
                            <p className="fw-bold fs-5">{numero.descricao}</p>
                        </div>
                    ))}
                </div>

                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <p className="paragrafo fs-5 mb-0">
                            Em pouco mais de sete anos de carreira de estúdio, os Beatles
                            atravessaram fases completamente distintas: do pop cru dos
                            primeiros singles à experimentação psicodélica. Cada disco é a
                            fotografia de uma banda em constante transformação.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}