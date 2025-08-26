// Lista de alunos
const alunos = [
  { nome: "Ana Souza", idade: 20, pagina: "Página Inicial", foto: "../../imagens/img.11jp.jpg" },
  { nome: "Bruno Silva", idade: 22, pagina: "Página de Produtos", foto: "imagens/aluno2.jpg" },
  { nome: "Carla Mendes", idade: 21, pagina: "Página de Clientes", foto: "imagens/aluno3.jpg" },
  { nome: "Diego Pereira", idade: 23, pagina: "Página de Contato", foto: "imagens/aluno4.jpg" },
  { nome: "Fernanda Lima", idade: 20, pagina: "Página de Cadastro", foto: "imagens/aluno5.jpg" },
  { nome: "Gabriel Costa", idade: 22, pagina: "Página de Histórico", foto: "imagens/aluno6.jpg" },
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
