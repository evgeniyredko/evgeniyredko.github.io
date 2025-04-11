// import "./typed.js"; // Библиотека для печатания текста
import Header from "./Header.js";
import Hero from "./Hero.js";

// Прелоадер
window.onload = function () {
  document.body.classList.add("loaded_hiding");
  window.setTimeout(function () {
    document.body.classList.add("loaded");
    document.body.classList.remove("loaded_hiding");
  }, 500);
  Hero();
};

// Плавная анимация появления блоков
function onEntry(entry) {
  entry.forEach((change) => {
    if (change.isIntersecting) {
      change.target.classList.add("element-show");
    }
  });
}

// Список блоков на которые повесится анимация
let options = {
  threshold: [0.2],
};
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll(
  "h2:not(.footer__title), .footer, .animation"
);

for (let elm of elements) {
  observer.observe(elm);
}

// Закрытие бургер-меню псле клика на пункт меню
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
