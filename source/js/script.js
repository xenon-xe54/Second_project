const navMain = document.querySelector('.main-nav');
const navToggle = document.querySelector('.main-nav__toggle');
const form = document.querySelector('form');
const firstName = document.querySelector('[name=tourist-first-name]');
const lastName = document.querySelector('[name=tourist-last-name]');
const phoneNumber = document.querySelector('[name=mobile-number]');
const mail = document.querySelector('[name=email]');
const error = document.querySelector('.error-popup');
const submit = document.querySelector('.review-popup');
const errorButton = document.querySelector('.error-popup__button');
const submitButton = document.querySelector('.review-popup__button');


navMain.classList.remove('main-nav--no-js');
navMain.classList.remove('main-nav--opened');
navMain.classList.add('main-nav--closed');

navToggle.addEventListener('click', function () {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
  }
});




form.addEventListener('submit', function (event) {
  if (!firstName.value || !lastName.value || !phoneNumber.value || !mail.value) {
    if (!firstName.value) { firstName.classList.add('part-form--error'); }
    if (!lastName.value) { lastName.classList.add('part-form--error'); }
    if (!phoneNumber.value) { phoneNumber.classList.add('part-form--error'); }
    if (!mail.value) { mail.classList.add('part-form--error'); }
    event.preventDefault();
    error.classList.remove('popup--hidden');
    error.classList.add('error-popup');
  } else {
    event.preventDefault();
    submit.classList.remove('popup--hidden');
  }
})

errorButton.addEventListener('click', function (event) {
  if (error.classList.contains('popup--hidden')) { }
  else {
    if (firstName.classList.contains('part-form--error')) { firstName.classList.remove('part-form--error') }
    if (lastName.classList.contains('part-form--error')) { lastName.classList.remove('part-form--error') }
    if (phoneNumber.classList.contains('part-form--error')) { phoneNumber.classList.remove('part-form--error') }
    if (mail.classList.contains('part-form--error')) { mail.classList.remove('part-form--error') }
    event.preventDefault();
    error.classList.remove('error-popup');
    error.classList.add('popup--hidden');
  }
})

window.addEventListener('keydown', function (event) {
  if (event.keyCode === 27) {
    if (error.classList.contains('popup--hidden')) { }
    else {
      if (firstName.classList.contains('part-form--error')) { firstName.classList.remove('part-form--error') }
      if (lastName.classList.contains('part-form--error')) { lastName.classList.remove('part-form--error') }
      if (phoneNumber.classList.contains('part-form--error')) { phoneNumber.classList.remove('part-form--error') }
      if (mail.classList.contains('part-form--error')) { mail.classList.remove('part-form--error') }
      event.preventDefault();
      error.classList.remove('error-popup');
      error.classList.add('popup--hidden');
    }
  }
})

submitButton.addEventListener('click', function (event) {
  if (submit.classList.contains('popup--hidden')) { }
  else {
    event.preventDefault();
    submit.classList.add('popup--hidden');
  }
})

window.addEventListener('keydown', function (event) {
  if (event.keyCode === 27) {
    if (submit.classList.contains('popup--hidden')) { }
    else {
      event.preventDefault();
      submit.classList.add('popup--hidden');
    }
  }
})
