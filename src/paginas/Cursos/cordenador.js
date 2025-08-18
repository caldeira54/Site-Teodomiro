// ====== Estado ======
const state = {
  depoimentos: [],
  filtro: {
    busca: "",
    ordem: "newest",
  },
};

// ====== Helpers ======
const $ = (sel, el = document) => el.querySelector(sel);
const $$ = (sel, el = document) => Array.from(el.querySelectorAll(sel));
const fmt = (date) => new Intl.DateTimeFormat("pt-BR", { dateStyle: "medium", timeStyle: "short" }).format(new Date(date));

function uid(){ return Math.random().toString(36).slice(2, 9); }
function save(){ localStorage.setItem("wilson_depo", JSON.stringify(state.depoimentos)); }
function load(){
  const raw = localStorage.getItem("wilson_depo");
  if(raw){
    try { state.depoimentos = JSON.parse(raw); }
    catch { state.depoimentos = []; }
  }
}

// ====== Dados iniciais ======
const seed = [
  {
    id: uid(),
    autor: "Ana Souza",
    relacao: "Aluna do 3º ano",
    texto: "O Wilson sempre esteve disponível para nos ouvir. Graças ao apoio dele consegui organizar meus estudos e melhorar minhas notas.",
    data: Date.now() - 1000 * 60 * 60 * 48,
    foto: "https://i.pravatar.cc/120?img=5",
  },
  {
    id: uid(),
    autor: "Prof. Marcos Lima",
    relacao: "Docente de Matemática",
    texto: "A coordenação do Wilson é humana e eficiente. Ele articula os projetos com clareza e favorece o trabalho em equipe.",
    data: Date.now() - 1000 * 60 * 60 * 120,
    foto: "https://i.pravatar.cc/120?img=3",
  },
  {
    id: uid(),
    autor: "Sueli Andrade",
    relacao: "Mãe de aluno",
    texto: "Sempre que procurei a escola, o Wilson me atendeu com respeito e resolutividade. Me sinto parte do processo educativo.",
    data: Date.now() - 1000 * 60 * 60 * 8,
    foto: "https://i.pravatar.cc/120?img=12",
  },
];

// ====== Render ======
function renderList(){
  const grid = $("#list");
  const { busca, ordem } = state.filtro;

  let items = [...state.depoimentos];

  // busca
  if (busca.trim()){
    const q = busca.toLowerCase();
    items = items.filter(d =>
      d.autor.toLowerCase().includes(q) ||
      d.relacao.toLowerCase().includes(q) ||
      d.texto.toLowerCase().includes(q)
    );
  }

  // ordenação
  const orderMap = {
    newest: (a,b) => b.data - a.data,
    oldest: (a,b) => a.data - b.data,
    longest: (a,b) => b.texto.length - a.texto.length,
    shortest: (a,b) => a.texto.length - b.texto.length,
  };
  items.sort(orderMap[ordem] || orderMap.newest);

  // html
  grid.innerHTML = items.map(item => `
    <article class="card" role="article" aria-label="Depoimento de ${item.autor}">
      <div class="meta">
        <img class="avatar-sm" src="${item.foto || 'https://via.placeholder.com/72'}" alt="Foto de ${item.autor}" />
        <div>
          <div class="who">${item.autor}</div>
          <div class="role">${item.relacao || ''}</div>
        </div>
      </div>
      <p class="text">${escapeHtml(item.texto)}</p>
      <div class="date">${fmt(item.data)}</div>
    </article>
  `).join("");
}

function escapeHtml(s){
  return s.replace(/[&<>\"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
}

// ====== Eventos ======
function setupEvents(){
  $("#openForm").addEventListener("click", () => $("#depoModal").showModal());
  $("#closeModal").addEventListener("click", () => $("#depoModal").close());
  $("#cancelar").addEventListener("click", () => $("#depoModal").close());

  $("#depoForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const fd = new FormData(e.target);
    const autor = (fd.get("autor") || "").toString().trim();
    const relacao = (fd.get("relacao") || "").toString().trim();
    const texto = (fd.get("texto") || "").toString().trim();

    if(!autor || !texto){ return; }

    state.depoimentos.push({ id: uid(), autor, relacao, texto, data: Date.now(), foto: `https://i.pravatar.cc/120?u=${encodeURIComponent(autor)}`});
    save();
    renderList();

    (e.target).reset();
    $("#depoModal").close();
  });

  $("#searchInput").addEventListener("input", (e) => { state.filtro.busca = e.target.value; renderList(); });
  $("#sortSelect").addEventListener("change", (e) => { state.filtro.ordem = e.target.value; renderList(); });

  // tema
  $("#themeToggle").addEventListener("click", () => {
    const root = document.documentElement;
    const isLight = root.classList.toggle("light");
    localStorage.setItem("wilson_theme", isLight ? "light" : "dark");
  });
}

// ====== Boot ======
(function init(){
  document.addEventListener("DOMContentLoaded", () => {
    // ano
    $("#year").textContent = new Date().getFullYear();

    // tema
    const savedTheme = localStorage.getItem("wilson_theme");
    if(savedTheme === "light") document.documentElement.classList.add("light");

    // dados
    load();
    if(state.depoimentos.length === 0){
      state.depoimentos = seed;
      save();
    }

    setupEvents();
    renderList();
  });
})();
