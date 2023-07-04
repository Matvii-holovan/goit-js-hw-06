

let counterValue = 0;

const valueElement = document.querySelector('span#value');

const afterButtonElment = document.querySelector('button[data-action="decrement"]');
const beforButtonElment = document.querySelector('button[data-action="increment"]');

afterButtonElment.addEventListener('click', buttondecrement);
beforButtonElment.addEventListener('click', buttonincrement);


function buttondecrement() {
    counterValue -= 1;
    valueElement.textContent = counterValue;
};

function buttonincrement() {
    counterValue += 1;
    valueElement.textContent = counterValue;
};