import '../styles/style.scss';
import './libs/swiper.js';
import { header } from '../blocks/header/header';
import { preloader } from '../blocks/preloader/preloader';
import { modal } from '../blocks/modal/modal';
import { swiperTop } from '../blocks/swiper-top/swiper-top';
import { swiperBottom } from '../blocks/swiper-bottom/swiper-bottom';
import { banner } from '../blocks/banner/banner';

preloader();
window.addEventListener('DOMContentLoaded', () => {
  AOS.init();
  modal();
  header();
  swiperTop();
  swiperBottom();
  banner();

  const videoBtn = document.querySelector('.section-about__button');

  if (videoBtn) {
    const video = document.querySelector('#video');
    video.setAttribute('preload', 'true');
    function playVideo() {
      videoBtn.classList.add('section-about__button_active');
      video.setAttribute('controls', true);
      video.play();
    }
    function pauseVideo() {
      videoBtn.classList.remove('section-about__button_active');
      video.removeAttribute('controls');
      video.pause();
    }

    videoBtn.addEventListener('click', () => {
      playVideo();
    });
    video.addEventListener('pause', pauseVideo);
  }
});

// var goTop = function () {
//   window.addEventListener('scroll', function () {
//     if (window.scrollY > 800) {
//       document.querySelector('.go-top').classList.add('show');
//     } else {
//       document.querySelector('.go-top').classList.remove('show');
//     }
//   });

//   document.querySelector('.go-top').addEventListener('click', function (e) {
//     e.preventDefault();
//     console.log('asdf');
//     var scrollToTop = function () {
//       if (window.scrollY !== 0) {
//         window.scrollBy(0, -30);
//         requestAnimationFrame(scrollToTop);
//       }
//     };
//     scrollToTop();
//   });
// };

// goTop();
