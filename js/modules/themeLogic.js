export function applyTheme(theme) {
    const body = document.body;

    body.classList.remove('theme-light', 'theme-dark', 'theme-sepia');

    if (theme === 'light') return;
    body.classList.add(`theme-${theme}`);
}
