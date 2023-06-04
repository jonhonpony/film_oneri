var buttonElement = document.querySelector('.button');

function handleClick() {
    buttonElement.classList.add('clicked');
}

buttonElement.addEventListener('click', handleClick);