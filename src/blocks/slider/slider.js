import Swiper from 'swiper/bundle';

export default function slider() {
  const swiperSlider = new Swiper('.slider .swiper', {
    loop: true,
    spaceBetween: 100,
    autoplay: true,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
}
