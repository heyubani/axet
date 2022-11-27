// Get the video
let video = document.getElementById("video-section");
// Get the button
let btn = document.getElementById("play-btn");
// Pause and play the video, and change the button text
function toggleVideo() {
  if (video.paused) {
    video.play();
    btn.src =
      "https://cdn.glitch.com/a8f831d3-9699-4887-93cc-c3f1e944b75b%2Fe07620bb-34d2-4973-95fa-73eb2571e498.image.png?v=1631860898507";
  } else {
    video.pause();
    btn.src =
      "https://cdn.glitch.com/a8f831d3-9699-4887-93cc-c3f1e944b75b%2Fbe194a0b-4c2e-4492-b4d8-24b6ca9c9862.image.png?v=1631793982048";
  }
}

function toggleMenu() {
  let nav = document.querySelector(".resp_nav");
  let menu = document.querySelector("#menu_icon");
  if (nav.style.display === "block") {
    nav.style.display = "none";
    menu.className = "ri-menu-line ri-2x";
  } else {
    nav.style.display = "block";
    menu.className = "ri-close-fill ri-3x";
  }
}
