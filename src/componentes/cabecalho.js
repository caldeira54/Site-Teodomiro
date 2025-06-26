document.addEventListener("DOMContentLoaded", verificar_componentes);

function verificar_componentes() {
    const cabecalhos = document.getElementsByClassName('cabecalho');

    if (cabecalhos.length === 0) return;

    // Lista de links
    const links = [
        { texto: 'Home', href: '../../../index.html' },
        { texto: 'Depoimentos', href: '../../paginas/depoimentos/index.html' },
        { texto: 'Galeria', href: '../../paginas/galeria/index.html' },
        { texto: 'Institucional', href: '../../paginas/institucional/index.html' },
        { texto: 'Nossa Equipe', href: '../../paginas/nossa_equipe/index.html' },
        { texto: 'Proposta Pedagógica', href: '../../paginas/proposta_pedagogicas/index.html' },
        { texto: 'Segmentos de Educação', href: '../../paginas/segmentos_da_educacao/index.html' },
        { texto: 'Eventos', href: '../../paginas/eventos/index.html' },
        { texto: 'Regulamentos', href: '../../paginas/regulamentos/index.html' },
        { texto: 'Cursos', href: '../../paginas/cursos/index.html' },
        { texto: 'Projeto de Leitura', href: '../../paginas/projeto_de_leitura/index.html' }
    ];

    // Cria o cabeçalho para cada container
    Array.from(cabecalhos).forEach(container => {
        const nav = document.createElement('nav');
        nav.classList.add('cabecalho');

        links.forEach(link => {
            const a = document.createElement('a');
            a.textContent = link.texto;
            a.href = link.href;
            nav.appendChild(a);
        });

        container.appendChild(nav);
    });
}
