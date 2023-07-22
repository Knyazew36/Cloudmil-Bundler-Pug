import { CountUp } from 'countup.js';

const animateDelay = 1800;
const options = {
  separator: ' ',
};

function isElementInViewport(element) {
  const rect = element.getBoundingClientRect();
  const windowHeight =
    window.innerHeight || document.documentElement.clientHeight;
  const windowWidth = window.innerWidth || document.documentElement.clientWidth;
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= windowHeight &&
    rect.right <= windowWidth
  );
}

function animateTargetElements(countupValue) {
  const targetElements = document.querySelectorAll(
    `.number-animate-${countupValue}`
  );
  targetElements.forEach((targetEl) => {
    if (!targetEl.classList.contains('animate-started')) {
      targetEl.classList.add('animate-started');
      setTimeout(() => {
        targetEl.classList.add('fade-up');
      }, animateDelay);
    }
  });
}

function startCountUpOnScroll() {
  const countUpElements = document.querySelectorAll('.countup-element');
  countUpElements.forEach((element) => {
    if (
      !element.classList.contains('countup-started') &&
      isElementInViewport(element)
    ) {
      const countupValue = element.getAttribute('data-countup');
      const endValue = parseFloat(countupValue);
      const suffix = element.getAttribute('data-countup-suffix') || '';
      const prefix = element.getAttribute('data-countup-prefix') || '';
      const separator = element.getAttribute('data-countup-separator') || '';

      if (separator) {
        options.separator = '';
      }

      const countUp = new CountUp(element, endValue, {
        ...options,
        suffix,
        prefix,
      });

      animateTargetElements(countupValue);

      if (!countUp.error) {
        countUp.start();
        element.classList.add('countup-started');
      } else {
        console.error(countUp.error);
      }

      options.separator = ' ';
    }
  });
}

function onDOMContentLoaded() {
  startCountUpOnScroll();
}

window.addEventListener('DOMContentLoaded', onDOMContentLoaded);
window.addEventListener('scroll', startCountUpOnScroll);
