const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".nav-links");
const arrow = document.querySelector(".arrow");
const closeMenu = document.querySelector(".close-menu");

hamburger.addEventListener("click", () => {
  menu.style.display = "grid";
  arrow.style.display = "none";
});

closeMenu.addEventListener("click", () => {
  menu.style.display = "none";
  arrow.style.display = "grid";
  location.reload();
});
