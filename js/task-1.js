const listElement = document.querySelector('#categories');



console.log(`Number of categories: ${listElement.children.length}`);
listElement.style.listStyle = 'none';

const listElementArray = Array.from(listElement.children);
listElementArray.forEach((item) => {
    console.log(`Category: ${item.firstElementChild.textContent}`);
    console.log(`Elements ${item.lastElementChild.children.length}`)

})

