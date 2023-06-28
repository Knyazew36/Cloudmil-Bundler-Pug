export const swiperTop = () => {
  const swiper = new Swiper('[data-swiper="top"]', {
    loop: true,
    autoplay: {
      delay: 4500,
    },
    speed: 600,
    allowTouchMove: false,
  });

  swiper.on('slideNextTransitionStart', function () {
    var currentSlide = swiper.slides[swiper.activeIndex];
    var currentTitle = currentSlide.querySelector('.preview__title');
    currentTitle.classList.remove('slider-active');
  });
  swiper.on('slideNextTransitionEnd', function () {
    var currentSlide = swiper.slides[swiper.activeIndex];
    var currentTitle = currentSlide.querySelector('.preview__title');
    currentTitle.classList.add('slider-active');
  });
};


