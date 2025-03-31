function Hero() {
  let typedHello = new Typed("#typedHello", {
    // Тут id того блока, в которм будет анимация
    stringsElement: "#typed-hello", // Тут id блока из которого берем строки для анимации
    typeSpeed: 70, // Скорость печати
    startDelay: 500, // Задержка перед стартом анимации
    backSpeed: 50, // Скорость удаления
    loop: false, // Указываем, повторять ли анимацию
    onStringTyped: function () {
      return document.querySelector(".typed-cursor").remove();
    },
  });

  let typedName = new Typed("#typedName", {
    // Тут id того блока, в которм будет анимация
    stringsElement: "#typed-name", // Тут id блока из которого берем строки для анимации
    typeSpeed: 70, // Скорость печати
    startDelay: 1750, // Задержка перед стартом анимации
    loop: false, // Указываем, повторять ли анимацию
    preStringTyped: function () {
      return (document.querySelector(".typed-name").style.opacity = 1);
    },
    onStringTyped: function () {
      return document.querySelector(".typed-cursor").remove();
    },
  });

  let typedDescription = new Typed("#typedDescription", {
    // Тут id того блока, в которм будет анимация
    stringsElement: "#typed-description", // Тут id блока из которого берем строки для анимации
    typeSpeed: 70, // Скорость печати
    startDelay: 4000, // Задержка перед стартом анимации
    backSpeed: 25, // Скорость удаления
    loop: false, // Указываем, повторять ли анимацию
    preStringTyped: function () {
      return (document.querySelector(".typed-description").style.opacity = 1);
    },
    onComplete: function () {
      return (
        document.querySelector(".typed-cursor").remove(),
        (document.querySelector(".button-check").style.opacity = 1)
      );
    },
  });

  //   typeSpeed: 0, // Скорость печати
  //   backSpeed: 0, // Скорость удаления
  //   startDelay: 0, // Задержка перед стартом анимации
  //   backDelay: 500, // Пауза перед удалением
  //   loop: false, // Повтор (true или false)
  //   loopCount: false, // Число повторов, false = бесконечно
  //   showCursor: true, // Отображение курсора
  //   attr: null, // Атрибут
  //   callback: function () {}, // Функция вызываемая после окончания работы плагина
}

export default Hero;
