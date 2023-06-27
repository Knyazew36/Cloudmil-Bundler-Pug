window.addEventListener('DOMContentLoaded', () => {
  const swiper = new Swiper('.preview-slider', {
    loop: true,
    autoplay: {
      delay: 6500,
    },
    speed: 600,
    // slidesPerView: 'auto',
    spaceBetween: 10,
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
});
