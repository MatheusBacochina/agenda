const activer = document.querySelector(".show");
const init = document.querySelector(".init");
activer.addEventListener("mouseleave", function () {
  window.resizeTo(100, 100);
});

activer.addEventListener("mouseenter", function () {
  window.resizeTo(1366, 100);
});

init.addEventListener("click", () => {
  const date = new Date();
  const hours = date.getHours() * 60;
  const min = date.getMinutes();
  const acc = [];
  const h = [0.3, 1, 5, 7, 9];
  for (let i = 0; i < h.length; i++) {
    let v = h[i] * 60 + (hours + min);

    const day = 60 * 24;
    if (v / day < 1) {
    }

    console.log((v / 60), day);
  }
});
