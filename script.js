$("#scrolldown").click(function () {
  $("html, body").animate(
    { scrollTop: $("#projects").offset().top },
    1000,
    "linear"
  );
});

$("#heroNav").click(function () {
  $("html, body").animate(
    { scrollTop: $("#hero").offset().top },
    1000,
    "linear"
  );
});

$("#projectsNav").click(function () {
  $("html, body").animate(
    { scrollTop: $("#projects").offset().top },
    1000,
    "linear"
  );
});

$("#skillsNav").click(function () {
  $("html, body").animate(
    { scrollTop: $("#skills").offset().top },
    1000,
    "linear"
  );
});

$("#contactNav").click(function () {
  $("html, body").animate(
    { scrollTop: $("#contact").offset().top },
    1000,
    "linear"
  );
});
