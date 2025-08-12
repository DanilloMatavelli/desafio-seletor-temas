import { applyTheme } from './modules/themeLogic.js';
import { activeButton } from './modules/uiUpdater.js';

document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('[data-theme]');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const selectedTheme = button.dataset.theme;
            applyTheme(selectedTheme);
            activeButton(selectedTheme);
        });
    });
});
