

const textOutput = document.querySelector('span#name-output');
const inputElement = document.querySelector('input#name-input');
const defaultName = textOutput.textContent;
inputElement.addEventListener("input", (event) => {
    if (inputElement.value === "") {
        textOutput.textContent = defaultName;
    } else {
        textOutput.textContent = event.currentTarget.value;
    }
});

