$("#scrolldown").click(function () {
  $("html, body").animate(
    { scrollTop: $("#projects").offset().top },
    1000,
    "linear"
  );
});
