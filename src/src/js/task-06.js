


const textInpunt = document.querySelector('#validation-input');
const inputLength = Number(textInpunt.dataset.length);

textInpunt.addEventListener('blur', validateInput);

function validateInput() {
    if (textInpunt.value.length === inputLength) {
        textInpunt.classList.remove('invalid');
        textInpunt.classList.add('valid');
    } else {
        textInpunt.classList.add('invalid')
        textInpunt.classList.remove('valid')
    }
}

