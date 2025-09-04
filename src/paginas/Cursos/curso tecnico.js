const textoElemento = document.getElementById("texto");

const textoCompleto = `
A Escola Estadual Teodomiro Caldeira Leão, localizada em Aricanduva/MG, é referência na formação educacional e profissional da região.

Entre as formações oferecidas, destacam-se:
- O Curso Técnico de Informática, disponível nos turnos matutino e noturno, com foco em preparar o aluno para o mercado de trabalho na área de tecnologia, abrangendo programação, redes, manutenção e suporte técnico.
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
