// Lista de alunos
const alunos = [
  { nome: "João Pedro ", idade: 17, pagina: "Cursos,proposta pedagogicas.", foto: "../../imagens/joaop11.JPG" },
  { nome: "Jamille ", idade: 18, pagina: "Eventos, seguimentos da educação.", foto: "../../imagens/jamill2.JPG" },
  { nome: "Ariana", idade: 18, pagina: "Cursos,proposta pedagogicas.", foto: "../../imagens/ari1.jpg" },
  { nome: "Rhaisa", idade: 18, pagina: "Institucional", foto: "../../imagens/rhaisa.jpg" },
  { nome: "Larissa", idade: 17, pagina: "Eventos, seguimentos da educação.", foto: "../../imagens/larissa.jpg" },
  { nome: "Rosielene ", idade: 17, pagina: "rsponsavel pelas fotos", foto: "../../imagens/rose.jpg" },
  { nome: "Mariana Oliveira", idade: 21, pagina: "Página de Pesquisa", foto: "imagens/aluno7.jpg" }
 
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
