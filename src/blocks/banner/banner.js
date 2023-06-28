import Rellax from 'rellax';

export const banner = () => {
  const banners = document.querySelectorAll('.banner__img')
  const options = {
    speed: -4,
    center: true,
    wrapper: null,
    round: true,
    vertical: true,
    horizontal: false
  }

  banners.forEach((el) => {
    new Rellax(el, options);
  })


}