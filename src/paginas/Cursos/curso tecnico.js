// Texto digitado (continua igual ao seu)
const textoElemento = document.getElementById("texto");

const textoCompleto = `
A Escola Estadual Teodomiro Caldeira Leão, localizada em Aricanduva/MG, é referência na formação educacional e profissional da região.

Entre as formações oferecidas, destacam-se:
- O Curso Técnico de Informática, disponível nogut pull turnos noturno, com foco em preparar o aluno para o mercado de trabalho na área de tecnologia, abrangendo programação, redes, manutenção e suporte técnico.
- O EMTI (Ensino Médio em Tempo Integral), no qual os estudantes têm aulas das 7h às 16h05, com 9 horários diários, cada um com duração de 50 minutos. Essa estrutura permite maior aprofundamento nos conteúdos e integração entre disciplinas.

Esse modelo de ensino integral amplia a carga horária, oferecendo não apenas as disciplinas regulares, mas também oficinas, projetos interdisciplinares, atividades culturais e esportivas, fortalecendo as competências técnicas e humanas.

Nosso objetivo é proporcionar um ensino de qualidade, incentivando o pensamento crítico, a criatividade e a preparação para o mundo do trabalho e para a vida.
`;

let i = 0;
function digitarTexto() {
  if (i < textoCompleto.length) {
    textoElemento.textContent += textoCompleto.charAt(i);
    i++;
    setTimeout(digitarTexto, 1);
  }
}
digitarTexto();

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
