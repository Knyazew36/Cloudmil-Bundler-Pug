import { disablePageScroll, enablePageScroll } from 'scroll-lock';
export const modal = () => {
  const modal = document.querySelector('.my-modal');
  const close = document.querySelector('.btn-close');
  const overlay = document.querySelector('.overlay');
  const buttons = document.querySelectorAll('.modal-on');

  const btnResponse = document.querySelector('.modal-response');
  if (buttons.length == 0) return;

  modal.addEventListener('submit', (e) => {
    e.preventDefault();
    modal.classList.add('--response');
    setTimeout(() => {
      modalOff();
    }, 3000);
  });

  buttons.forEach((el) => {
    el.addEventListener('click', () => {
      modalOnn();
    });
  });

  const modalOnn = () => {
    modal.classList.add('my-modal_active');
    disablePageScroll();
  };
  const modalOff = () => {
    modal.classList.remove('my-modal_active');
    enablePageScroll();
    modal.classList.remove('--response');
  };

  close.addEventListener('click', () => {
    modalOff();
  });
  overlay.addEventListener('click', () => {
    modalOff();
  });
};
