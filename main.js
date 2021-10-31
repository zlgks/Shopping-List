'use strict';

// const input = document.querySelector('.input');
// const button = document.querySelector('.button');
// const main = document.querySelector('.main');

// button.addEventListener("click", (event) => {
//     const target = event.target.parentNode;
//     const value = input.value;
//     if(event.target !== button) {
//         addList(value);
//         input.value = null;
//     }
// })

// input.addEventListener("keypress", (event) => {
//     const value = input.value;
//     if(event.key == 'Enter'){
//         addList(value);
//         console.log(input.value)
//         input.value = null
//     }
// })

// main.addEventListener("click", (event) => {
//     if(event.target.dataset.delate == 'trash') {
//         const list = event.target.parentNode;
//         list.remove();
//     }
// })


// function addList(input) {
//     const list = document.createElement('list');
//     const span = document.createElement('span');
//     const trash = document.createElement('i');
//     list.setAttribute('class', 'list');
//     span.setAttribute('class', 'list__value');
//     span.textContent = input;
//     trash.setAttribute('class', 'fas fa-trash-alt');
//     trash.setAttribute('data-delate', 'trash');
//     main.append(list);
//     list.append(span);
//     list.append(trash);

// }



const input = document.querySelector('.footer__input');
const addBtn = document.querySelector('.footer__button');
const main = document.querySelector('.main');

function addItem(inputValue) {
    if(inputValue == '') {
        return;
    } else {
    const li = document.createElement('li');
    li.setAttribute('class','main__item');
    const span = document.createElement('span');
    span.setAttribute('class','main__item__name')
    const btn = document.createElement('button');
    btn.setAttribute('class','main__item__delete');

    span.textContent = inputValue;
    btn.innerHTML = `<i class="fas fa-trash-alt"></i>`


    li.append(span);
    li.append(btn)
    main.append(li);

    input.value = '';
    input.focus();

    li.scrollIntoView();

    // return li;

    }
}

addBtn.addEventListener('click', () => {
    addItem(input.value);
    
})

input.addEventListener('keypress', (e) => {
    if(e.key == 'Enter') {
        addItem(input.value);
    }
})

main.addEventListener('click', (event) => {
    if(event.target.tagName == 'I') {
        const target = event.target.parentNode;
        target.parentNode.remove();
    } else if(event.target.tagName == 'BUTTON'){
        event.target.parentNode.remove();
    }
})