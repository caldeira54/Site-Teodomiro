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

