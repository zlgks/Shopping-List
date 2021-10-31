'use strict';

const section = document.querySelector('.section');
const input = document.querySelector('.footer__input');
const addBtn = document.querySelector('.footer__button');
const main = document.querySelector('.main');
const allDeleteBtn = document.querySelector('.all-delete');

let count = 0;

function allDeleteBtnView() {
    if(main.childElementCount > 0) {
        allDeleteBtn.style.opacity = 1;
        allDeleteBtn.style.cursor = "pointer";
    } else {
        allDeleteBtn.style.opacity = 0;
        allDeleteBtn.style.cursor = "none";

    }
}

function addList() {
    if(input.value == '') {
        return;
    } else {
        
        const item = addItem(input.value);
        main.append(item);

        input.value = '';
        input.focus();
        item.scrollIntoView();
        allDeleteBtnView();
}


function addItem(inputValue) {
    const li = document.createElement('li');
    li.setAttribute('class','main__item');
    li.setAttribute('data-count',`${count}`);
    li.innerHTML = `<span class="main__item__name">
                        ${inputValue}
                    </span>
                    <button class="main__item__delete">
                        <i class="fas fa-trash-alt" data-type="delete" data-count="${count}"></i>
                    </button>`
    count++;
    return li;
    }
}

addBtn.addEventListener('click', () => {
    addList();
})

input.addEventListener('keypress', (e) => {
    if(e.key == 'Enter') {
        addList();
    }
})

section.addEventListener('click', (event)=> {
    const type = event.target.dataset.type;
    switch(type) {
        case 'delete':
            const dataCount = event.target.dataset.count;
            const deleteList = document.querySelector(`.main__item[data-count="${dataCount}"`);
            deleteList.remove();
            allDeleteBtnView();
            break;
        
        case 'all':
            main.innerHTML = '';
            allDeleteBtnView();
    }
    // if(type === 'delete') {
    //     const dataCount = event.target.dataset.count;
    //     const deleteList = document.querySelector(`.main__item[data-count="${dataCount}"`);
    //     deleteList.remove();
    // } else if ()
})