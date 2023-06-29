export const preloader = () => {
  window.addEventListener('load', () => {
    document.querySelector('.preloader').classList.add('--preloader');
    document.querySelector('body').style.opacity = 1;
  });
};
