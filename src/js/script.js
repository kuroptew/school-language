const hamburgerBtn = document.querySelector(".hamburger")
const closeMenuBtn = document.querySelector(".menu__close")
const menu = document.querySelector(".menu")

hamburgerBtn.addEventListener("click", () => {
  menu.classList.add("menu_active")
})

closeMenuBtn.addEventListener("click", () => {
  menu.classList.remove("menu_active")
})