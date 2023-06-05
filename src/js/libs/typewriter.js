import Typewriter from 'typewriter-effect/dist/core';
const div = document.querySelector('.preview__box-name');

const typewriter = new Typewriter(div, {
  strings: ['Hello! I’m Helen Cherednichenko'],
  delay: 85,
  autoStart: true,
  loop: true,
});
