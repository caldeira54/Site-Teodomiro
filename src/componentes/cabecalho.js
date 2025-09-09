document.addEventListener("DOMContentLoaded", verificar_componentes);

function verificar_componentes() {
    const cabecalhos = document.getElementsByClassName('cabecalho');

    if (cabecalhos.length === 0) return;

    // Lista de links
    const links = [
        { texto: 'Home', href: '../../../index.html' },
        { texto: 'Depoimentos', href: '../../paginas/depoimentos/index.html' },
        { texto: 'Institucional', href: '../../paginas/institucional/index.html' },
        { texto: 'Nossa Equipe', href: '../../paginas/nossa_equipe/index.html' },
        { texto: 'Proposta Pedagógica', href: '../../paginas/proposta_pedagogicas/index.html' },
        { texto: 'Segmentos de Educação', href: '../../paginas/segmentos_da_educacao/index.html' },
        { texto: 'Eventos', href: '../../paginas/eventos/index.html' },
        { texto: 'Regulamentos', href: '../../paginas/regulamentos/index.html' },
        { texto: 'Cursos', href: '../../paginas/cursos/index.html' }
    ];

    // Cria o cabeçalho para cada container
    Array.from(cabecalhos).forEach(container => {
        const nav = document.createElement('nav');
        nav.classList.add('cabecalho');

        // --- Logo ---
        const logo = document.createElement('img');
        logo.src = "../../../src/imagens/logo.png";
        logo.alt = "Logo";
        logo.classList.add("logo");
        nav.appendChild(logo);

        // --- Botão hambúrguer ---
        const hamburger = document.createElement('button');
        hamburger.classList.add('hamburger');
        hamburger.innerHTML = "☰";
        nav.appendChild(hamburger);

        // --- Container de links ---
        const menu = document.createElement('div');
        menu.classList.add('menu');

        links.forEach(link => {
            const a = document.createElement('a');
            a.textContent = link.texto;
            a.href = link.href;
            menu.appendChild(a);
        });

        nav.appendChild(menu);
        container.appendChild(nav);

        // Evento de clique no hambúrguer
        hamburger.addEventListener('click', () => {
            menu.classList.toggle('active');
        });
    });
}
