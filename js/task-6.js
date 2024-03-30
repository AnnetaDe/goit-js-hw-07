function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}




const controls = document.querySelector('#controls');
const input = document.querySelector('input');
const createBtn = document.querySelector('#create');
const destroyBtn = document.querySelector('#destroy');
const boxes = document.querySelector('#boxes');
let amount;
input.className = 'input-for-task-6';

input.addEventListener('input', () => {
  if (input.value>0 && input.value<100) {
    amount = input.value;
  }

});

function createBoxes(amount) {
  const divs = [];
  for (let i = 0; i < amount; i += 1) {
    const div = document.createElement('div');
    div.style.borderRadius = '5px';
    div.style.width = `${30 + i * 10}px`;
    div.style.height = `${30 + i * 10}px`;
    div.style.backgroundColor = getRandomHexColor(); 
    divs.push(div);
  }
  boxes.append(...divs);
  console.log(`created ${amount} boxes`);
}

function destroyBoxes() {
  console.log("killed all boxes");
  boxes.innerHTML = '';

}
createBtn.addEventListener('click', () => createBoxes(amount));
destroyBtn.addEventListener('click', destroyBoxes);


