import { disablePageScroll, enablePageScroll } from 'scroll-lock';

export const header = () => {
  const burger = document.querySelector('.header__burger');
  const navigation = document.querySelector('.navigation');
  let isActive = false;

  burger.addEventListener('click', () => {
    if (isActive) {
      burger.classList.remove('--active');
      navigation.classList.remove('--active');
      enablePageScroll(navigation);
      isActive = false;
    } else {
      burger.classList.add('--active');
      navigation.classList.add('--active');
      disablePageScroll(navigation);
      isActive = true;
    }
  });

  window.addEventListener('scroll', () => {
    let scrollPosition = document.documentElement.scrollTop;
    const header = document.querySelector('.header');
    if (scrollPosition > 0) {
      header.classList.add('--active');
    } else {
      header.classList.remove('--active');
    }
  });
};
