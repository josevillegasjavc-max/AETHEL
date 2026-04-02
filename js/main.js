if (history.scrollRestoration) {
    history.scrollRestoration = 'manual';
}

const observerOptions = {
    root: null, // usa el viewport
    threshold: 0.2 // se activa cuando el 20% de la tarjeta es visible
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            // Dejamos de observar una vez que ya apareció
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

const infoSection = document.querySelectorAll('.information');
infoSection.forEach(section => observer.observe(section));

const imgSection = document.querySelectorAll('.imgInformation');
imgSection.forEach(imga => observer.observe(imga));

const caract = document.querySelectorAll('.caract');
caract.forEach(card => observer.observe(card));

const sectionPanel = document.querySelector('.sectionPanel');
observer.observe(sectionPanel); 


/* Slider animation */
const buttonN = document.querySelector('.next');
const buttonP = document.querySelector('.prev');
const slider = document.querySelector('.slider');

buttonN.addEventListener('click', () => {
    // 1. Añadimos la transición para que se vea el movimiento
    buttonN.disabled = true;
    slider.style.transition = "transform 0.7s ease-in-out";
    
    // 2. Movemos el slider una posición a la izquierda
    // Usamos el ancho de una tarjeta + el gap (aprox 20.3%)
    slider.style.transform = `translateX(-20.3%)`;

    // 3. Esperamos a que termine la animación (0.7s = 700ms)
    setTimeout(() => {
        // Quitamos la transición para que el reordenamiento sea invisible
        slider.style.transition = "none";
        
        // TOMAMOS LA PRIMERA TARJETA Y LA MANDAMOS AL FINAL
        const firstCard = slider.firstElementChild;
        slider.appendChild(firstCard);
        
        // Reseteamos la posición del slider al inicio instantáneamente
        // Como movimos la tarjeta al final, visualmente parece que no pasó nada
        slider.style.transform = `translateX(0)`;
        buttonN.disabled = false;
    }, 700); 
});

buttonP.addEventListener('click', () => {
    // 1. Antes de mover, pasamos la ÚLTIMA tarjeta al PRINCIPIO
    buttonP.disabled = true;
    const lastCard = slider.lastElementChild;
    slider.prepend(lastCard);
    
    // 2. Movemos el slider instantáneamente a la izquierda (sin que se note)
    slider.style.transition = "none";
    slider.style.transform = `translateX(-20.3%)`;
    
    // 3. Usamos un setTimeout de 1ms para que el navegador registre el cambio
    // y luego animamos hacia el 0
    setTimeout(() => {
        slider.style.transition = "transform 0.7s ease-in-out";
        slider.style.transform = `translateX(0)`;
        setTimeout(() => {
            buttonP.disabled = false;
        }, 700);
    }, 1);
});
