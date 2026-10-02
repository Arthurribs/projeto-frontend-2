export default function Hero() {
    return (
        <section id="inicio" className="py-5">
            <div className="container">
                <div className="row align-items-center g-5">
                    <div className="col-lg-5">
                        <h1 className="titulo lh-1 mb-3">
                            Quatro garotos de Liverpool que mudaram a música
                        </h1>
                        <p className="paragrafo fs-5 text-muted mb-4">
                            De um porão apertado no Cavern Club às maiores plateias do
                            planeta, a trajetória dos Beatles atravessa quatro personalidades
                            diferentes, uma amizade e uma década inteira de reinvenção
                            musical. Essa é a história de como quatro garotos de Liverpool se
                            tornaram lenda.
                        </p>
                        <div className="d-grid gap-2 d-sm-flex">
                            <a href="#biografia" className="btn btn-dark px-4 py-2">
                                Ler a biografia →
                            </a>
                            <a href="#integrantes" className="btn btn-outline-dark px-4 py-2">
                                Conhecer os integrantes
                            </a>
                        </div>
                    </div>

                    <div className="col-lg-7">
                        <img
                            className="hero-img rounded-3 shadow"
                            src="/img/hero.webp"
                            alt="Os quatro Beatles posando em uma faixa de pedestres"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}