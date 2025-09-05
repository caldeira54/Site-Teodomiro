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

        // --- adicionando logo ---
        const logo = document.createElement('img');
        logo.src = "../../../src/imagens/logo.png"; // ajuste o caminho conforme necessário
        logo.alt = "Logo";
        logo.classList.add("logo");
        nav.appendChild(logo);
        // ------------------------

        // adiciona os links
        links.forEach(link => {
            const a = document.createElement('a');
            a.textContent = link.texto;
            a.href = link.href;
            nav.appendChild(a);
        });

        container.appendChild(nav);
    });
}
