function getCookie(name) {
  var matches = document.cookie.match(
    new RegExp(
      "(?:^|; )" +
        name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1") +
        "=([^;]*)"
    )
  );
  return matches ? decodeURIComponent(matches[1]) : undefined;
}

if (getCookie("theme") == "dark") {
  var theme = document.querySelector("[data-js-theme]");
  theme.classList.add("dark-theme");
  var active = document.querySelector("[data-js-theme-active]");
  active.classList.add("theme__active--dark");
}

class Header {
  selectors = {
    root: "[data-js-header]",
    menu: "[data-js-header-menu]",
    burgerButton: "[data-js-header-burger-button]",

    theme: "[data-js-theme]",
    themeButton: "[data-js-theme-button]",
    themeActive: "[data-js-theme-active]",
  };

  stateClasses = {
    isActive: "is-active",
    isLock: "is-lock",

    darkTheme: "dark-theme",
    activeDark: "theme__active--dark",
  };

  constructor() {
    this.rootElement = document.querySelector(this.selectors.root);
    this.menuElement = this.rootElement.querySelector(this.selectors.menu);
    this.burgerButtonElement = this.rootElement.querySelector(
      this.selectors.burgerButton
    );

    this.themeElement = document.querySelector(this.selectors.theme);
    this.themeButtonElement = this.themeElement.querySelector(
      this.selectors.themeButton
    );
    this.themeActiveElement = this.themeElement.querySelector(
      this.selectors.themeActive
    );

    this.bindEvents();
  }

  onBurgerButtonClick = () => {
    this.burgerButtonElement.classList.toggle(this.stateClasses.isActive);
    this.menuElement.classList.toggle(this.stateClasses.isActive);
    document.documentElement.classList.toggle(this.stateClasses.isLock);
  };

  onThemeButtonClick = () => {
    this.themeElement.classList.toggle(this.stateClasses.darkTheme);
    this.themeActiveElement.classList.toggle(this.stateClasses.activeDark);

    if (this.themeElement.classList.contains(this.stateClasses.darkTheme))
      document.cookie = "theme=dark";
    else document.cookie = "theme=light";
  };

  bindEvents() {
    this.burgerButtonElement.addEventListener(
      "click",
      this.onBurgerButtonClick
    );
    this.themeButtonElement.addEventListener("click", this.onThemeButtonClick);
  }
}

export default Header;
