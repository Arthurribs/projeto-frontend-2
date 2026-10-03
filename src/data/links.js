// Links do menu. Cada um aponta para o id de uma seção da Landing Page.
// O "/" antes do "#" faz o link funcionar também a partir de outras rotas
// (ex: da página /john-lennon, que vamos criar depois).
export const links = [
  { texto: 'Início', href: '/#inicio' },
  { texto: 'A Banda', href: '/#banda' },
  { texto: 'Linha do Tempo', href: '/#timeline' },
  { texto: 'Biografia', href: '/#biografia' },
  { texto: 'Integrantes', href: '/#integrantes' },
  { texto: 'John Lennon', href: '/john-lennon', rota: true },

]