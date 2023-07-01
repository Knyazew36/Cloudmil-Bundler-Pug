import '../styles/style.scss';
import './libs/swiper.js';
import $ from 'jquery';
import { header } from '../blocks/header/header';
import { preloader } from '../blocks/preloader/preloader';
import { modal } from '../blocks/modal/modal';
import { swiperTop } from '../blocks/swiper-top/swiper-top';
import { swiperBottom } from '../blocks/swiper-bottom/swiper-bottom';
import { banner } from '../blocks/banner/banner';
import { Fancybox } from '@fancyapps/ui';
import '../../node_modules/@fancyapps/ui/dist/fancybox.css';
import { parsleyFunc } from './libs/parsley';
import { goTop } from '../blocks/button-up/button-up';

preloader();
window.addEventListener('DOMContentLoaded', () => {
  AOS.init();
  modal();
  header();
  swiperTop();
  swiperBottom();
  banner();
  parsleyFunc();
  goTop();
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
