// Main app initialization
import { initCursor } from './cursor.js';
import { initScrollReveal } from './reveal.js';
import { initNavigation } from './navigation.js';
import { initMobileMenu } from './mobile-menu.js';

function initApp() {
  initCursor();
  initScrollReveal();
  initNavigation();
  initMobileMenu();
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', initApp);
