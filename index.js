/* Review Card */
const reviewCard = (pokeDescription) => {
const li = document.createElement('li');

const headLine = document.createElement('h1');
headLine.textContent ='Hello';

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
const ul = document.getElementById('lists-review')
const description = document.getElementById('revDiscrp').value;
console.log(description);
ul.appendChild(reviewCard(description));

};

submitReview.addEventListener('click', addReviewHandler);