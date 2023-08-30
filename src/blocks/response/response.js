export const response = () => {
  const modal = document.querySelector('.response');
  if (!modal) return;
  const overlay = modal.querySelector('.overlay');
  const close = modal.querySelector('.btn-close');
  const form = document.querySelector('#form-page-contact');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    modal.classList.add('--active');
  });

  overlay.addEventListener('click', () => {
    modalOff();
  });
  close.addEventListener('click', () => {
    modalOff();
  });
  function modalOff() {
    modal.classList.remove('--active');
  }
};
