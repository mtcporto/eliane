const images = {
  amor: 'assets/amorem12atos.png',
  dominique: 'assets/dominique.png',
  espelho: 'assets/espelhodagua.png',
  autora: 'assets/eliane-mesquita-restaurada.png'
};

const books = [
  { id: 'amor', title: 'Amor em Doze Atos', oldImage: 'assets/amor-em-12-atos.jpg', type: 'Contos · jovem e adulto', summary: 'Doze histórias sobre o encontro do verdadeiro amor, entre o realismo e o surrealismo.', amazon: 'http://www.amazon.com.br/Amor-Doze-Atos-contos-conto-ebook/dp/B00LTG4G5E' },
  { id: 'dominique', title: 'Dominique', oldImage: 'assets/dominique.jpg', type: 'Romance · pré-adolescentes', summary: 'A trajetória de um garoto sertanejo e sonhador que decide mudar o próprio futuro.', amazon: 'http://www.amazon.com.br/DOMINIQUE-ELIANE-MESQUITA-SILVA-ebook/dp/B00MI5VK4A' },
  { id: 'espelho', title: "Espelho D'Água", oldImage: 'assets/espelho-dagua.jpg', type: 'Infantojuvenil', summary: 'Uma história de crescimento, amizade e descobertas nas asas de uma borboleta.', amazon: 'http://www.amazon.com.br/ESPELHO-D%C3%81GUA-ELIANE-MESQUITA-SILVA-ebook/dp/B00MYHM1TK' }
];

let heroRotationTimer;

