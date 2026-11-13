const video = document.querySelector('video');
const play = document.querySelector('.play');
const videoError = document.querySelector('.video-error');

play.hidden = false;
video.controls = false;

play.addEventListener('click', async () => {
  try {
    await video.play();
    play.hidden = true;
    video.controls = true;
    video.focus({ preventScroll: true });
  } catch {
    videoError.hidden = false;
  }
});
