document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("form-depoimento");
    const nomeInput = document.getElementById("nome");
    const textoInput = document.getElementById("texto");
    const container = document.querySelector(".depoimentos");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

prev.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').prepend(items[items.length - 1]) // here the length of items = 6
})

        const nome = nomeInput.value.trim();
        const texto = textoInput.value.trim();

        if (nome && texto) {
            const novoCard = document.createElement("div");
            novoCard.classList.add("card");

            novoCard.innerHTML = `
        <img src="https://via.placeholder.com/80" alt="Foto de ${nome}">
        <h3>${nome}</h3>
        <p>“${texto}”</p>
        <button class="btn-ver">Ver depoimento completo</button>
      `;

            container.appendChild(novoCard);

            nomeInput.value = "";
            textoInput.value = "";
        } else {
            alert("Por favor, preencha todos os campos.");
        }
    });
});
