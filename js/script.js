$(window).on("load", function () {
  $("#loader").fadeOut(2000);
  $("html,body").fadeIn(2000);
});

let nav = document.querySelector("nav");

window.addEventListener("scroll", function () {
  if (window.pageYOffset > 100) {
    nav.classList.add("bg-dark", "shadow");
  } else {
    nav.classList.remove("bg-dark", "shadow");
  }
});

$("#scrolldown").on("click", function () {
  $("html, body").animate(
    { scrollTop: $("#about").offset().top },
    1000,
    "linear"
  );
});

$("#heroNav").on("click", function () {
  $("html, body").animate(
    { scrollTop: $("#about").offset().top },
    1000,
    "linear"
  );
});

$("#projectsNav").on("click", function () {
  $("html, body").animate(
    { scrollTop: $("#projects").offset().top },
    1000,
    "linear"
  );
});

$("#skillsNav").on("click", function () {
  $("html, body").animate(
    { scrollTop: $("#skills").offset().top },
    1000,
    "linear"
  );
});

$("#contactNav").on("click", function () {
  $("html, body").animate(
    { scrollTop: $("#contact").offset().top },
    1000,
    "linear"
  );
});
