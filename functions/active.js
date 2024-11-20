document.querySelectorAll('.navbar a').forEach(link => {
    link.addEventListener('click', () => {
        document.querySelector('.navbar a.active')?.classList.remove('active');
        link.classList.add('active');
    });
});
