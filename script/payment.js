const modal = document.getElementById("modal");
const button = document.querySelector("section:nth-child(2) form button");
const checkPayment = document.querySelector("button.check-payment");
const payLater = document.querySelector("a.pay-later");

button.addEventListener("click", () => {
  modal.classList.toggle("hidden");
});

payLater.addEventListener("click", () => {
  modal.classList.toggle("hidden");
});
