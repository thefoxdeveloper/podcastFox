document.addEventListener("DOMContentLoaded", function () {
  const audioPlayer = document.getElementById("audioPlayer");
  const playPauseBtn = document.getElementById("playPauseBtn");
  const seekBar = document.getElementById("seekBar");
  const currentTime = document.getElementById("currentTime");
  const duration = document.getElementById("duration");
  const artwork = document.getElementById("artwork");
  const audioSource = document.getElementById("audioSource");

  playPauseBtn.addEventListener("click", function () {
    if (audioPlayer.paused || audioPlayer.ended) {
      audioPlayer.play();
      playPauseBtn.textContent = "Pause";
    } else {
      audioPlayer.pause();
      playPauseBtn.textContent = "Play";
    }
  });

  audioPlayer.addEventListener("timeupdate", function () {
    const curTime = audioPlayer.currentTime;
    const dur = audioPlayer.duration;

    currentTime.textContent = formatTime(curTime);
    duration.textContent = formatTime(dur);

    const value = (curTime / dur) * 100;
    seekBar.value = value;
  });

  seekBar.addEventListener("input", function () {
    const seekTo = audioPlayer.duration * (seekBar.value / 100);
    audioPlayer.currentTime = seekTo;
  });

  function formatTime(time) {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  }

  function loadEpisode(audioSrc, artworkSrc) {
    audioSource.src = audioSrc; // Update this line to set the 'src' attribute directly on the audio element
    audioPlayer.load();
    artwork.src = artworkSrc;
    playPauseBtn.textContent = "Play";
  }
});
