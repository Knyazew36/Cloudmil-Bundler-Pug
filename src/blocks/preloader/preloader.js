export const preloader = () => {
  window.addEventListener('load', () => {
    document.querySelector('.preloader').classList.add('--preloader');
    document.querySelector('.wrapper').style.opacity = 1;
  });
};
