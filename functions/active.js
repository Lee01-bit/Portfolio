document.getElementById('hamburgerToggle').addEventListener('click', () => {
    const navbar = document.querySelector('.navbar');
    const hamburger = document.querySelector('.hamburger');

    // Toggle active state
    navbar.classList.toggle('active');
    hamburger.classList.toggle('active');
});
