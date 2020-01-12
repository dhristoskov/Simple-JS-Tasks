function main() {
    const loadBtn = document.getElementById('btnLoad');
    const createBtn = document.getElementById('btnCreate');
    const personInp = document.getElementById('person');
    const phoneInp = document.getElementById('phone');
    const phoneBook = document.getElementById('phonebook');
    const url = 'https://phonebook-nakov.firebaseio.com/phonebook.json';

    loadBtn.addEventListener('click', load);
    createBtn.addEventListener('click', create);
    
    function load () {
        phoneBook.innerHTML = '';
        fetch(url)
            .then(res => res.json())
            .then(data => {
                Object.entries(data).forEach(([id, phonebookData]) => {
                    const{person, phone} = phonebookData;
                    let li = document.createElement('li');
                    li.textContent = `name: ${person} - phone: ${phone}`;
                    const delBtn = document.createElement('button');
                    delBtn.innerHTML = 'Delete';
                    delBtn.setAttribute('data-target', id);
                    delBtn.addEventListener('click', removeEntry)
                    li.appendChild(delBtn);                 
                    phoneBook.appendChild(li);
                });           
            })
            .catch(handleError)
    }

    function create () {
        const phone = phoneInp.value;
        const person = personInp.value;

        if(phone.length > 0 && person.length > 0){
            const header = {
                method : 'POST',
                headers: {'Content-type': 'aplication/json'},
                body: JSON.stringify({person, phone})
            }
    
            fetch(url, header)
                .then(() => {
                    phoneInp.value = '';
                    personInp.value = '';
    
                    load();
                })
                .catch(handleError)    
        }     
    }

    function removeEntry () {
        const toDelete = this.getAttribute('data-target'); 

        const header = {
            method: 'DELETE'
        }
        fetch(`https://phonebook-nakov.firebaseio.com/phonebook/${toDelete}.json`, header)
            .then(() => {
                load();
            })
            .catch(handleError)
    }

    function handleError(e) {
        console.log(e);
    }
}
document.addEventListener('DOMContentLoaded', main);