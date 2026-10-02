const fotos = [
    {
        src: '/img/foto-aeroporto.jpg',
        alt: 'Beatles acenando para os fãs na chegada a um aeroporto',
    },
    {
        src: '/img/foto-retrato.jpg',
        alt: 'Retrato colorido dos quatro Beatles de terno',
    },
    {
        src: '/img/foto-ed-sullivan.jpg',
        alt: 'Beatles tocando no palco de um programa de TV',
    },
]

export default function Fotos() {
    return (
        <section id="fotos" className="py-5">
            <div className="container">
                <h2 className="titulo text-center mb-4">Momentos Marcantes</h2>

                <div className="row g-4">
                    {fotos.map((foto) => (
                        <div className="col-md-4" key={foto.src}>
                            <img
                                className="img-fluid hoverzada foto-destaque"
                                src={foto.src}
                                alt={foto.alt}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}