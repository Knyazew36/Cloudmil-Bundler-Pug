export const goTop = function () {
  const scrollButton = document.querySelector('.go-top');

  window.addEventListener('scroll', function () {
    if (window.pageYOffset > 800) {
      scrollButton.classList.add('show');
    } else {
      scrollButton.classList.remove('show');
    }
  });

  scrollButton.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
};
