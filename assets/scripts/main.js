const button = document.querySelector("#js-menu");
const drawer = document.querySelector(".navbar-container ul");
const content = document.querySelector("#main-content-container");

button.addEventListener("click", (e) => {
  drawer.classList.toggle("active");
  e.stopPropagation();
});
content.addEventListener("click", (e) => {
  drawer.classList.remove("active");
  e.stopPropagation();
});
