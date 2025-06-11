document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Formas datu apstrāde
            const formData = new FormData(contactForm);
            const formObject = {};
            formData.forEach((value, key) => {
                formObject[key] = value;
            });
            
            // Šeit var pievienot kodu, kas nosūta datus uz serveri
            console.log('Forma iesniegta:', formObject);
            
            // Notifikācija lietotājam
            alert('Paldies par ziņu! Es ar jums sazināšos tuvākajā laikā.');
            
            // Formas notīīrīšana pēc iesniegšanas
contactForm.reset();
});
}
});

// Turpinājums ar papildu funkcionalitāti
const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.getElementById('nav-menu');

if (menuToggle && navMenu) {
menuToggle.addEventListener('click', function() {
navMenu.classList.toggle('active');
menuToggle.classList.toggle('open');
});
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
anchor.addEventListener('click', function(e) {
e.preventDefault();

text
    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    
    if (targetElement) {
        window.scrollTo({
            top: targetElement.offsetTop - 100,
            behavior: 'smooth'
        });
        
        // Aizvēr izvēlni mobilajā skatā
        if (navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
            menuToggle.classList.remove('open');
        }
    }
});
});

// Pievienojam klausītāju lapas ritināšanai, lai paslēptu izvēlni
window.addEventListener('scroll', function() {
if (navMenu.classList.contains('active')) {
navMenu.classList.remove('active');
menuToggle.classList.remove('open');
}
});

// Animācijas efektu trigeris, kad elements parādās skatā
const animateOnScroll = function() {
const elements = document.querySelectorAll('.animate-on-scroll');

text
elements.forEach(element => {
    const elementPosition = element.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.2;
    
    if (elementPosition < screenPosition) {
        element.classList.add('animated');
    }
});
};

window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);