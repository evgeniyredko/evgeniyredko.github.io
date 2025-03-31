// import "./typed.js"; // Библиотека для печатания текста
import Header from "./Header.js";
import Hero from "./Hero.js";

window.onload = function () {
  document.body.classList.add("loaded_hiding");
  window.setTimeout(function () {
    document.body.classList.add("loaded");
    document.body.classList.remove("loaded_hiding");
  }, 500);
  Hero();
};

function onEntry(entry) {
  entry.forEach((change) => {
    if (change.isIntersecting) {
      change.target.classList.add("element-show");
    }
  });
}

let options = {
  threshold: [0.2],
};
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll(
  "li, h1, h2, .footer, .logo, .theme, .burger-button"
);

for (let elm of elements) {
  observer.observe(elm);
}

var menuLinks = document.querySelectorAll(".header__menu .header__menu-link");
menuLinks.forEach(function (link) {
  link.addEventListener("click", function () {
    if (
      document.querySelector(".header__menu").classList.contains("is-active")
    ) {
      document.querySelector(".burger-button").click();
    }
  });
});

new Header();
