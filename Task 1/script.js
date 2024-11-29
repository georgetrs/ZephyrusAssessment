const toggle = document.getElementById('darkModeToggle');
if (!toggle) {
    console.error('Button with id "darkModeToggle" not found!');
}

toggle.addEventListener('click', () => {
    console.log('Dark mode toggled!');
    document.body.classList.toggle('dark-mode');
});
