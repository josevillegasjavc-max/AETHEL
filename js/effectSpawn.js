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

const cita = document.querySelectorAll('.containCita');
cita.forEach(section => observer.observe(section));

const information = document.querySelectorAll('.information');
information.forEach(section => observer.observe(section));

const imgInformation = document.querySelectorAll('.imgInformation');
imgInformation.forEach(img => observer.observe(img));

const titles = document.querySelectorAll('.title');
titles.forEach(title => observer.observe(title));

const caract = document.querySelectorAll('.caract');
caract.forEach(card => observer.observe(card));

const sectionPanel = document.querySelector('.sectionPanel');
observer.observe(sectionPanel); 

const titleSec = document.querySelectorAll('.titleSec');
titleSec.forEach(title => observer.observe(title));

const itemBlog = document.querySelectorAll('.itemBlog');
itemBlog.forEach(item => observer.observe(item));

const button = document.querySelectorAll('.buttonBlog');
button.forEach(button => observer.observe(button));

const ubicaciones = document.querySelectorAll('.ubicacion');
ubicaciones.forEach(section => observer.observe(section));

const catalogo = document.querySelectorAll('.catalogo');
catalogo.forEach(section => observer.observe(section));