import { useState } from 'react'

// Cada parágrafo é um fragmento JSX (<>...</>) para manter os <strong> do original
const paragrafos = [
    <>
        The Beatles foi uma banda inglesa formada em Liverpool que se tornou um dos
        grupos mais importantes e influentes da história da música. Composta por{' '}
        <strong>John Lennon, Paul McCartney, George Harrison e Ringo Starr</strong>,
        a banda transformou o rock e a música popular durante a década de 1960,
        influenciando gerações de artistas e ajudando a mudar a cultura mundial.
    </>,
    <>
        A história dos Beatles começou em Liverpool, onde John Lennon já tocava com
        grupos locais antes de conhecer Paul McCartney. George Harrison
        posteriormente se juntou ao grupo, e, após algumas mudanças na formação,
        Ringo Starr assumiu a bateria. Durante os primeiros anos, a banda ganhou
        experiência tocando em clubes de Liverpool e, principalmente, em Hamburgo,
        na Alemanha. Essas apresentações ajudaram os músicos a desenvolver sua
        identidade e experiência no palco.
    </>,
    <>
        Em 1961, os Beatles conheceram Brian Epstein, que se tornou seu empresário.
        No ano seguinte, a banda conseguiu um contrato com a gravadora Parlophone,
        ligada à EMI, e passou a trabalhar com o produtor George Martin. O primeiro
        grande lançamento foi o single "Love Me Do", em 1962. A partir daí, o
        sucesso do grupo cresceu rapidamente.
    </>,
    <>
        Em 1963 e 1964, os Beatles alcançaram um enorme sucesso internacional. A
        chamada <strong>Beatlemania</strong> tomou conta do Reino Unido e
        posteriormente dos Estados Unidos. Em fevereiro de 1964, o grupo chegou aos
        Estados Unidos e realizou uma apresentação histórica no programa The Ed
        Sullivan Show, contribuindo para o fenômeno conhecido como{' '}
        <strong>Invasão Britânica</strong>.
    </>,
    <>
        Ao longo da carreira, os Beatles passaram por uma grande evolução musical.
        Inicialmente conhecidos principalmente por suas músicas pop e apresentações
        ao vivo, começaram a experimentar novas sonoridades, instrumentos e técnicas
        de gravação. Álbuns como{' '}
        <strong>
            Rubber Soul, Revolver, Sgt. Pepper's Lonely Hearts Club Band e Abbey Road
        </strong>{' '}
        demonstram essa transformação. O grupo passou a explorar temas e estilos
        cada vez mais variados, ajudando a transformar o rock em uma forma de
        expressão artística mais ampla.
    </>,
    <>
        Em 1966, os Beatles decidiram deixar de realizar turnês, concentrando-se
        principalmente na produção em estúdio. Essa mudança permitiu que
        experimentassem ainda mais com suas músicas e com as possibilidades de
        gravação. Durante esse período, a banda também entrou em contato com
        diferentes culturas e influências, incluindo experiências relacionadas à
        Índia e à espiritualidade.
    </>,
    <>
        Apesar do enorme sucesso, conflitos internos e diferenças criativas
        começaram a crescer entre os integrantes. No final da década de 1960, a
        relação entre os membros ficou cada vez mais complicada, enquanto cada um
        desenvolvia também seus próprios projetos. O último período da banda
        produziu trabalhos marcantes, incluindo{' '}
        <strong>The Beatles (White Album), Abbey Road e Let It Be</strong>.
    </>,
    <>
        Em 1970, os Beatles chegaram ao fim como grupo. Mesmo após a separação, John
        Lennon, Paul McCartney, George Harrison e Ringo Starr continuaram suas
        carreiras individualmente e alcançaram grande sucesso como artistas solo.
    </>,
    <>
        O fim da banda, porém, não encerrou sua influência. Os Beatles continuaram
        sendo reconhecidos por sua contribuição à música, à cultura e à indústria
        fonográfica. Em 1988, o grupo foi introduzido no{' '}
        <strong>Rock & Roll Hall of Fame</strong>, consolidando ainda mais seu lugar
        na história do rock.
    </>,
    <>
        Mais de cinco décadas após o fim da banda, sua música continua sendo ouvida
        por novas gerações. A combinação de grandes composições, harmonias, inovação
        em estúdio e constante transformação artística fez dos Beatles um dos
        maiores fenômenos da história da música popular. Seu legado permanece
        presente e influencia músicos e artistas em todo o mundo.
    </>,
]

const PARAGRAFOS_INICIAIS = 3

export default function Biografia() {
    // false = mostra só o começo; true = mostra o texto inteiro
    const [textoCompleto, setTextoCompleto] = useState(false)

    const paragrafosVisiveis = textoCompleto
        ? paragrafos
        : paragrafos.slice(0, PARAGRAFOS_INICIAIS)

    return (
        <section id="biografia" className="py-5">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-9">
                        <h2 className="titulo text-center mb-4">Biografia</h2>

                        {paragrafosVisiveis.map((paragrafo, index) => (
                            <p className="paragrafo text-justificado fs-5 mb-4" key={index}>
                                {paragrafo}
                            </p>
                        ))}

                        <div className="text-center">
                            <button
                                type="button"
                                className="btn btn-outline-dark px-4"
                                aria-expanded={textoCompleto}
                                onClick={() => setTextoCompleto(!textoCompleto)}
                            >
                                {textoCompleto ? 'Mostrar menos ↑' : 'Ler a biografia completa ↓'}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}