// ====== DADOS ======
// Professor 1: Arthur (já fornecido)
const professores = [
  {
    nome: "Arthur Alves Caldeira",
    cargoAtual: "Professor de Informática — Escola Estadual Teodomiro Caldeira Leão (02/2024 – atual)",
    formacao: "Graduado em Sistemas de Informação — Bacharelado — IFMG, Campus São João Evangelista. Conclusão: 12/2023.",
    experiencias: [
      "Escola Estadual Teodomiro Caldeira Leão — Professor de Informática (Ensino Médio) • 02/2024 – atual.",
      "IFMG — Projeto de Pesquisa: Cálculo de Curvas em Estradas • 10/2023 – 02/2024. Atividade: desenvolvimento de interface web para locação de curvas horizontais em projeto geométrico de estradas.",
      "UFMG — Projeto de Pesquisa: Idea Real — ICB • 09/2023 – 02/2024. Atividade: desenvolvimento de um quiz utilizando Bootstrap (front-end) e jQuery (back-end) com banco de dados MySQL.",
      "OneBit Jr. — Assessor de Projetos • 11/2021 – 11/2023. Atividade: desenvolvimento/manutenção de softwares em C# e MySQL, e sites em WordPress."
    ],
    ensino: "Sou professor há dois anos.",
    habilidades: [
      "HTML", "CSS", "JavaScript", "PHP", "React",
      "Java (Desktop)", "React Native",
      "MySQL", "MongoDB", "Git", "GitHub"
    ],
    depoimento: "O conhecimento é a ferramenta mais poderosa que você pode ter — e juntos vamos aprender a usá-la para abrir portas e criar oportunidades.",
    corAvatar: "linear-gradient(135deg,#5ac8fa,#8c7bff)",
    iniciais: "AC",
    foto: "../../imagens/a5.jpeg"
  },

  // Professor 2: Cássio substituindo Maria Souza
  {
    nome: "Cássio Tadeu de Oliveira",
    cargoAtual: "Professor Coordenador — Escola Estadual Teodomiro Caldeira Leão (Aricanduva/MG)",
    formacao: "Engenheiro Civil — Faculdade Pitágoras de Jundiaí (2019). Técnico em Informática — IFMG, Campus São João Evangelista (2010). Pós-graduação em Cálculo Estrutural e Fundações — FACULMINAS (cursando).",
    experiencias: [
      "Munayer Engenharia Integrada — Engenheiro Civil • Capelinha/MG",
      "Prefeitura Municipal de Aricanduva — Engenheiro Civil • Aricanduva/MG",
      "Escola Estadual Teodomiro Caldeira Leão — Professor Coordenador • Aricanduva/MG",
      "Câmara Municipal de Aricanduva — Controlador Interno • Aricanduva/MG",
      "Construtora J & D — Auxiliar de Engenharia Civil • Várzea Paulista/SP",
      "Crystal Informática — Técnico em Informática • Jundiaí/SP",
      "Sifco S/A — Operador de Máquinas Industriais • Jundiaí/SP",
      "Probank S/A — Técnico de Manutenção de Urnas • Jundiaí/SP",
      "Duratex S/A — Ajudante Geral • Jundiaí/SP"
    ],
    ensino: "15 anos de atuação em tecnologia e engenharia, sendo 4 anos dedicados ao ensino.",
    habilidades: [
      "Montagem e manutenção de computadores",
      "Automação comercial",
      "Sistemas de vigilância",
      "Redes e impressoras",
      "Sistemas operacionais",
      "Empreendedorismo",
      "Renderização",
      "Pacote Office",
      "Adobe",
      "Autodesk",
      "CorelDRAW",
      "Revit",
      "Eberick Infinity",
      "SketchUp",
      "Metrologia",
      "Arquitetura e Urbanismo",
      "Licitações e Obras Públicas"
    ],
    depoimento: "Meu objetivo é transformar conhecimento em oportunidades para todos os alunos.Vamos juntos trilhar esse caminho!",
    corAvatar: "linear-gradient(135deg,#ff9f43,#1dd1a1)",
    iniciais: "CO",
    foto: "../../imagens/C25%.png"
  },

  // Professor 3: exemplo complementar (mantido)
  {
    nome: "Carlos Pereira",
    cargoAtual: "Professor de Programação e Dados",
    formacao: "Bacharel em Ciência da Computação.",
    experiencias: [
      "Desenvolvimento de APIs e integrações.",
      "Projetos de análise de dados educacionais."
    ],
    ensino: "Acompanha equipes em projetos de extensão.",
    habilidades: ["Python", "Java", "Banco de Dados", "Git", "Lógica"],
    depoimento: "Passo a passo, do simples ao avançado: você vai se surpreender com o que consegue construir.",
    corAvatar: "linear-gradient(135deg,#8c7bff,#ff6b6b)",
    iniciais: "CP",
    foto: "../../imagens/img.11jp.jpg"
  }
];
// ====== UTIL ======
const $ = (q, ctx = document) => ctx.querySelector(q);
const $$ = (q, ctx = document) => [...ctx.querySelectorAll(q)];

