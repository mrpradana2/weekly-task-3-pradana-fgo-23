const buttonDetails = document.querySelectorAll('.details-btn');
const detailsSection = document.querySelector('.details');
const detailsSection2 = document.querySelector('.details-ticket-used');

buttonDetails.forEach((button, index) => {
    button.addEventListener('click', () => {
        if (index === 0) {
            button.classList.toggle('active');
            detailsSection.classList.toggle('active');
        } else {
            button.classList.toggle('active');
            detailsSection2.classList.toggle('active');
        }
    });
});