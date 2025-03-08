const buttonDetails = document.querySelectorAll(".details-btn");
const detailsSection = document.querySelector(".details");
const detailsSection2 = document.querySelector(".details-ticket-used");

buttonDetails.forEach((button, index) => {
  button.addEventListener("click", () => {
    if (index === 0) {
      button.classList.toggle("active");
      detailsSection.classList.toggle("active");
    } else {
      button.classList.toggle("active");
      detailsSection2.classList.toggle("active");
    }
  });
});

const hamburger = document.querySelector("header .hamburger");
const bars = document.querySelectorAll("header .hamburger .bar");
const nav = document.querySelector("header nav");

console.log(bars);

hamburger.addEventListener("click", () => {
  nav.classList.toggle("active");
  bars.forEach((bar) => {
    bar.classList.toggle("active");
  });
});
