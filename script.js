let atual = 0;
function mostrarSlide(index) {
  const slides = document.querySelectorAll('.slider');
  if (index >= slides.length) {
    atual = 0;
  } else if (index < 0) {
    atual = slides.length - 1;
  } else {
    atual = index;
  }

  const offset = -atual * 100;
  document.querySelector('inner').style.transform = `translateX(${offset}%)`;
}
function nextSlide() {
  mostrarSlide(atual + 1);
}
function prevSlide() {
  mostrarSlide(atual - 1);
}
document.querySelectorAll('a.triple').forEach(a => {
  const required = parseInt(a.dataset.required || '3', 10);
  const windowMs = parseInt(a.dataset.window || '1500', 10); // tempo máx. entre cliques
  let count = 0;
  let timer = null;

  const reset = () => {
    count = 0;
    a.removeAttribute('data-remaining');
    if (timer) { clearTimeout(timer); timer = null; }
  };

  const tick = (navigateManuallyIfNeeded = false) => {
    count++;
    const remaining = required - count;

    if (count < required) {
      a.setAttribute('data-remaining', remaining);
      if (timer) clearTimeout(timer);
      timer = setTimeout(reset, windowMs);
      return false; // ainda não pode navegar
    } else {
      // alcançou o número de cliques
      reset();
      if (navigateManuallyIfNeeded) {
        window.location.assign(a.href);
      }
      return true; // permite navegação padrão
    }
  };

  // Clique do mouse
  a.addEventListener('click', (e) => {
    // ignora clique com modificadores ou botão != esquerdo
    if (e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    const allow = tick(false);
    if (!allow) e.preventDefault(); // bloqueia até o 3º clique
    // no 3º clique não chamamos preventDefault => navega normalmente
  });



  // Reset se a página perder foco (opcional)
  window.addEventListener('blur', reset);
});

const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');

hamburger.addEventListener('click', () => {
  menu.classList.toggle('active');
});