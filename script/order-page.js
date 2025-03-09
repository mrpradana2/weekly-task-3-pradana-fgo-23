const modal = document.getElementById("total-payment");

const button = document.querySelector(
  "main section:nth-child(2) #choose-seat .choosed-chair button"
);

button.addEventListener("click", () => {
  modal.classList.toggle("hidden");
});
