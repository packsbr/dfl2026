/* ============================================================
   DFL 2026 - PÁGINA DE VENDAS
   Arquivo: js/main.js
   Edite a lógica e comportamento aqui
   ============================================================ */

/* ---- CONTAGEM REGRESSIVA ---- */
/* Edite o tempo inicial abaixo (horas, minutos, segundos) */
var totalSegundos = (2 * 3600) + (47 * 60) + 33;

function atualizarContador() {
  if (totalSegundos <= 0) {
    totalSegundos = (2 * 3600) + (59 * 60) + 59; // Reinicia ao chegar a zero
  }

  var h = Math.floor(totalSegundos / 3600);
  var m = Math.floor((totalSegundos % 3600) / 60);
  var s = totalSegundos % 60;

  function pad(n) { return String(n).padStart(2, '0'); }

  var elHoras    = document.getElementById('contador-horas');
  var elMinutos  = document.getElementById('contador-minutos');
  var elSegundos = document.getElementById('contador-segundos');

  if (elHoras)    elHoras.textContent    = pad(h);
  if (elMinutos)  elMinutos.textContent  = pad(m);
  if (elSegundos) elSegundos.textContent = pad(s);

  totalSegundos--;
}

setInterval(atualizarContador, 1000);
atualizarContador();


/* ---- FAQ ACCORDION ---- */
document.addEventListener('DOMContentLoaded', function () {
  var itens = document.querySelectorAll('.faq__item');

  itens.forEach(function (item) {
    var btn = item.querySelector('.faq__pergunta');

    btn.addEventListener('click', function () {
      var estaAberto = item.classList.contains('aberto');

      // Fecha todos
      itens.forEach(function (i) { i.classList.remove('aberto'); });

      // Abre o clicado (se estava fechado)
      if (!estaAberto) {
        item.classList.add('aberto');
      }
    });
  });
});


/* ---- SCROLL SUAVE PARA ÂNCORAS ---- */
document.addEventListener('DOMContentLoaded', function () {
  var links = document.querySelectorAll('a[href^="#"]');

  links.forEach(function (link) {
    link.addEventListener('click', function (e) {
      var alvo = document.querySelector(link.getAttribute('href'));
      if (alvo) {
        e.preventDefault();
        alvo.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
});


/* ---- LINK DOS BOTÕES DE COMPRA ----
   Edite os links abaixo para apontar para seu WhatsApp, Pix, ou checkout.
   Formato WhatsApp: https://wa.me/55SEUNUMERO?text=MENSAGEM
   ---------------------------------------- */
var LINK_BASICO  = 'https://wa.me/5500000000000?text=Quero%20o%20plano%20B%C3%A1sico%20do%20DFL%202026';
var LINK_PREMIUM = 'https://wa.me/5500000000000?text=Quero%20o%20plano%20Premium%20do%20DFL%202026';

document.addEventListener('DOMContentLoaded', function () {
  var btnBasico  = document.querySelectorAll('.js-btn-basico');
  var btnPremium = document.querySelectorAll('.js-btn-premium');

  btnBasico.forEach(function (btn) {
    btn.addEventListener('click', function () {
      window.open(LINK_BASICO, '_blank');
    });
  });

  btnPremium.forEach(function (btn) {
    btn.addEventListener('click', function () {
      window.open(LINK_PREMIUM, '_blank');
    });
  });
});


/* ---- ANIMAÇÃO DE ENTRADA AO ROLAR ---- */
document.addEventListener('DOMContentLoaded', function () {
  var observer = new IntersectionObserver(function (entradas) {
    entradas.forEach(function (entrada) {
      if (entrada.isIntersecting) {
        entrada.target.style.opacity = '1';
        entrada.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.12 });

  var animados = document.querySelectorAll('.animar');
  animados.forEach(function (el) {
    el.style.opacity = '0';
    el.style.transform = 'translateY(28px)';
    el.style.transition = 'opacity 0.55s ease, transform 0.55s ease';
    observer.observe(el);
  });
});
