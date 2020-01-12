function numberValidation (price) {
    let num = parseFloat(price);
    if(typeof num !== 'number'){
        throw new TypeError ('the price should be a number')
    }
    return num.toFixed(2);
}
function calcSum () {

    var table = document.getElementById('product-list').getElementsByTagName('td');
    let total = 0;
     for (let index = 0; index < table.length; index++) {

        if(table[index].id === 'price'){
         total += parseFloat(table[index].innerHTML);
        }         
     }
     return total.toFixed(2);
}

function createElement(product, price) {
    const productTable = document.getElementById('product-list');
    const currentPrice = document.getElementById('currentPrice');

    if (product.value.length <= 0 || price.value.length <= 0) {
        throw new TypeError('Missing Data!');
    }

    let tr = document.createElement('tr');
    let tdFirst = document.createElement('td');
    tdFirst.innerHTML = product.value;
    tr.appendChild(tdFirst);
    let tdSecond = document.createElement('td');
    tdSecond.innerHTML = numberValidation(price.value);
    tdSecond.setAttribute('id', 'price');
    tr.appendChild(tdSecond);

    productTable.appendChild(tr);
   
    price.value = '';
    product.value = '';

    currentPrice.innerHTML = calcSum();
    return productTable;
}

function main() {

    const addBtn = document.getElementById('addProduct');
    const inputProduct = document.getElementById('product');
    const inputPrice = document.getElementById('price');

    addBtn.addEventListener('click', createElement.bind(undefined, inputProduct, inputPrice));


}
document.addEventListener('DOMContentLoaded', main);