const year = new Date().getFullYear();
$("#year").textContent = year;

// ====== BUSCA ======
const searchInput = $("#searchInput");
const clearSearch = $("#clearSearch");

clearSearch.addEventListener("click", () => {
  searchInput.value = "";
  renderGrid();
});

searchInput.addEventListener("input", () => renderGrid());

// ====== CHIPS DE HABILIDADE ======
const uniqueSkills = [...new Set(professores.flatMap(p => p.habilidades))].sort((a, b) => a.localeCompare(b));
const chipContainer = $("#chipContainer");
let activeChip = null;

function renderChips() {
  chipContainer.innerHTML = "";
  const all = document.createElement("button");
  all.className = "chip active";
  all.textContent = "Todas";
  all.addEventListener("click", () => { activeChip = null; setActiveChip(all); renderGrid(); });
  chipContainer.appendChild(all);

  uniqueSkills.forEach(skill => {
    const chip = document.createElement("button");
    chip.className = "chip";
    chip.textContent = skill;
    chip.addEventListener("click", () => {
      activeChip = (activeChip === skill) ? null : skill;
      setActiveChip(chip);
      renderGrid();
    });
    chipContainer.appendChild(chip);
  });
}
function setActiveChip(btn) {
  $$(".chip", chipContainer).forEach(c => c.classList.remove("active"));
  btn.classList.add("active");
}
renderChips();

// ====== GRID DE CARDS ======
const grid = $("#profGrid");

function matchesSearch(p, term) {
  if (!term) return true;
  const blob = [
    p.nome, p.cargoAtual, p.formacao, p.experiencias.join(" "), p.habilidades.join(" ")
  ].join(" ").toLowerCase();
  return blob.includes(term.toLowerCase());
}
function matchesChip(p) {
  if (!activeChip) return true;
  return p.habilidades.includes(activeChip);
}

function renderGrid() {
  const term = searchInput.value.trim();
  const list = professores.filter(p => matchesSearch(p, term) && matchesChip(p));
  grid.innerHTML = "";

  list.forEach((p, idx) => {
    const card = document.createElement("article");
    card.className = "card";
    card.style.setProperty("--accent", p.corAvatar);

    card.innerHTML = `
      <div class="head">
        <div class="avatar" style=" background:${p.corAvatar};
            background-size:cover; background-position:center;">
            ${p.iniciais}
        </div>
        <div>
          <h4>${p.nome}</h4>
          <p>${p.cargoAtual}</p>
        </div>
      </div>

      <div class="badges">
        ${p.habilidades.slice(0, 5).map(s => `<span class="badge">${s}</span>`).join("")}
        ${p.habilidades.length > 5 ? `<span class="badge">+${p.habilidades.length - 5}</span>` : ""}
      </div>

      <p class="muted">${p.formacao}</p>

      <div class="actions">
        <button class="btn" data-action="vermais" data-id="${idx}">Ver detalhes</button>
      
      </div>
    `;
    grid.appendChild(card);
  });

  //cassio 2
   


  // bind actions
  $$(".btn", grid).forEach(btn => {
    btn.addEventListener("click", (e) => {
      const id = +e.currentTarget.dataset.id;
      const action = e.currentTarget.dataset.action;
      if (action === "vermais") openModal(id);
      if (action === "ouvir") speakDepoimento(id);
    });
  });
}
renderGrid();

