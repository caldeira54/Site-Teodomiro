let atual = 0;
function mostrarSlide(index) {
    const slides = document.querySelectorAll('.slider');
    if (index >= slides.length) {
        atual = 0;
    } else if (index < 0) {
        atual = slides.length - 1;
    } else {
        atual = index;
    }

    const offset = -atual * 100;
    document.querySelector('inner').style.transform = `translateX(${offset}%)`;
}
function nextSlide() {
    mostrarSlide(atual + 1);
}
function prevSlide() {
    mostrarSlide(atual - 1);
}