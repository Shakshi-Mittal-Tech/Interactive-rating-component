const ratingButtons = document.querySelectorAll('.ratings-num');
const submitBtn = document.getElementById('submit');
const cardContainer = document.querySelector('.card-container');
const thankUcard = document.querySelector('.thank-you-card');
const selectedRatingText = document.querySelector('.selected-rating');

let selectedRating = null;
ratingButtons.forEach(button => {
    button.addEventListener('click', () => {
        ratingButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        selectedRating = button.textContent;
    });
});

submitBtn.addEventListener('click', () => {
    if(selectedRating) {
        selectedRatingText.textContent =`You selected ${selectedRating} out of 5`;
        cardContainer.style.display = 'none';
        thankUcard.style.display = 'block';
    } else {
        alert('Please select a rating before submitting.');
    }
});

thankUcard.style.display = 'none';