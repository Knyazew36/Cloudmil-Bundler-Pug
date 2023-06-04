import '../styles/style.scss';
import 'virtual:svg-icons-register';
import 'lazysizes';
import uiAccordion from '../blocks/_ui/ui-accordion/ui-accordion';
import uiDatepicker from '../blocks/_ui/ui-datepicker/ui-datepicker';
import uiTextarea from '../blocks/_ui/ui-textarea/ui-textarea';
import uiTooltip from '../blocks/_ui/ui-tooltip/ui-tooltip';
import gallery from '../blocks/gallery/gallery';
import slider from '../blocks/slider/slider';
import tabs from '../blocks/tabs/tabs';

document.addEventListener('DOMContentLoaded', function () {
  uiAccordion();
  uiDatepicker();
  uiTextarea();
  uiTooltip();
  gallery();
  slider();
  tabs();
});
