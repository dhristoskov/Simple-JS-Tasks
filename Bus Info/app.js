function solve() {

    const info = document.getElementsByClassName('info')[0];
    const depBtn = document.getElementById('depart');
    const arrBtn = document.getElementById('arrive');
    let currentID = 'depot';
    let currentName;
    
    function depart() {
        fetch(`https://judgetests.firebaseio.com/schedule/${currentID}.json`)
            .then(handleError)
            .then(res => res.json())
            .then(departSuccess)
            .catch((e) => {
                info.textContent = 'Wrong ID!';
            });
            
    }

    function arrive() {

        info.textContent = `Arriving at ${currentName}.`;
        depBtn.disabled = false;
        arrBtn.disabled = true;
    }

    function departSuccess(data){
        const {name, next} = data;
        currentID = next;  
        currentName = name;
         
        depBtn.disabled = true;
        arrBtn.disabled = false;
        info.textContent = `Next stop is ${currentName}`;
    }

    function handleError (res){
        if(!res.ok){
            info.textContent = 'Wrong fetched url!';
        }
        return res;
    }
    
    return {
        depart,
        arrive
    };
}

let result = solve();