const menu = document.querySelector('.menu'),
      toggle = document.querySelector('.toggle'),
      xclose = document.querySelector('.close'),
      link = document.querySelectorAll('.item a');


toggle.addEventListener('click', () => {
    menu.classList.add('show');
})

xclose.addEventListener('click', closeMenu)
// When we click on each nav__link, we remove the show-menu class
link.forEach(n => n.addEventListener('click', closeMenu))

function closeMenu(){
    menu.classList.remove('show')
}

/* Scroll Reveal */
const sr = ScrollReveal({
    distance: '90px',
    duration: 3000,
})

sr.reveal('.data', {origin: 'top', delay: 400})
sr.reveal('.img', {origin: 'bottom', delay: 600})
sr.reveal('footer', {origin: 'bottom', delay: 800})