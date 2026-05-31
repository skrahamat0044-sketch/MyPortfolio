var menuIcon = document.querySelector('#menu-icon');
var navLinks = document.querySelector('.nav-links');

menuIcon.onclick = () => {
    navLinks.classList.toggle('active')
}