// ====== MODAL ======
const modal = $("#profModal");
const closeModal = $("#closeModal");

function openModal(id) {
  const p = professores[id];
  $("#modalAvatar").style.backgroundImage = `url('${p.foto}')`;
  $("#modalName").textContent = p.nome;
  $("#modalRole").textContent = p.cargoAtual;
  $("#modalGrad").textContent = p.formacao;

  const ul = $("#modalExp");
  ul.innerHTML = "";
  p.experiencias.forEach(x => {
    const li = document.createElement("li");
    li.textContent = x;
    ul.appendChild(li);
  });

  $("#modalTeach").textContent = p.ensino || "—";
  const skills = $("#modalSkills");
  skills.innerHTML = p.habilidades.map(s => `<span class="chip">${s}</span>`).join("");
  $("#modalMsg").textContent = p.depoimento;

  if (typeof modal.showModal === "function") modal.showModal();
  else modal.setAttribute("open", "");
}
closeModal.addEventListener("click", () => modal.close());
modal.addEventListener("click", (e) => {
  // fechar clicando fora da caixa
  const rect = $(".modal-card", modal).getBoundingClientRect();
  const clickedOutside = e.clientX < rect.left || e.clientX > rect.right || e.clientY < rect.top || e.clientY > rect.bottom;
  if (clickedOutside) modal.close();
});

// ====== CARROSSEL DE DEPOIMENTOS ======
const carousel = $("#carousel");
const dotsWrap = $("#dots");
let slideIndex = 0;
let timer;

function renderSlides() {
  carousel.querySelectorAll(".slide").forEach(s => s.remove());
  dotsWrap.innerHTML = "";

  professores.forEach((p, i) => {
    const slide = document.createElement("div");
    slide.className = "slide";
    slide.innerHTML = `
      <div class="avatar" style="background:${p.corAvatar}">${p.iniciais}</div>
      <div>
        <blockquote>“${p.depoimento}”</blockquote>
        <cite>— ${p.nome}</cite>
      </div>
    `;
    carousel.appendChild(slide);

    const dot = document.createElement("button");
    dot.className = "dot";
    dot.addEventListener("click", () => goTo(i));
    dotsWrap.appendChild(dot);
  });

  goTo(0);
  startAuto();
}
function goTo(i) {
  slideIndex = i;
  const slides = $$(".slide", carousel);
  slides.forEach(s => s.classList.remove("active"));
  if (slides[i]) slides[i].classList.add("active");
  const dots = $$(".dot", dotsWrap);
  dots.forEach(d => d.classList.remove("active"));
  if (dots[i]) dots[i].classList.add("active");
}
function next() { goTo((slideIndex + 1) % professores.length); }
function prev() { goTo((slideIndex - 1 + professores.length) % professores.length); }

$("#nextBtn").addEventListener("click", () => { next(); restartAuto(); });
$("#prevBtn").addEventListener("click", () => { prev(); restartAuto(); });

function startAuto() {
  stopAuto();
  timer = setInterval(next, 5000);
}
function stopAuto() { if (timer) clearInterval(timer); }
function restartAuto() { stopAuto(); startAuto(); }
carousel.addEventListener("mouseenter", stopAuto);
carousel.addEventListener("mouseleave", startAuto);

renderSlides();




// ====== ACESSIBILIDADE: ESC pra fechar modal ======
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && modal.open) modal.close();
});
