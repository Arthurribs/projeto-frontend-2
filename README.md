# The Beatles — Trabalho Final de Front-end 2 🎸

Site sobre os Beatles, feito pelo grupo Tetê Lanches (Enzo Gabriel, Arthur Ribeiro,
            Gabriel Carrajola, Matheus Bonatti, Levi Lara e
            Jaderson Andrade.)

Esse é o repositório **final** do projeto!

## 🖤 O Conceito Visual (Preto e Branco)

Nossa ideia desde o começo era fazer um design focado no **preto e branco** mais editorial tipo revista (E Falhamos miseravelmente). Em vez de entupir o site de cores, a gente quis passar aquela vibe clássica, atemporal e elegante — meio documentário antigo, a cara dos anos 60.

Deixamos o visual bem minimalista, usando os contrastes do fundo escuro com textos claros e imagens. Até usamos alguns filtros nas imagens via CSS para manter essa estética "black and white".

## 🛠️ Como o código foi feito (Stack)

O projeto é focado no front-end raiz, rodando liso (será?) hospedado no Github Pages:

* **HTML5:** Código bem semântico. Usamos tags estruturais corretas como `<nav>`, `<main>`, `<section>` e `<footer>` para organizar o conteúdo de forma acessível e limpa.
* **CSS3:** Todo mundo usou o mesmo arquivo compartilhado (`assets/css/style.css`). Lá estão nossas variáveis de cores (como `--preto`, `--branco`), fontes padronizadas (`.titulos`, `.paragrafo`) e nossas animações marotas criadas na mão (como as classes `.hoverzada` e `.passada` para dar vida aos cards e fotos).
* **Bootstrap 5:** Adotamos o framework que o professor recomendou. Ajudou demais na responsividade do site! Usamos intensamente o sistema de Grid (`container`, `row`, `col`), utilitários de espaçamento (`my-5`, `mb-4`), e componentes interativos (como Navbar responsiva, Acordeões e Carrosséis).

## 📄 Estrutura das Páginas

O site foi dividido em 11 páginas principais para cobrir toda a trajetória da banda:

1. **Início (index.html):** A porta de entrada. Tem uma hero image grandona, dados numéricos rápidos sobre a banda e atalhos para as outras seções do site (timeline, integrantes, legado).
2. **Biografia (biografia.html):** Um textão justificado contando a história, seguido por cards dos 4 integrantes na base. Cada card leva para a página individual deles.
3. **Páginas dos Integrantes (john-lennon.html, paul-mccartney.html, george-harrison.html, ringo-starr.html):** Estruturadas em zigue-zague (texto na esquerda, foto na direita e vice-versa). No fim de cada uma, tem um carrossel interativo do Bootstrap com fotos extras do membro.
4. **Discografia (discografia.html):** Uma grade (grid) muito maneira com as capas de todos os 13 álbuns de estúdio da banda. Fizemos de um jeito que no celular ficam 2 por linha, no tablet 3 e no PC 4. 
5. **Curiosidades (curiosidades.html):** Usamos o componente *Accordion* do Bootstrap para listar as curiosidades de um jeito interativo. Você clica na pergunta e a resposta desliza pra baixo. Envelopamos tudo num card com sombra pra ficar chique.
6. **Legado (legado.html) & Timeline (timeline.html):** Muito conteúdo visual, também no formato zigue-zague com imagens intercaladas para leitura dinâmica. No legado, também adicionamos iframes com vídeos icônicos do YouTube.
7. **Galeria (galeria.html):** Uma grade de fotos simples e responsiva com as melhores imagens da banda. 

## 📱 Responsividade

Todas as páginas foram testadas (mentira) e adaptadas (mentira) para mobile. O menu superior vira aquele ícone de "hambúrguer" nas telas pequenas, o footer divide os links certinho em colunas menores e as imagens nunca achatam, graças ao uso das classes `img-fluid` e aos breakpoints do Bootstrap (`col-md`, `col-lg`).

---
**Here comes the sun nananan** Obrigado a todos que quebraram o site mas corrigiram antes de enviar. 
E Professor me desculpa qualquer brincadeirinha ai nos commits, tmj, até a proxima!

👉 [Briefing do projeto](https://docs.google.com/document/d/11DTxg1GSmS0bQ-Pl0N_hmXWmHbfxiIsZ/edit)

Board com as páginas e quem tá fazendo o quê:
👉 [Project](https://github.com/users/wnsogabriel/projects/3)

Pasta no Drive (fotos, fontes, links):
👉 [Drive](https://drive.google.com/drive/folders/1OR083GTQEs939TgdsOqli17M2Il1lrY6)
