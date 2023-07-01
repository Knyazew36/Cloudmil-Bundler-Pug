export const video = () => {
  const videoBtn = document.querySelector('.section-about__button');
  if (!videoBtn) return;

  var isiOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
  const video = document.querySelector('#video');
  if (isiOS) {
    video.load();
  }

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
    console.info('asdf');
    playVideo();
  });
  video.addEventListener('pause', pauseVideo);
};
