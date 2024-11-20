// Select theme toggle button
const themeToggle = document.getElementById('themeToggle');

// Check and apply saved theme preference
const savedTheme = localStorage.getItem('theme') || 'light';
document.body.setAttribute('data-theme', savedTheme);
themeToggle.textContent = savedTheme === 'dark' ? '🌞' : '🌙';

// Toggle theme on button click
themeToggle.addEventListener('click', () => {
    const currentTheme = document.body.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';

    document.body.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme); 
    themeToggle.textContent = newTheme === 'dark' ? '🌞' : '🌙';
});

