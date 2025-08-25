// Lista de alunos
const alunos = [
  { nome: "Ana Souza", cargo: "Líder do Projeto", descricao: "Responsável pela organização e gestão da equipe.", foto: "imagens/aluno1.jpg" },
  { nome: "Bruno Silva", cargo: "Desenvolvedor Front-end", descricao: "Focado em HTML, CSS e JavaScript.", foto: "imagens/aluno2.jpg" },
  { nome: "Carla Mendes", cargo: "Desenvolvedora Back-end", descricao: "Responsável pelo PHP e banco de dados.", foto: "imagens/aluno3.jpg" },
  { nome: "Diego Pereira", cargo: "Designer", descricao: "Criou o layout e identidade visual.", foto: "imagens/aluno4.jpg" },
  { nome: "Fernanda Lima", cargo: "Testes e Qualidade", descricao: "Garantiu o funcionamento correto do site.", foto: "imagens/aluno5.jpg" },
  { nome: "Gabriel Costa", cargo: "Documentação", descricao: "Produziu relatórios e documentação técnica.", foto: "imagens/aluno6.jpg" },
  { nome: "Mariana Oliveira", cargo: "Auxílio Geral", descricao: "Colaborou em várias etapas do projeto.", foto: "imagens/aluno7.jpg" }
];

// Container
const container = document.getElementById("equipe-container");

// Criar cards dinamicamente
alunos.forEach(aluno => {
  const card = document.createElement("div");
  card.classList.add("card");

  card.innerHTML = `
    <img src="${aluno.foto}" alt="${aluno.nome}">
    <h2>${aluno.nome}</h2>
    <h3>${aluno.cargo}</h3>
    <p>${aluno.descricao}</p>
  `;

  container.appendChild(card);
});
