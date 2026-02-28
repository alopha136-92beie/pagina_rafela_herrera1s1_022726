document.addEventListener("DOMContentLoaded", function () {

    const eventos = document.querySelectorAll(".evento");
    const linea = document.querySelector(".timeline");

    function animar() {

        const windowHeight = window.innerHeight;

        eventos.forEach(evento => {
            const top = evento.getBoundingClientRect().top;

            if (top < windowHeight * 0.85) {
                evento.classList.add("mostrar");
            }
        });

        const rect = linea.getBoundingClientRect();
        const totalHeight = linea.offsetHeight;
        const visible = windowHeight - rect.top;
        const progreso = Math.min(Math.max(visible / totalHeight, 0), 1);

        linea.style.setProperty("--altura", progreso * 100 + "%");
    }

    window.addEventListener("scroll", animar);
    animar();
});
