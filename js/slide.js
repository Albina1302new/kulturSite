const images = [
  "./images/vogue-1.jpg",
  "./images/vogue-3.webp",
  "./images/vogue-2.jpg",
];

let current = 1;
function showMain() {
  let prev = (current - 1 + images.length) % images.length;
  let next = (current + 1) % images.length;
  document.getElementById("prevImg").src = images[prev];
  document.getElementById("mainImg").src = images[current];
  document.getElementById("nextImg").src = images[next];
  document.querySelectorAll(".indicator").forEach((el, i) => {
    el.className = i === current ? "indicator active" : "indicator";
  });
}
document.getElementById("prevSlide").onclick = function () {
  current = (current - 1 + images.length) % images.length;
  showMain();
};
document.getElementById("nextSlide").onclick = function () {
  current = (current + 1) % images.length;
  showMain();
};
showMain();
