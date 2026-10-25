// IMB Official Website Interactive Scripts

document.addEventListener('DOMContentLoaded', () => {
  // Mobile Navigation Toggle
  const menuToggle = document.getElementById('menuToggle');
  const navMenu = document.getElementById('navMenu');

  if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
      navMenu.classList.toggle('open');
      const isOpen = navMenu.classList.contains('open');
      menuToggle.setAttribute('aria-expanded', isOpen);
    });

    // Close menu when clicking link
    navMenu.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
      });
    });
  }

  // Navbar glass opacity on scroll
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.style.background = 'rgba(10, 14, 23, 0.95)';
      navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.4)';
    } else {
      navbar.style.background = 'rgba(10, 14, 23, 0.85)';
      navbar.style.boxShadow = 'none';
    }
  });

  // Lightbox functionality
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxCaption = document.getElementById('lightboxCaption');

  window.openLightbox = function(src, caption) {
    if (lightbox && lightboxImg) {
      lightboxImg.src = src;
      lightboxCaption.textContent = caption || '';
      lightbox.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  };

  window.closeLightbox = function(e) {
    if (e.target === lightbox || e.target.classList.contains('lightbox-close') || e.key === 'Escape') {
      lightbox.classList.remove('active');
      document.body.style.overflow = 'auto';
    }
  };

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lightbox && lightbox.classList.contains('active')) {
      lightbox.classList.remove('active');
      document.body.style.overflow = 'auto';
    }
  });
});
