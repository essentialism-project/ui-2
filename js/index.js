
/******************** Sign up form ******************/


const inputSelect = document.querySelector('form');
inputSelect.addEventListener('focus', event => {
    event.target.style.borderColor = "#00897B";
    event.preventDefault();
});

