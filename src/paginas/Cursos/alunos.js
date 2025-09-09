// Lista de alunos
const alunos = [
  { nome: "João Pedro ", idade: 17, pagina: "Cursos,proposta pedagógicas.", foto: "../../imagens/joaop11.JPG" },
  { nome: "Jamille ", idade: 18, pagina: "Eventos, seguimentos da educação.", foto: "../../imagens/jamill2.JPG" },
  { nome: "Ariana", idade: 18, pagina: "Cursos,proposta pedagogicas.", foto: "../../imagens/ari1.jpg" },
  { nome: "Rhaisa", idade: 18, pagina: "Institucional", foto: "../../imagens/rhaisa.jpg" },
  { nome: "Larissa", idade: 17, pagina: "Eventos, seguimentos da educação.", foto: "../../imagens/larissa.jpg" },
  { nome: "Rosielene ", idade: 17, pagina: "responsável pelas fotos", foto: "../../imagens/rose.jpg" },
  { nome: "Nicolas ", idade: 18, pagina: "Home ", foto: "../../imagens/nicolas1.0.jpg" }

];

// Container
const container = document.getElementById("equipe-container");

// Criar cards dinamicamente com delay
alunos.forEach((aluno, index) => {
  const card = document.createElement("div");
  card.classList.add("card");
  card.style.animationDelay = `${index * 0.2}s`;

  card.innerHTML = `
    <img src="${aluno.foto}" alt="${aluno.nome}">
    <h2>${aluno.nome}</h2>
    <p><strong>Idade:</strong> ${aluno.idade} anos</p>
    <p><strong>Página:</strong> ${aluno.pagina}</p>
  `;

  container.appendChild(card);
});
// Criar botão após entrar na página
function criarBotaoVoltar() {
  const btn = document.createElement("button");
  btn.className = "btn-voltar";
  btn.innerHTML = `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path fill="currentColor" d="M15.5 19a1 1 0 0 1-.7-.3l-7-7a1 1 0 0 1 0-1.4l7-7a1 1 0 0 1 1.4 1.4L10.9 11l5.3 5.3A1 1 0 0 1 15.5 19z"/>
    </svg>
    <span>Voltar</span>
  `;

  btn.addEventListener("click", () => {
    window.location.href = "index.html"; // Página de destino
  });

  document.body.appendChild(btn);

  // Efeito de entrada
  setTimeout(() => btn.classList.add("show"), 200);
}

// Espera 2 segundos após entrar na página para mostrar o botão
window.addEventListener("load", () => {
  setTimeout(criarBotaoVoltar, 2000);
});
