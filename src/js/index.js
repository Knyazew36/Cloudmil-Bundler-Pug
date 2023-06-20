import '../styles/style.scss';
import 'virtual:svg-icons-register';
import 'lazysizes';
import uiTextarea from '../blocks/_ui/ui-textarea/ui-textarea';
import gallery from '../blocks/gallery/gallery';
import slider from '../blocks/slider/slider';

import './libs/jquery.min';
import './libs/main';
import './libs/jquery-countTo';
import './libs/jquery-validate';
import './libs/jquery.cookie';
import './libs/jquery.easing';
// import './libs/parallax';
import './libs/bootstrap.min';
// import './libs/imagesloaded.min';
import './libs/jquery.bxslider.min';
import './libs/jquery.magnific-popup.min';
import './libs/owl.carousel.min';
import './libs/parallax';
// import './libs/rev-slider';
// import './libs/wow.min';
// import './libs/animation';
// import '../rev-slider/js/jquery.themepunch.revolution.min';

document.addEventListener('DOMContentLoaded', function () {
  // uiAccordion();
  // uiDatepicker();
  uiTextarea();
  // uiTooltip();
  gallery();
  slider();
  // tabs();
});
