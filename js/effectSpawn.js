if (history.scrollRestoration) {
    history.scrollRestoration = 'manual';
}

const observerOptions = {
    root: null,     // usa el viewport
    threshold: 0.2  // se activa cuando el 20% de la tarjeta es visible
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

const blogCard = document.querySelectorAll('.itemBlog');
blogCard.forEach(section => observer.observe(section));

const imgSection = document.querySelectorAll('.imgInformation');
imgSection.forEach(imga => observer.observe(imga));

const caract = document.querySelectorAll('.caract');
caract.forEach(card => observer.observe(card));

const sectionPanel = document.querySelector('.sectionPanel');
observer.observe(sectionPanel); 

/* Agrega animacion y cambie la clase para desplegar el menu del nav en pantallas pequeñas */
const panelButton = document.querySelector('.panelButton');
const panel = document.querySelector('.panelNav');
const itemNav = document.querySelectorAll('.itemNavHeader');
const imgMenu = document.querySelector('.imgMenu')

panelButton.addEventListener('click', () => {
    panel.classList.toggle("panelNavActive");

    itemNav.forEach(item => item.classList.toggle("activeMedia"));
    imgMenu.classList.toggle("activeMedia");

});