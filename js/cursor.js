// Custom cursor
export function initCursor() {
  const cursor = document.getElementById('cursor');
  if (!cursor) return;

  // Disable custom cursor on touch devices
  const isTouchDevice = () => {
    return (('ontouchstart' in window) ||
            (navigator.maxTouchPoints > 0) ||
            (navigator.msMaxTouchPoints > 0));
  };

  if (isTouchDevice()) {
    cursor.style.display = 'none';
    document.body.style.cursor = 'auto';
    return;
  }

  document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX - 5 + 'px';
    cursor.style.top = e.clientY - 5 + 'px';
  });

  document.querySelectorAll('a, button, .skill-tag, .project-card').forEach((el) => {
    el.addEventListener('mouseenter', () => cursor.classList.add('expand'));
    el.addEventListener('mouseleave', () => cursor.classList.remove('expand'));
  });
}