function layout(content) { return `<div class="page">${content}</div>`; }
function bookCard(book) { return `<article class="book-card"><a href="#${book.id}"><div class="book-cover" aria-label="Passe o mouse para ver a capa antiga de ${book.title}"><div class="book-cover-inner"><div class="book-cover-face book-cover-front"><img src="${images[book.id]}" alt="Capa atual de ${book.title}"></div><div class="book-cover-face book-cover-back" aria-hidden="true"><img src="${book.oldImage}" alt=""></div></div></div><h3>${book.title}</h3><p>${book.summary}</p><span class="text-link">Conhecer a obra</span></a></article>`; }
function home() { return layout(`<section class="hero"><div class="hero-copy"><span class="eyebrow">Escritora · desenhista · compositora</span><h1>Histórias para ler, sentir e levar consigo.</h1><p>Bem-vinda ao universo de Eliane Mesquita Silva. Um espaço para conhecer seus livros e as histórias que nasceram de uma vida inteira de curiosidade.</p><div class="hero-note">Publicado originalmente em 2014</div></div><div class="hero-art"><span class="scribble">palavras que ficam</span><img src="${images.amor}" alt="Capa de Amor em Doze Atos"></div></section><section><div class="section-head"><div><span class="eyebrow">O catálogo</span><h2>Obras</h2></div><p>Livros publicados na Amazon para ler no Kindle, computador, tablet ou celular.</p></div><div class="book-grid">${books.map(bookCard).join('')}</div></section>`); }
function obras() { return layout(`<div class="section-head"><div><span class="eyebrow">Bibliografia</span><h1>Obras</h1></div><p>Conheça os três livros publicados por Eliane Mesquita Silva.</p></div><div class="book-grid">${books.map(bookCard).join('')}</div>`); }
function author() { return layout(`<section class="split"><div><span class="eyebrow">A autora</span><h1>Eliane Mesquita Silva</h1><img class="author-photo" src="${images.autora}" alt="Eliane Mesquita Silva"></div><div class="copy"><p class="lead">Nascida no Recife, PE, em 1950, Eliane cresceu entre os clássicos nacionais e internacionais e nunca perdeu a curiosidade de aprender.</p><p>Cursou até o segundo grau, na maioria em escolas públicas. Desenha e escreve contos desde a infância, porém interrompeu os estudos e as artes por quase 40 anos, retomando-os aos 60.</p><div class="quote">“A flor que desabrocha na adversidade é a mais rara e bela de todas.”</div><p>Publicou <em>Amor em Doze Atos</em>, em julho de 2014, com doze contos dirigidos ao público jovem e adulto, e <em>Dominique</em>, em agosto de 2014, dirigido aos pré-adolescentes. Possui outros trabalhos em andamento.</p><p>Além de escritora e desenhista, é blogueira e compositora. Muito material a trabalhar, o que torna a terceira idade mais interessante.</p></div></section>`); }
function buy() { return layout(`<section class="split"><div><span class="eyebrow">Leitura digital</span><h1>Como comprar?</h1><p>Se você quer levar uma dessas histórias com você, é simples.</p></div><div class="copy"><div class="buy-steps"><div class="buy-step"><p>Vá ao site da <a class="text-link" href="https://www.amazon.com.br/" target="_blank" rel="noreferrer">Amazon</a>.</p></div><div class="buy-step"><p>Pesquise por <strong>Eliane Mesquita Silva</strong> ou pelo nome do livro.</p></div><div class="buy-step"><p>Escolha a obra, clique em “Compre agora com 1-clique” e siga as instruções da sua conta.</p></div><div class="buy-step"><p>Depois é só baixar e começar a ler no Kindle, computador, tablet ou celular.</p></div></div><a class="button" href="https://www.amazon.com.br/s?k=eliane+mesquita+silva" target="_blank" rel="noreferrer">Ver na Amazon ↗</a></div></section>`); }
function detail(book) { return layout(`<article class="detail"><div class="detail-cover"><img src="${images[book.id]}" alt="Capa de ${book.title}"></div><div class="copy"><span class="eyebrow">${book.type}</span><h1>${book.title}</h1><p class="lead">${book.summary}</p><p>${book.id === 'amor' ? 'Amor em Doze Atos é um livro leve, de fácil leitura, com doze contos que mantêm como temática principal o encontro do verdadeiro amor. Alguns são sérios, outros cômicos, outros dramáticos; todos viajam entre o realismo e o surrealismo.' : book.id === 'dominique' ? 'Vamos acompanhar a trajetória de Dominique dos sete aos quinze anos. Um garoto, filho de lavradores, que não se conforma com o destino e vai buscar nos livros e nos bons exemplos a solução para aperfeiçoar sua linguagem e seu aprendizado.' : 'Em Espelho D’Água, as incertezas da pré-adolescência saltam aos olhos de Anita. Um incidente e a ajuda inesperada de uma borboleta de rara sabedoria vão transformar sua maneira de ver a si mesma, os colegas e a natureza.'}</p><a class="button" href="${book.amazon}" target="_blank" rel="noreferrer">Comprar na Amazon ↗</a></div></article>`); }

function render() {
  const route = location.hash.slice(1) || 'inicio';
  const book = books.find(item => item.id === route);
  document.querySelector('#app').innerHTML = book ? detail(book) : route === 'obras' ? obras() : route === 'autora' ? author() : route === 'comprar' ? buy() : home();
  document.querySelectorAll('[data-route]').forEach(link => link.classList.toggle('active', link.dataset.route === route || (route === 'inicio' && link.dataset.route === 'inicio')));
  document.querySelector('.main-nav').classList.remove('open');
  document.querySelector('.menu-toggle').setAttribute('aria-expanded', 'false');
  startHeroRotation();
}

function startHeroRotation() {
  window.clearInterval(heroRotationTimer);
  const heroImage = document.querySelector('.hero-art img');
  if (!heroImage) return;

  let currentBook = 0;
  heroRotationTimer = window.setInterval(() => {
    heroImage.classList.add('cover-changing');
    window.setTimeout(() => {
      currentBook = (currentBook + 1) % books.length;
      heroImage.src = images[books[currentBook].id];
      heroImage.alt = `Capa de ${books[currentBook].title}`;
      heroImage.classList.remove('cover-changing');
    }, 350);
  }, 4000);
}

document.querySelector('.menu-toggle').addEventListener('click', () => {
  const nav = document.querySelector('.main-nav');
  const open = nav.classList.toggle('open');
  document.querySelector('.menu-toggle').setAttribute('aria-expanded', String(open));
});
window.addEventListener('hashchange', render);
render();
