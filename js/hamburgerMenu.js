const x = document.getElementById("myLinks");
const navLink = document.querySelector(".nav-link");
const allMenuLinks = document.querySelectorAll(".nav-link");
const icon = document.getElementById("toggleIcon");
const menu = document.querySelector(".hamburger-container");

function toggleMenu() {
  if (x.style.display === "flex") {
    x.style.display = "none";
    menu.style.display = "none";
    icon.className = "fa fa-bars";
    menu.classList.remove("open");
    icon.style.position = "absolute";
  } else {
    x.style.display = "flex";
    menu.style.display = "flex";
    icon.className = "fa fa-times";
    icon.style.position = "fixed";
    menu.classList.add("open");
  }
}

function closeMenu() {
  x.style.display = "none";
  menu.style.display = "none";
  icon.className = "fa fa-bars";
  menu.classList.remove("open");
  icon.style.position = "absolute";
}

menu.addEventListener("click", closeMenu);

for (let counter = 0; counter < allMenuLinks.length; ++counter) {
  allMenuLinks[counter].addEventListener("click", () => {
    if (menu.classList.contains("open")) {
      menu.classList.remove("open");
    }
  });
}

document.addEventListener("DOMContentLoaded", (event) => {
  if (window.innerWidth < 768) {
    icon.className = "fa fa-bars";
  }
});
