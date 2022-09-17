const activer = document.querySelector(".a");
activer.addEventListener("mouseleave", function () {
  window.resizeTo(100, 100);
});

activer.addEventListener("mouseenter", function () {
  window.resizeTo(1366, 60);
});
