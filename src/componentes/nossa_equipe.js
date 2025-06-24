
document.addEventListener("DOMContentLoaded", () => {
    verificar_componentes();
});

function verificar_componentes() {
    const item = document.getElementsByClassName("item");

    if (item.length === 0) return;

    const informacoes = [
        {
            nome: "André",
            foto: "https://valentereispessali.com.br/wp-content/uploads/2023/04/Como-funciona-o-periodo-de-intersticio-para-professor-substituto.png",
            descricao: "Professor de Matemática, Física e Química"
        },
        {
            nome: "Maria",
            foto: "https://www.publicdomainpictures.net/pictures/320000/velka/background-image.png",
            descricao: "Professora de Português"
        },
        {
            nome: "João",
            foto: "https://www.publicdomainpictures.net/pictures/30000/velka/plain-white-background.jpg",
            descricao: "Professor de História"
        }
    ];

    Array.from(item).forEach(container => {
        informacoes.forEach(info => {
            const div = document.createElement('div');
            div.classList.add('item');

            const h1 = document.createElement('h1');
            h1.textContent = info.nome;

            const img = document.createElement('img');
            img.src = info.foto;
            img.id = 'prof';

            const p = document.createElement('p');
            p.textContent = info.descricao;

            div.appendChild(h1);
            div.appendChild(img);
            div.appendChild(p);

            container.parentElement.appendChild(div);
        });

        container.remove();
    });

    loadShow();
    initNavigation();
}

let active = 3;

function loadShow() {
    let items = document.querySelectorAll('.slider .item');
    if (items.length === 0 || active >= items.length || active < 0) return;

    items.forEach(item => {
        item.style.transform = '';
        item.style.zIndex = '';
        item.style.filter = '';
        item.style.opacity = '';
    });

    items[active].style.transform = `none`;
    items[active].style.zIndex = 1;
    items[active].style.filter = 'none';
    items[active].style.opacity = 1;

    let stt = 0;
    for (let i = active + 1; i < items.length; i++) {
        stt++;
        items[i].style.transform = `translateX(${120 * stt}px) scale(${1 - 0.2 * stt}) perspective(16px) rotateY(-1deg)`;
        items[i].style.zIndex = -stt;
        items[i].style.filter = 'blur(5px)';
        items[i].style.opacity = stt > 2 ? 0 : 0.6;
    }

    stt = 0;
    for (let i = active - 1; i >= 0; i--) {
        stt++;
        items[i].style.transform = `translateX(${-120 * stt}px) scale(${1 - 0.2 * stt}) perspective(16px) rotateY(1deg)`;
        items[i].style.zIndex = -stt;
        items[i].style.filter = 'blur(5px)';
        items[i].style.opacity = stt > 2 ? 0 : 0.6;
    }
}

function initNavigation() {
    document.getElementById("next").addEventListener("click", () => {
        const items = document.querySelectorAll(".slider .item");
        if (active < items.length - 1) {
            active++;
            loadShow();
        }
    });

    document.getElementById("prev").addEventListener("click", () => {
        if (active > 0) {
            active--;
            loadShow();
        }
    });
}
