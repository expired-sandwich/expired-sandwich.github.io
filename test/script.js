// JavaScript Document
const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const card = document.getElementById('card');

signUpButton.addEventListener('click', () => {
	card.classList.toggle("cardFlip");
});

signInButton.addEventListener('click', () => {
	card.classList.toggle("cardFlip");
});