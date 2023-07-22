import '../styles/style.scss';
import $ from 'jquery';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Fancybox } from '@fancyapps/ui';
import '../../node_modules/@fancyapps/ui/dist/fancybox.css';

import { header } from '../blocks/header/header';
import { preloader } from '../blocks/preloader/preloader';
import { modal } from '../blocks/modal/modal';
import { swiperTop } from '../blocks/swiper-top/swiper-top';
import { swiperBottom } from '../blocks/swiper-bottom/swiper-bottom';
import { banner } from '../blocks/banner/banner';
import { parsleyFunc } from './libs/parsley';
import { goTop } from '../blocks/button-up/button-up';
import { contact } from '../blocks/contact/contact';
import { changeBackgroundPositionOnScroll } from '../blocks/preview/preview';
import { video } from './video';
import { formComponents } from '../blocks/formComponents/formComponents';
import { scrollTo } from './scrollto';
import './countup';

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
  contact();
  changeBackgroundPositionOnScroll();
  video();
  formComponents();
  scrollTo();
});
