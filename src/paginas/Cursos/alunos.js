// Lista de alunos
const alunos = [
  { nome: "João Pedro ", idade: 17, pagina: "Cursos, proposta pedagógicas.", foto: "../../imagens/joaop11.jpg" },
  { nome: "Ariana", idade: 18, pagina: "Cursos, proposta pedagógicas.", foto: "../../imagens/ari1.jpg" },
  { nome: "Jamille ", idade: 18, pagina: "Eventos, seguimentos da educação.", foto: "../../imagens/jamill2.jpg" },
  { nome: "Rhaisa", idade: 18, pagina: "Institucional", foto: "../../imagens/rhaisa.jpg" },
  { nome: "Rafael", idade: 18, pagina: "Depoimentos", foto: "../../imagens/rafa000.jpg" },
  { nome: "Larissa", idade: 17, pagina: "Eventos, seguimentos da educação.", foto: "../../imagens/larissa.jpg" },
  { nome: "Rosielene ", idade: 17, pagina: "Responsável pelas fotos", foto: "../../imagens/rose.jpg" },
  { nome: "Nicolas ", idade: 18, pagina: "Home", foto: "../../imagens/nicolas1.0.jpg" }
];

// Container
const container = document.getElementById("equipe-container");

// Donos da página
const donosPagina = ["João Pedro ", "Ariana"];

// Gerar cards
alunos.forEach((aluno, index) => {
  const card = document.createElement("div");
  card.classList.add("card");
  card.style.animationDelay = `${index * 0.2}s`;

  if (donosPagina.includes(aluno.nome)) {
    card.classList.add("dono");
  }

  card.innerHTML = `
    <img src="${aluno.foto}" alt="${aluno.nome}">
    <h2>${aluno.nome}</h2>
    <p><strong>Idade:</strong> ${aluno.idade} anos</p>
    <p><strong>Página:</strong> ${aluno.pagina}</p>
  `;

  container.appendChild(card);
});

// Ano no rodapé
document.getElementById("year").textContent = new Date().getFullYear();
