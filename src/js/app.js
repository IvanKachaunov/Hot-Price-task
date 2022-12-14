import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready
  let prices = document.querySelectorAll(".price");
  prices.forEach(price => {
    price.classList.add("hot")
    price.innerHTML += ("🔥");
  });
});
