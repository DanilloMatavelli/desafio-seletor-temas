export function applyTheme(theme) {
    const body = document.body;

    // Remove classes de tema anteriores
    body.classList.remove('theme-light', 'theme-dark', 'theme-sepia');

    // Adiciona nova classe
    if (theme === 'light') return; // Tema padrão, sem classe
    body.classList.add(`theme-${theme}`);
}
