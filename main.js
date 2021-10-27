'use strict';

const input = document.querySelector('.input');
const button = document.querySelector('.button');
const main = document.querySelector('.main');

button.addEventListener("click", (event) => {
    const target = event.target.parentNode;
    const value = input.value;
    if(event.target !== button) {
        addList(value);
        input.value = null;
    }
})

input.addEventListener("keypress", (event) => {
    const value = input.value;
    if(event.key == 'Enter'){
        addList(value);
        console.log(input.value)
        input.value = null
    }
})

main.addEventListener("click", (event) => {
    if(event.target.dataset.delate == 'trash') {
        const list = event.target.parentNode;
        list.remove();
    }
})


function addList(input) {
    const list = document.createElement('list');
    const span = document.createElement('span');
    const trash = document.createElement('i');
    list.setAttribute('class', 'list');
    span.setAttribute('class', 'list__value');
    span.textContent = input;
    trash.setAttribute('class', 'fas fa-trash-alt');
    trash.setAttribute('data-delate', 'trash');
    main.append(list);
    list.append(span);
    list.append(trash);

}