/* =============================================================
   1.  MOBILE HAMBURGER MENU
   ============================================================= */
document.addEventListener('DOMContentLoaded', () => {

  const navbar       = document.getElementById('navbar');
  const toggleBtn    = document.getElementById('mobileToggle');
  const navLinks     = document.querySelectorAll('.nav-link');

  // --- Open / close the menu ---
  toggleBtn.addEventListener('click', () => {
    navbar.classList.toggle('navbar-mobile');
    toggleBtn.classList.toggle('bi-x');
    // Prevent body scroll while menu is open
    document.body.style.overflow =
      navbar.classList.contains('navbar-mobile') ? 'hidden' : '';
  });

  // --- Close menu when a link is clicked ---
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (navbar.classList.contains('navbar-mobile')) {
        navbar.classList.remove('navbar-mobile');
        toggleBtn.classList.remove('bi-x');
        document.body.style.overflow = '';
      }
    });
  });

  // --- Close menu if the window is resized to desktop ---
  window.addEventListener('resize', () => {
    if (window.innerWidth > 991 && navbar.classList.contains('navbar-mobile')) {
      navbar.classList.remove('navbar-mobile');
      toggleBtn.classList.remove('bi-x');
      document.body.style.overflow = '';
    }
  });


  /* =============================================================
     2.  ACTIVE NAV LINK ON SCROLL
     ============================================================= */
  const sections = document.querySelectorAll('section[id]');

  const setActiveLink = () => {
    const scrollY = window.scrollY;

    sections.forEach(section => {
      const top    = section.offsetTop - 120;
      const height = section.offsetHeight;
      const id     = section.getAttribute('id');
      const link   = document.querySelector(`.nav-link[href="#${id}"]`);

      if (link) {
        if (scrollY >= top && scrollY < top + height) {
          document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
          link.classList.add('active');
        }
      }
    });
  };


  /* =============================================================
     3.  BACK-TO-TOP BUTTON
     ============================================================= */
  const backToTop = document.getElementById('backToTop');

  const toggleBackToTop = () => {
    backToTop.classList.toggle('visible', window.scrollY > 400);
  };

  backToTop.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });


  /* =============================================================
     4.  FOOTER YEAR
     ============================================================= */
  document.getElementById('year').textContent = new Date().getFullYear();


  /* =============================================================
     5.  RUN ON SCROLL
     ============================================================= */
  window.addEventListener('scroll', () => {
    setActiveLink();
    toggleBackToTop();
  });

  // Run once on load
  setActiveLink();
  toggleBackToTop();

});
