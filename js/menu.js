/* Agrega animacion y cambie la clase para desplegar el menu del nav en pantallas pequeñas */
const panelButton = document.querySelector('.panelButton');
const panel = document.querySelectorAll('.panelNav');
const itemNav = document.querySelectorAll('.itemNavHeader');
const imgMenu = document.querySelector('.imgMenu')

panelButton.addEventListener('click', () => {
    panel.forEach(item => item.classList.toggle("panelNavActive"));

    itemNav.forEach(item => item.classList.toggle("activeMedia"));
    imgMenu.classList.toggle("activeMedia");

});