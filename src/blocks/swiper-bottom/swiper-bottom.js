import Swiper from 'swiper';
import { Autoplay } from 'swiper/modules';
export const swiperBottom = () => {
  new Swiper('[data-swiper="bottom"]', {
    modules: [Autoplay],
    loop: true,
    autoplay: {
      delay: 4500,
    },
    speed: 600,
    slidesPerView: 'auto',
  });
};
