# The Beatles | Landing Page em React

Parte 2 (individual) do trabalho da disciplina Desenvolvimento Frontend II.
Universidade Veiga de Almeida | Prof. Caio Silva Azeredo | Turma 4169ADSN2A1

## Autor

Arthur Ribeiro dos Santos

## Origem

- Repositorio do grupo (Parte 1): https://github.com/wnsogabriel/thebeatles-front2
- Paginas que fiz na Parte 1: biografia.html e jonh-lennon.html
- Autor do index.html original: Enzo Gabriel Pereira Silva
- As paginas originais estao na pasta `referencia-html/` para comparacao

## Site publicado

https://beatles-react-arthur.netlify.app

## Como executar

```bash
npm install
npm run dev
```

## Tecnologias

- React com Vite
- Bootstrap 5 (mesmo framework de CSS usado pelo grupo)
- React Router (rota separada para a pagina do John Lennon)

## Secoes da Landing Page (rota /)

| Secao                            | Origem                                                              |
| -------------------------------- | ------------------------------------------------------------------- |
| Navbar                           | Fusao dos menus do index.html e da biografia.html                   |
| Hero                             | index.html (imagem + card "Conheca a Historia")                     |
| A Banda em Numeros               | index.html                                                          |
| Momentos Marcantes               | index.html                                                          |
| Linha do Tempo                   | index.html                                                          |
| Biografia                        | biografia.html (minha pagina)                                       |
| Os Quatro de Liverpool           | biografia.html (cards) + index.html (card "Os Quatro de Liverpool") |
| Um Legado Eterno (chamada final) | index.html (card "Legado" + citacao do John)                        |
| Footer                           | Fusao dos rodapes do index.html e da biografia.html                 |

## Rota extra (diferencial)

| Rota         | Origem                          |
| ------------ | ------------------------------- |
| /john-lennon | jonh-lennon.html (minha pagina) |

## Principais decisoes de fusao

- Um unico menu e um unico rodape, compartilhados pela Landing e pela rota do John
- Links do menu apontam para ancoras das secoes em vez de arquivos .html
- Apenas um H1 na Landing (no Hero); o titulo "Biografia" virou H2
- Botoes que levavam para paginas de colegas foram removidos
- Imagens externas foram trocadas por imagens locais, renomeadas e comprimidas
- Dados repetidos (numeros, fotos, timeline, integrantes, links) ficam em arrays percorridos com map()
- useState no menu do celular e no botao "Ler mais" da biografia

## Estrutura

```
src/
├── components/
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   └── LinkMenu.jsx
├── data/
│   └── links.js
├── sections/
│   ├── Hero.jsx
│   ├── Banda.jsx
│   ├── Fotos.jsx
│   ├── Timeline.jsx
│   ├── Biografia.jsx
│   ├── Integrantes.jsx
│   └── ChamadaFinal.jsx
├── pages/
│   ├── LandingPage.jsx
│   └── JohnLennon.jsx
├── App.jsx
├── index.css
└── main.jsx
```