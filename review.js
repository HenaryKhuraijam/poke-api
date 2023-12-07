/* Review Card */
const reviewCard = (pokeDescription,pokeName) => {
const li = document.createElement('li');

const headLine = document.createElement('h3');
headLine.textContent = pokeName;

const description = document.createElement('input');
description.type ='text';
description.value = pokeDescription;

li.append(headLine, description);
return li;
}



/*Submit of Review part */
const submitReview = document.getElementById('submitReview');

const addReviewHandler = (e) => {
e.preventDefault();
const ul = document.getElementById('lists-review');
const pokeName = document.getElementById('pokeName').value;
const description = document.getElementById('revDiscrp').value;
ul.appendChild(reviewCard(description,pokeName));

};

submitReview.addEventListener('click', addReviewHandler);