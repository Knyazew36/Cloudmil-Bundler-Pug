export const modal = () => {
  const btn = document.querySelector('.header__connection');
  const footerBtn = document.querySelector('.button-footer')
  const modal = document.querySelector('.my-modal');
  const close = document.querySelector('.btn-close');
  const overlay = document.querySelector('.overlay');

  btn.addEventListener('click', () => {
    modal.classList.add('my-modal_active');
    document.querySelector('body').classList.add('--hidden');

  });
  footerBtn.addEventListener('click', () => {
    modal.classList.add('my-modal_active');
    document.querySelector('body').classList.add('--hidden');

  });




  close.addEventListener('click', () => {
    modal.classList.remove('my-modal_active');
    document.querySelector('body').classList.remove('--hidden');
  });
  overlay.addEventListener('click', () => {
    modal.classList.remove('my-modal_active');
    document.querySelector('body').classList.remove('--hidden');
  });
}

