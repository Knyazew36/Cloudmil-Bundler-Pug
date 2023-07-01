export const contact = () => {
  const overlay = document.querySelector('.contact__map-overlay');
  if (!overlay) return;

  overlay.addEventListener('click', () => {
    overlay.classList.add('--hide');
  });
};
