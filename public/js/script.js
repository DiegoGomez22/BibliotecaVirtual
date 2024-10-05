// Toggle de las preguntas frecuentes
document.querySelectorAll('.faq-question').forEach(item => {
    item.addEventListener('click', () => {
        const faqAnswer = item.nextElementSibling;
        
        // Si la respuesta está colapsada (altura 0), la expandimos
        if (faqAnswer.style.maxHeight) {
            faqAnswer.style.maxHeight = null;  // Colapsa la respuesta
        } else {
            faqAnswer.style.maxHeight = faqAnswer.scrollHeight + "px";  // Expande la respuesta
        }
    });
});

// Scroll suave a secciones
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetSection = document.querySelector(this.getAttribute('href'));
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Cambia el color de la barra de navegación al hacer scroll
window.addEventListener('scroll', function () {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');  // Añade una clase si la página ha hecho scroll más de 50px
    } else {
        nav.classList.remove('scrolled');  // Remueve la clase si no
    }
});
