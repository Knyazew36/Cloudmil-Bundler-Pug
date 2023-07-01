export const goTop = function () {
  window.addEventListener('scroll', function () {
    if (window.scrollY > 800) {
      document.querySelector('.go-top').classList.add('show');
    } else {
      document.querySelector('.go-top').classList.remove('show');
    }
  });
};
