// const bar = document.getElementById('bar'),
//       progressVideo = document.getElementById('video-1'),
//       btn = document.getElementById('play-control-btn');
// // const totalLength = bar.getTotalLength();
// let playing = true;

// const playVideo = () => {
//   playing = true;
//   btn.classList.add("playing");
//   progressVideo.play();
// }

// const pauseVideo = () => {
//   playing = false;
//   btn.classList.remove("playing");
//   progressVideo.pause();
// }

// bar.setAttribute('stroke-dasharray', totalLength);
// bar.setAttribute('stroke-dashoffset', totalLength);

// progressVideo.addEventListener("timeupdate", () => {
//   const currentTime = progressVideo.currentTime,
//         duration = progressVideo.duration,
//         calc = totalLength - ( currentTime / duration * totalLength );

//   console.log('totalLength: ', totalLength, ', currentTime: ', currentTime, ', duration: ', duration, 'calc: ', calc);
  
//   bar.setAttribute('stroke-dashoffset', calc);
// });

// progressVideo.addEventListener("ended", () => {
//   pauseVideo();
//   progressVideo.currentTime = 0;
// });

// btn.addEventListener("click", () => playing ? pauseVideo() : playVideo());