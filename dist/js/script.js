const hamburgerBtn = document.querySelector(".hamburger");
const closeMenuBtn = document.querySelector(".menu__close");
const menu = document.querySelector(".menu");

hamburgerBtn.addEventListener("click", () => {
  menu.classList.add("menu_active");
});

closeMenuBtn.addEventListener("click", () => {
  menu.classList.remove("menu_active");
});

function toSection(nameSection) {
  const section = document.querySelector(`#${nameSection}`);
  const link = document.querySelector(`[href="#${nameSection}"]`);

  link.addEventListener("click", (e) => {
    e.preventDefault();
    section.scrollIntoView({ behavior: "smooth" });
    menu.classList.remove("menu_active");
  });
}

toSection("skills");
toSection("about");
toSection("pricing");
toSection("contacts");

