let currentSlide = 0
const track = document.getElementById('carousel-track')
const slides = document.querySelectorAll('.carousel-item')

function moverCarousel(direcao) {
  currentSlide += direcao
  if (currentSlide >= slides.length) currentSlide = 0
  if (currentSlide < 0) currentSlide = slides.length - 1
  track.style.transform = `translateX(-${currentSlide * 100}%)`
}

// Acessibilidade
let fontSize = 100

function toggleAcessMenu() {
  document.getElementById('acess-menu').classList.toggle('hidden')
}

function alterarFonte(acao) {
  if (acao === '+') fontSize += 10
  else if (acao === '-') fontSize = Math.max(70, fontSize - 10)
  document.body.style.fontSize = fontSize + '%'
}

function ativarContraste() {
  document.body.classList.toggle('high-contrast')
}

function ativarEscalaCinza() {
  document.body.classList.toggle('grayscale')
}

function resetarEstilo() {
  document.body.style.fontSize = '100%'
  document.body.classList.remove('high-contrast')
  document.body.classList.remove('grayscale')
  fontSize = 100
}

// autoplay opcional
setInterval(() => moverCarousel(1), 6000)
