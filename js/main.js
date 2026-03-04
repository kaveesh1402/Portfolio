// Main app initialization
import { initCursor } from './cursor.js';
import { initScrollReveal } from './reveal.js';
import { initNavigation } from './navigation.js';

function initApp() {
  initCursor();
  initScrollReveal();
  initNavigation();
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', initApp);
