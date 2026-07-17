// Set current year in footer
const yearElement = document.getElementById('year');
if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

// Mobile menu toggle
const menuToggle = document.querySelector('.menu-toggle');
const siteNav = document.querySelector('.site-nav');

if (menuToggle && siteNav) {
  menuToggle.addEventListener('click', () => {
    const isOpen = siteNav.classList.toggle('is-open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
  });

  // SECCIÓN MODIFICADA: Cerrar menú y cambiar la barra azul activa
  const navLinks = document.querySelectorAll('.site-nav a');
  
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      // 1. Cierra el menú móvil si estuviera abierto
      siteNav.classList.remove('is-open');
      menuToggle.setAttribute('aria-expanded', 'false');
      
      // 2. Quita la barra azul de todos los enlaces
      navLinks.forEach(item => item.classList.remove('active'));
      
      // 3. Pone la barra azul en el enlace al que le acabas de dar clic
      link.classList.add('active');
    });
  });
}

// Project filter functionality (Corregido para soportar múltiples categorías por tarjeta)
const filterButtons = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

if (filterButtons.length > 0) {
  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      const filter = button.getAttribute('data-filter');

      // Update active button
      filterButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');

      // Filter projects
      projectCards.forEach(card => {
        if (filter === 'all') {
          card.style.display = 'block';
        } else {
          const category = card.getAttribute('data-category') || '';
          // Al usar .split(' ') nos aseguramos de buscar la coincidencia exacta dentro de las clases del proyecto
          const categoriesArray = category.split(' ');
          card.style.display = categoriesArray.includes(filter) ? 'block' : 'none';
        }
      });
    });
  });
}

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (href === '#') return;

    const target = document.querySelector(href);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Arrow navigation in hero
const arrowPrev = document.querySelector('.arrow-prev');
const arrowNext = document.querySelector('.arrow-next');

if (arrowPrev && arrowNext) {
  arrowPrev.addEventListener('click', () => {
    window.scrollBy({ top: -window.innerHeight, behavior: 'smooth' });
  });

  arrowNext.addEventListener('click', () => {
    window.scrollBy({ top: window.innerHeight, behavior: 'smooth' });
  });
}

// Intersection Observer for animations on scroll
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

// Observe all cards for animation
document.querySelectorAll(
  '.experience-card, .stack-category, .project-card, .cert-card'
).forEach(card => {
  card.style.opacity = '0';
  card.style.transform = 'translateY(20px)';
  card.style.transition = 'opacity 600ms ease, transform 600ms ease';
  observer.observe(card);
});