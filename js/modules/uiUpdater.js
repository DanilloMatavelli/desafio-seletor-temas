export function activeButton(theme) {
    const buttons = document.querySelectorAll('[data-theme]');
    buttons.forEach(btn => {
        btn.classList.toggle('active', btn.dataset.theme === theme);
    });
}
