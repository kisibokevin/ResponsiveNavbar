
const toggleButton = document.getElementsByClassName('toggle-btn')[0];
const navbarLinks = document.getElementsByClassName('links')[0];
const closeMenu = document.querySelectorAll('.nav-link');

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active');
});

closeMenu.forEach(link => {
    link.addEventListener('click', () => {
    navbarLinks.classList.remove('active');
  })
});

