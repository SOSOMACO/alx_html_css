document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger-menu');
    const nav = document.querySelector('.navbar');

    hamburger.addEventListener('click', () => {
        nav.classList.toggle('is-open');
    });
});