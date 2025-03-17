// import "./typed.js"; // Библиотека для печатания текста
import Header from "./Header.js";
import Hero from "./Hero.js";

new Header();
Hero();

// Закрытие бурегер-меню при клике на ссылку
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
