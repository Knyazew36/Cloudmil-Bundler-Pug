export const modalDev = () => {
  const modal = document.querySelector('.modal-dev');
  setTimeout(() => {
    modal.style.transform = 'translateX(0%)';
    setTimeout(() => {
      modal.style.transform = 'translateX(100%)';
    }, 6000);
  }, 3000);
};
