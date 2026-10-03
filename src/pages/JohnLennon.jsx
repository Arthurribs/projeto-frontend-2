import { useEffect } from 'react'

const secoes = [
    {
        titulo: 'Infância e Início',
        imagem: '/img/john-infancia.jpg',
        alt: 'John Lennon jovem, de óculos redondos',
        paragrafos: [
            'John Winston Ono Lennon nasceu em 9 de outubro de 1940, em Liverpool. Durante sua juventude, desenvolveu grande interesse pela música e, em 1957, formou o grupo The Quarrymen, uma banda de skiffle e rock que reunia jovens músicos da região.',
            'Foi nesse período que conheceu Paul McCartney, dando início a uma amizade e a uma das parcerias de composição mais importantes da história da música popular, que seria a base para a formação dos Beatles.',
        ],
    },
    {
        titulo: 'A Era Beatles',
        imagem: '/img/john-era-beatles.webp',
        alt: 'John Lennon de cartola, na época dos Beatles',
        paragrafos: [
            'Atuando como vocalista, guitarrista e compositor, Lennon dividia com McCartney a principal responsabilidade pelas canções da banda. A banda passou de músicas mais simples para trabalhos que apresentavam novas técnicas de gravação e influências culturais.',
            'Com o passar dos anos, John passou a explorar temas mais pessoais e sociais em suas músicas, demonstrando interesse por diferentes culturas, filosofia e espiritualidade, o que ajudou a formar sua identidade artística marcante.',
        ],
    },
    {
        titulo: 'Carreira Solo e Legado',
        imagem: '/img/john-carreira-solo.jpg',
        alt: 'John Lennon fazendo o sinal de paz com os dedos',
        pretoEBranco: true,
        paragrafos: [
            `Após o fim dos Beatles em 1970, iniciou uma importante carreira solo ao lado de Yoko Ono. Lançou hinos atemporais como "Imagine", "Jealous Guy" e "Give Peace a Chance", utilizando sua visibilidade para se posicionar contra guerras.`,
            'Apesar de sua trajetória ter sido interrompida tragicamente em 1980, John Lennon deixou uma obra que continua sendo ouvida por novas gerações, consolidando seu nome na história da cultura mundial.',
        ],
    },
]

const fotos = [
    { src: '/img/john-galeria-1.jpg', alt: 'John Lennon sorrindo, de óculos redondos e camiseta preta' },
    { src: '/img/john-galeria-2.webp', alt: 'John Lennon de braços cruzados com camiseta New York City' },
    { src: '/img/john-galeria-3.webp', alt: 'Retrato em preto e branco de John Lennon jovem' },
    { src: '/img/john-galeria-4.webp', alt: 'John Lennon de cartola e óculos redondos' },
    { src: '/img/john-galeria-5.webp', alt: 'John Lennon tocando guitarra em um show' },
    { src: '/img/john-galeria-6.jpg', alt: 'John Lennon de cabelo comprido e barba' },
]

// Divide as 6 fotos em 2 slides com 3 fotos cada
const slides = [fotos.slice(0, 3), fotos.slice(3, 6)]

export default function JohnLennon() {
    // Ao abrir a página: volta ao topo e troca o título da aba
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'instant' })
        document.title = 'John Lennon | The Beatles'

        // Ao sair da página, o título volta ao normal
        return () => {
            document.title = 'The Beatles'
        }
    }, [])

    return (
        <div className="container py-5">
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                        <a href="/#integrantes">Integrantes</a>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                        John Lennon
                    </li>
                </ol>
            </nav>

            <div className="mb-5">
                <h1 className="titulo lh-1">John Lennon</h1>
                <p className="paragrafo fs-4 text-muted">
                    Cantor, compositor, guitarrista e a voz rebelde dos Beatles.
                </p>
            </div>

            {secoes.map((secao, index) => {
                const invertido = index % 2 === 1

                return (
                    <section
                        key={secao.titulo}
                        className={`row align-items-center mb-5 passada ${invertido ? 'flex-md-row-reverse' : ''}`}
                    >
                        <div className="col-md-5 mb-4 mb-md-0">
                            <img
                                src={secao.imagem}
                                alt={secao.alt}
                                className={`img-fluid hoverzada rounded-3 shadow-sm w-100 ${secao.pretoEBranco ? 'preto-e-branco' : ''}`}
                            />
                        </div>
                        <div className="col-md-7">
                            <h2 className="titulo mb-3 fs-1">{secao.titulo}</h2>
                            {secao.paragrafos.map((paragrafo) => (
                                <p className="paragrafo text-justificado fs-5" key={paragrafo}>
                                    {paragrafo}
                                </p>
                            ))}
                        </div>
                    </section>
                )
            })}

            <h2 className="destaque mt-5 mb-4">Mais Momentos de John Lennon</h2>

            <div id="carrosselJohn" className="carousel slide">
                <div className="carousel-indicators">
                    {slides.map((slide, index) => (
                        <button
                            key={index}
                            type="button"
                            data-bs-target="#carrosselJohn"
                            data-bs-slide-to={index}
                            className={index === 0 ? 'active' : ''}
                            aria-current={index === 0 ? 'true' : undefined}
                            aria-label={`Slide ${index + 1}`}
                        ></button>
                    ))}
                </div>

                <div className="carousel-inner">
                    {slides.map((slide, index) => (
                        <div
                            key={index}
                            className={`carousel-item ${index === 0 ? 'active' : ''}`}
                        >
                            <div className="row g-3">
                                {slide.map((foto) => (
                                    <div className="col-4" key={foto.src}>
                                        <img
                                            src={foto.src}
                                            alt={foto.alt}
                                            className="d-block w-100 rounded shadow foto-carrossel"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                <button className="carousel-control-prev" type="button" data-bs-target="#carrosselJohn" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Anterior</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carrosselJohn" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Próximo</span>
                </button>
            </div>

            <div className="text-center mt-5">
                <a href="/#integrantes" className="btn btn-dark px-4 py-2">
                    Voltar para os integrantes
                </a>
            </div>
        </div>
    )
}