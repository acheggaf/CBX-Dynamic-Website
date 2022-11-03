

var navbar = document.getElementById('navbar');
var linkBarWrapper = document.getElementById('link-bar-wrapper');
var burger = document.getElementById('burgerDiv');
var state = false;

burger.addEventListener('click', () => {
    if(state)
    {
        navbar.classList.remove('active');
        linkBarWrapper.classList.remove('active');
    } else
    {
        navbar.classList.add('active');
        linkBarWrapper.classList.add('active');
    }
    state = !state;
});