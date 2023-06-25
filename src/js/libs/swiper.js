window.addEventListener('DOMContentLoaded', () => {
  const swiper = new Swiper('.swiper', {
    loop: true,
    autoplay: {
      delay: 2000,
    },
    slidesPerView: 'auto',
    spaceBetween: 10,
    allowTouchMove: false,
  });
});
