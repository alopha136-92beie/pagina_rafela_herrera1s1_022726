document.addEventListener("DOMContentLoaded", function () {

    const event = document.querySelectorAll(".event");
    const line = document.querySelector(".timeline");

    function animate() {
        const windowHeight = window.innerHeight;
        event.forEach(event => {
            const top = event.getBoundingClientRect().top;
            if (top < windowHeight * 0.85) {
                event.classList.add("show");
            }
        });

        const rect = line.getBoundingClientRect();
        const totalHeight = line.offsetHeight;
        const visible = windowHeight - rect.top;
        const progress = Math.min(Math.max(visible / totalHeight, 0), 1);

        line.style.setProperty("--heigt", progress * 100 + "%");
    }

    window.addEventListener("scroll", animate);
    animate();
});
