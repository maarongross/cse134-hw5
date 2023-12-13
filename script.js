const ratingWidget = document.getElementById('r-widget');
const noJSForm = document.getElementById('no-star-form');
const maxStars = document.getElementById('rating').getAttribute('max');

let star;

noJSForm.remove();

const starContainer = document.createElement('star-container');
ratingWidget.appendChild(starContainer);

for (let i = 0; i < maxStars; i++) {
  star = document.createElement('div');
  star.className = 'star';
  star.setAttribute('value', i);
  star.appendChild(document.createTextNode('★'));
  starContainer.appendChild(star);
}
