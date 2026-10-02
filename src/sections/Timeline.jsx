const marcos = [
    {
        ano: '1960',
        titulo: 'A Formação',
        imagem: '/img/timeline-1960-formacao.jpg',
        alt: 'Foto dos Beatles jovens',
        texto: `Durante os anos iniciais tocando exaustivamente em Hamburgo e no Cavern Club em Liverpool, o grupo finalmente se consolida com a entrada de Ringo Starr na bateria. Esse período de intensas apresentações ao vivo foi fundamental para forjar a presença de palco, a química inegável entre os integrantes e a sonoridade crua que serviria de base para a revolução musical que estava por vir.`,
    },
    {
        ano: '1962',
        titulo: 'Love Me Do',
        imagem: '/img/timeline-1962-love-me-do.webp',
        alt: 'Cena do clipe de Love Me Do',
        texto: `O lançamento do primeiro single oficial sob a tutela do produtor George Martin marca o estopim da Beatlemania. A faixa escalou rapidamente as paradas do Reino Unido, chamando a atenção da mídia e criando uma legião de fãs fervorosos. Era o sinal claro de que o mundo estava prestes a ser dominado pelo carisma e pelas composições inovadoras dos quatro rapazes.`,
    },
    {
        ano: '1967',
        titulo: 'A Revolução no Estúdio',
        imagem: '/img/timeline-1967-sgt-pepper.jpg',
        alt: "Bastidores da capa de Sgt. Pepper's Lonely Hearts Club Band",
        texto: `Com o lançamento do aclamado álbum "Sgt. Pepper's Lonely Hearts Club Band", a banda redefine os limites da música pop e da cultura jovem. Exaustos das turnês mundiais caóticas, eles abandonam os palcos e abraçam a experimentação total, transformando o estúdio de gravação em um vasto laboratório sonoro cheio de inovações, arranjos complexos e instrumentos inusitados.`,
    },
    {
        ano: '1969',
        titulo: 'Abbey Road e a Despedida',
        imagem: '/img/timeline-1969-abbey-road.jpg',
        alt: 'Beatles atravessando a Abbey Road',
        pretoEBranco: true,
        texto: `A icônica travessia na faixa de pedestres em frente aos estúdios da EMI e o lendário concerto surpresa no telhado do prédio da Apple Corps marcam os últimos grandes momentos do grupo. Apesar das fortes tensões internas, eles se unem para entregar obras-primas inesquecíveis que encerram com maestria a década que eles próprios ajudaram a moldar.`,
    },
]

export default function Timeline() {
    return (
        <section id="timeline" className="fundo-claro py-5">
            <div className="container">
                <h2 className="titulo text-center mb-5">Uma Viagem no Tempo</h2>

                {marcos.map((marco, index) => {
                    // Itens ímpares ficam invertidos (zigue-zague)
                    const invertido = index % 2 === 1

                    return (
                        <div
                            key={marco.ano}
                            className={`row align-items-center mb-5 ${invertido ? 'flex-md-row-reverse' : ''}`}
                        >
                            <div className="col-md-6">
                                <img
                                    className={`img-fluid shadow img-timeline ${marco.pretoEBranco ? 'preto-e-branco' : ''}`}
                                    src={marco.imagem}
                                    alt={marco.alt}
                                />
                            </div>

                            <div className={`col-md-6 mt-4 mt-md-0 ${invertido ? 'text-md-end' : ''}`}>
                                <p className="titulo mb-1">{marco.ano}</p>
                                <h3 className="fw-bold fs-3 mb-3">{marco.titulo}</h3>
                                <p className="paragrafo text-justificado">{marco.texto}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}