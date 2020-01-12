function createElement(type, value) {
    let element = document.createElement(type)
    element.innerHTML = value;
    return element;
}

function addItem(list, input) {
    let text = input.value;
    let li = createElement('li', text);
    let a = createElement('a', `[Delete]`)
    a.setAttribute('href', 'javascript:;')

    if(text !== ""){
        list.appendChild(li);
        li.appendChild(a);
    }
}

function main() {
    const itemList = document.getElementById('items');
    const inputText = document.getElementById('newItemText');
    const addButton = document.getElementById('addButton');

    if (itemList === null || inputText === null || addButton === null) {
        throw new Error('Something missing!!!');
    }

    addButton.addEventListener('click', addItem.bind(undefined, itemList, inputText));
}

document.addEventListener('DOMContentLoaded', main);