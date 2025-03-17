export function headerScrollcontroller(){
    const header = document.querySelector("header"); // Selecione o cabeçalho

    let isDown = false;
    let startX;
    let scrollLeft;

    header.addEventListener("mousedown", (e) => {
        isDown = true;
        header.classList.add("active");
        startX = e.pageX - header.offsetLeft;
        scrollLeft = header.scrollLeft;
    });

    header.addEventListener("mouseleave", () => {
        isDown = false;
        header.classList.remove("active");
    });

    header.addEventListener("mouseup", () => {
        isDown = false;
        header.classList.remove("active");
    });

    header.addEventListener("mousemove", (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - header.offsetLeft;
        const walk = (x - startX) * 2; // Velocidade do arrasto
        header.scrollLeft = scrollLeft - walk;
    });
}