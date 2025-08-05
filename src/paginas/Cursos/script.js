// Efeito de digitação
const text = "Bem-vindo à nossa plataforma de cursos!";
let i = 0;
const typingSpeed = 80;

function typeWriter() {
  if (i < text.length) {
    document.getElementById("typing-text").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, typingSpeed);
  }
}
typeWriter();

// Cursor animado
const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', e => {
  cursor.style.left = e.clientX + 'px';
  cursor.style.top = e.clientY + 'px';
});

// Animação ao rolar
const cards = document.querySelectorAll('.course-card');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.animation = 'fadeInUp 1s forwards';
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });

cards.forEach(card => {
  observer.observe(card);
});
