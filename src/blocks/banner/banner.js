import Rellax from 'rellax';

export const banner = () => {
  const parallax = document.querySelectorAll('.parallax');
  const options = {
    speed: -5,
    center: true,
    wrapper: null,
    round: true,
    vertical: true,
    horizontal: false,
  };

  parallax.forEach((el) => {
    new Rellax(el, options);
  });
};
