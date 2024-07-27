'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

// for (let i = 0; i < btnsOpenModal.length; i++)
//   btnsOpenModal[i].addEventListener('click', openModal);
// Same as above!

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

///////////////////////////////////////////////////////////////////

// Selecting elements
console.log(document.documentElement);

console.log(document.head);

console.log(document.body);

const header = document.querySelector('.header');
const allSections = document.querySelectorAll('.section');
console.log(allSections);

document.getElementById('section--1');

document.getElementsByClassName('btn');

const allButtons = document.getElementsByTagName('button');
console.log(allButtons);

// Creating and inserting elements
// .insertAdjacentHTML

const message = document.createElement('div');
message.classList.add('cookie-message');
message.textContent =
  'We use cookies for improved functionality and analytics.';
message.innerHTML =
  'We use cookies for improved functionality and analytics. <button class="btn btn--close-cookie">Okay</button>';

// header.prepend(message);
header.append(message);
// header.before(message);
// header.after(message);

// Deleting elements
document.querySelector('.btn--close-cookie')
  .addEventListener('click', function () {
    // message.parentElement.removeChild(message); // OLD WAY
    message.remove();
  });



  // Styles

  message.style.backgroundColor = '#37383d';
  message.style.width = '120%';
  message.style.height = Number.parseFloat(getComputedStyle(message).height, 10) + 20 + 'px'; // NEW WAY

  console.log(getComputedStyle(message).height);

// document.documentElement.style.setProperty('--color-primary', 'orangered');

  /*
// Attributes
const logo = document.querySelector('.nav__logo');
console.log(logo.alt);
console.log(logo.src);
console.log(logo.className);

logo.alt = 'Beautiful minimalist logo';

// Non-standard
console.log(logo.designer);
// logo.className = 'jonas';

const link = document.querySelector('.nav__link--btn');
link.href = 'https://www.google.com/';
link.target = '_blank';
link.textContent = 'Google';
link.title = 'Search';
console.log(link);

// Data attributes
console.log(logo.dataset.versionNumber);

// Classes
logo.classList.add('c', 'j');
logo.classList.remove('c', 'j');
logo.classList.toggle('c');
logo.classList.contains('c'); // not includes!
logo.classList.replace('c', 'k');
*/

// Scroll Effect (Smooth Scrolling)
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');


btnScrollTo.addEventListener('click', function (e) {
  const s1coords = section1.getBoundingClientRect();
  console.log(s1coords);

  console.log(e.target.getBoundingClientRect());

  console.log('Current scroll (X/Y)', window.pageXOffset, window.pageYOffset);

  console.log(
    'height/width viewport',
    document.documentElement.clientHeight,
    document.documentElement.clientWidth
  ); 

  // Scrolling
  // OLD WAY
  // window.scrollTo(s1coords.left + window.pageXOffset, s1coords.top + window.pageYOffset);
  // window.scrollTo({
  //   left: s1coords.left + window.pageXOffset,
  //   top: s1coords.top + window.pageYOffset,
  //   behavior: 'smooth',
  // });

  // NEW WAY (ONLY WORKS IN NEWER BROWSERS)
  section1.scrollIntoView({ behavior: 'smooth' });
});

// Types of Events and Event Handlers
// const h1 = document.querySelector('h1');

// // CAN ADD MULTIPLE LISTENERS AND REMOVE THEM IF NEEDED
// // h1.addEventListener('mouseenter', function (e) {
// //   alert('addEventListener: Great! You are reading the heading :D');
// // }); 

// // h1.onmouseenter = function (e) {
// //   alert('onmouseenter: Great! You are reading the heading :D')
// // };

// // TO REMOVE A LISTENER
// // WILL SHOW EVENT ONLY ONCE AS IT GOES IN ONCE AND IS THEN REMOVED

// // REMOVES EVENT AFTER THE TIMEOUT IS SET
// const alert1 = function (e) {
//   alert('addEventListener: Great! You are reading the heading :D');

// };

// h1.addEventListener('mouseenter', alert1);

// setTimeout (function () {
//   h1.removeEventListener('mouseenter', alert1);
// }, 3000);

// EVENT PROPAGATION IN PRACTICE

const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);
const randomColor = () =>
  `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)})`;

console.log(randomColor());