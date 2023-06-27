import '../styles/style.scss';
import './libs/swiper.js';
import { header } from '../blocks/header/header'
import { preloader } from '../blocks/preloader/preloader';
import { modal } from '../blocks/modal/modal';


preloader()
window.addEventListener('DOMContentLoaded', () => {
  AOS.init();
  modal()
  header()


  const videoBtn = document.querySelector('.section-about__button');

  if (videoBtn) {
    const video = document.querySelector('#video');


    function pauseVideo() {
      videoBtn.classList.remove('section-about__button_active');
      video.removeAttribute('controls');
    }

    videoBtn.addEventListener('click', () => {
      if (video.paused) {
        playVideo();
      } else {
        video.pause();
        pauseVideo();
      }
    });
  }


  // video.addEventListener('pause', pauseVideo);

  var goTop = function () {
    window.addEventListener('scroll', function () {
      if (window.scrollY > 800) {
        document.querySelector('.go-top').classList.add('show');
      } else {
        document.querySelector('.go-top').classList.remove('show');
      }
    });

    document.querySelector('.go-top').addEventListener('click', function (e) {
      e.preventDefault();
      console.log('asdf');
      var scrollToTop = function () {
        if (window.scrollY !== 0) {
          window.scrollBy(0, -30);
          requestAnimationFrame(scrollToTop);
        }
      };
      scrollToTop();
    });
  };

  goTop();
});


