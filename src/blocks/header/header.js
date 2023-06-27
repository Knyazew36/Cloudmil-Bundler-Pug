
export const header = () => {
  const burger = document.querySelector('.header__burger')
  const navigation = document.querySelector('.navigation')

  burger.addEventListener('click', () => {
    burger.classList.toggle('--active')
    navigation.classList.toggle('--active')
    document.querySelector('body').classList.toggle('--scroll-hidden')
  })

  window.addEventListener('scroll', () => {
    let scrollPosition = document.documentElement.scrollTop;
    const header = document.querySelector('.header');
    if (scrollPosition > 0) {
      header.classList.add('--active');
    } else {
      header.classList.remove('--active');
    }

  });
}