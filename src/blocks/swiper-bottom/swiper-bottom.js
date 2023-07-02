export const swiperBottom = () => {
  const swiper = new Swiper('[data-swiper="bottom"]', {
    loop: true,
    autoplay: {
      delay: 4500,
    },
    speed: 600,
    slidesPerView: 'auto',
  });
};
