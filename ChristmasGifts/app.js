function addToSent(li) {
    const sentGifts = document.getElementById('sentGifts');

    let newLi = document.createElement('li');
    newLi.className = 'gift';
    newLi.textContent = li.textContent;
    sentGifts.appendChild(newLi);

    return sentGifts;
}

function addToDiscard(li) {
    const discardedGifts = document.getElementById('discardedGifts');

    let newLi = document.createElement('li');
    newLi.className = 'gift';
    newLi.textContent = li.textContent;
    discardedGifts.appendChild(newLi);

    return discardedGifts;
}


function createElement(input){
   
    let li = document.createElement('li');
    li.className = 'gift';
    li.textContent = input.value;
    let sendButton = document.createElement('button');
    let discardButton = document.createElement('button');
    discardButton.innerHTML = 'Discard'
    sendButton.innerHTML = 'Send';
    sendButton.setAttribute('id', 'sendButton');
    discardButton.setAttribute('id', 'discardButton');

    sendButton.addEventListener('click',function(){

        discardButton.remove();
        sendButton.remove();
        addToSent(li);
        li.remove();
     
        
    },false);

    discardButton.addEventListener('click',function(){

        sendButton.remove();
        discardButton.remove();
        addToDiscard(li);
        li.remove();
        
    },false);
    li.appendChild(sendButton);
    li.appendChild(discardButton);

    return li;
}

function addGift(input, list){
    let li = createElement(input);
    list.appendChild(li);
    input.value = "";

    return list;
}

function main() {

    const giftList = document.getElementById('giftList');
    const input = document.getElementById('input');
    const addButton = document.getElementById('addButton');
    
    addButton.addEventListener('click', addGift.bind(undefined, input, giftList));
    input.addEventListener('keyup', function(e)  {
        if(e.keyCode === 13){
            e.preventDefault();
            document.getElementById('addButton').click();
        }
    });
}
document.addEventListener('DOMContentLoaded', main);

