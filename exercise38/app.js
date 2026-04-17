const toggleButton = document.querySelector('.toggle-button');
const navbar = document.querySelector('.navbar');
const navLinks = document.querySelector('.nav-links');

toggleButton.addEventListener('click', function(){
    navbar.classList.toggle('active');
    navLinks.classList.toggle('active');
})