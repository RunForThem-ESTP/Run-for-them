/* RUN FOR THEM ESTP — menu (version mobile + sous-menu « Course 2027 ») */
(function () {
  var burger = document.querySelector(".burger");
  var nav = document.getElementById("navigation");
  var sous = document.querySelectorAll(".nav__item-sous");

  if (burger && nav) {
    burger.addEventListener("click", function () {
      var ouvert = nav.classList.toggle("ouvert");
      burger.setAttribute("aria-expanded", ouvert ? "true" : "false");
      burger.setAttribute("aria-label", ouvert ? "Fermer le menu" : "Ouvrir le menu");
    });
  }

  sous.forEach(function (item) {
    var bouton = item.querySelector(".nav__sous-bouton");
    if (!bouton) return;
    bouton.addEventListener("click", function (e) {
      e.stopPropagation();
      var ouvert = item.classList.toggle("ouvert");
      bouton.setAttribute("aria-expanded", ouvert ? "true" : "false");
    });
  });

  function toutFermer() {
    sous.forEach(function (item) {
      item.classList.remove("ouvert");
      var b = item.querySelector(".nav__sous-bouton");
      if (b) b.setAttribute("aria-expanded", "false");
    });
  }

  document.addEventListener("click", function (e) {
    if (!e.target.closest(".nav__item-sous")) toutFermer();
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      toutFermer();
      if (nav && nav.classList.contains("ouvert")) {
        nav.classList.remove("ouvert");
        burger.setAttribute("aria-expanded", "false");
        burger.focus();
      }
    }
  });
})();
