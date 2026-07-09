const buscador = document.querySelector(".buscador");
const itemCatalogo = document.querySelectorAll(".itemCatalogo");

if (buscador && itemCatalogo.length > 0) {
    buscador.addEventListener('keydown', (event) => {
        if (event.key === "Enter") {
            const filtro = buscador.value.toLowerCase();

            itemCatalogo.forEach(item => {
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
}

const items = document.querySelectorAll(".itemA");

if (buscador && items.length  > 0) {
    buscador.addEventListener('keydown', (event) => {
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
}