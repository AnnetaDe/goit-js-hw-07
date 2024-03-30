const inputElement = document.querySelector('#name-input');
const outputElement = document.querySelector('#name-output');
const titleElement = document.querySelector('h1');
inputElement.addEventListener('input', event => {
    const value = event.currentTarget.value;
    if (value === '' || value.trim() === '') {
        outputElement.textContent = 'Anonymous';
    } else {
        outputElement.textContent = value.trim();
    }
    return outputElement;
});


const createForm = document.createElement('form');
createForm.className = 'form';
document.body.insertBefore(createForm, inputElement);
createForm.appendChild(inputElement);
createForm.appendChild(titleElement);
inputElement.className = 'input';
titleElement.className = 'title';
outputElement.className = 'output';

