const buscador = document.querySelector(".buscador");
const items = document.querySelectorAll(".item");

buscador.addEventListener('keydown', () => {
    if (event.key === "Enter") {
        const filtro = buscador.value.toLowerCase();

        items.forEach(item => {
        const texto = item.textContent.toLowerCase();

        if (texto.includes(filtro)) {
            item.style.display = ''; 
        }

        else {
            item.style.display = 'none'; 
        }

        });
    }
});