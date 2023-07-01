export const changeBackgroundPositionOnScroll = function () {
  const element = document.querySelector('.background-element');
  if (!element) return;
  window.addEventListener('scroll', function () {
    const scrollPosition = window.pageYOffset;
    const backgroundPosition = `50% ${-scrollPosition * 0.5}px`;
    element.style.backgroundPosition = backgroundPosition;
  });
};
