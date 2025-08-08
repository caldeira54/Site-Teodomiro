
let todasAsRegras = [];

async function carregarRegras() {
  const res = await fetch("regras.json");
  todasAsRegras = await res.json();
  exibirRegras(todasAsRegras);
}

function exibirRegras(regras) {
  const container = document.getElementById("regras-container");
  container.innerHTML = "";

  regras.forEach((regra, index) => {
    const div = document.createElement("div");
    div.className = "regra";

    const precisaExpandir = regra.conteudo.length > 150;
    const textoCortado = regra.conteudo.substring(0, 150);

    div.innerHTML = `
      <h2>${regra.titulo}</h2>
      <p id="texto-${index}">${textoCortado}${precisaExpandir ? "..." : ""}</p>
      ${precisaExpandir ? `<button onclick="toggleTexto(${index})" id="btn-${index}">Ler mais</button>` : ""}
    `;

    container.appendChild(div);
  });
}

function toggleTexto(index) {
  const texto = document.getElementById(`texto-${index}`);
  const botao = document.getElementById(`btn-${index}`);
  const regraCompleta = todasAsRegras[index].conteudo;

  if (botao.innerText === "Ler mais") {
    texto.innerText = regraCompleta;
    botao.innerText = "Ler menos";
  } else {
    texto.innerText = regraCompleta.substring(0, 150) + "...";
    botao.innerText = "Ler mais";
  }
}

function filtrarRegras() {
  const termo = document.getElementById("busca").value.toLowerCase();
  const filtradas = todasAsRegras.filter(r =>
    r.titulo.toLowerCase().includes(termo) ||
    r.conteudo.toLowerCase().includes(termo)
  );
  exibirRegras(filtradas);
}

window.onload = carregarRegras;
