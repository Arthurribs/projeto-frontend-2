import { Link } from 'react-router-dom'
export default function ChamadaFinal() {
    return (
        <section id="legado" className="py-5">
            <div className="container">
                <div className="row justify-content-center text-center">
                    <div className="col-lg-8">
                        <h2 className="titulo">Um Legado Eterno</h2>
                        <p className="paragrafo fs-5 text-muted mb-5">
                            Mais de 600 milhões de discos vendidos e uma influência que
                            atravessou o rock, o pop e praticamente todo gênero musical que
                            veio depois. Décadas após o fim da banda, o impacto dos Beatles
                            continua sendo redescoberto por novas gerações.
                        </p>

                        <figure className="mb-5">
                            <blockquote className="blockquote destaque">
                                <p>
                                    "Realize seu sonho. Você mesmo vai ter de fazer isso... eu não
                                    posso acordar você. Você é quem pode se acordar."
                                </p>
                            </blockquote>
                            <figcaption className="blockquote-footer mt-3">
                                John Lennon em entrevista à revista Playboy
                            </figcaption>
                        </figure>

                        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                            <Link to="/john-lennon" className="btn btn-primary btn-lg px-4 passada">
                                Conheça John Lennon →
                            </Link>
                            <a href="#inicio" className="btn btn-outline-dark btn-lg px-4">
                                Voltar ao início ↑
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}