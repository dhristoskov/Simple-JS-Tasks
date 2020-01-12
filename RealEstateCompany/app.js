function searchOffers(building, message) {
    const budget = document.getElementById('familyBudget');
    const apartment = document.getElementById('familyApartmentType');
    const familyName = document.getElementById('familyName');
    const roof = document.querySelector("#roof > h1");

    const data = document.querySelectorAll("#building > div");

    if (Number(budget.value) > 0 && apartment.value !== "" 
        && familyName.value !== "") {
        
          data.forEach(e => {
              let type = e.childNodes[1].innerHTML;
              if(type === apartment.value){

                 let rentPrice = Number(e.childNodes[0].innerHTML);
                 let commission = Number(e.childNodes[2].innerHTML);               
                 let totalPrice = rentPrice + (rentPrice * (commission / 100));

                 if(budget.value >= totalPrice){

                   let agencyProfit = 2 * (rentPrice * (commission / 100));
                   roof.textContent = `Agency profit: ${agencyProfit} lv.`;
                   message.innerHTML = 'Enjoy your new home';

                   let family = document.createElement('p');
                   family.innerHTML = familyName.value;
                   let text = document.createElement('p');
                   text.innerHTML = `live here now`;
                   let btn = document.createElement('button');
                   btn.innerHTML = 'MoveOut';
                   btn.addEventListener('click', function(){
                       e.remove();
                   }) 

                   e.replaceChild(family, e.childNodes[0]);
                   e.replaceChild(text, e.childNodes[1]);
                   e.replaceChild(btn, e.childNodes[2]);

                 }else{
                    message.innerHTML = 'We were unable to find you a home, so sorry';
                 }
              }else{
                message.innerHTML = 'We were unable to find you a home, so sorry';
              }
          })
        }else{
            message.innerHTML = 'Your offer registration went wrong, try again.';
        }

    budget.value = "";
    apartment.value = "";
    familyName.value = "";  
}

function addOffer (building, message) {
    const rent = document.getElementById('apartmentRent');
    const apartment = document.getElementById('apartmentType');
    const commission = document.getElementById('agencyCommission');

    if (Number(rent.value) > 0 && Number(commission.value) >= 0
        && Number(commission.value) <= 100 && apartment.value !== "" 
        && apartment.value.indexOf(':') === -1) {
                   
        let div = document.createElement('div');
        div.setAttribute('class', 'apartment');
        let firstP = document.createElement('p');
        firstP.innerHTML = rent.value;
        let secondP = document.createElement('p');
        secondP.innerHTML = apartment.value;
        let thirdP = document.createElement('p'); 
        thirdP.innerHTML = commission.value;

        div.appendChild(firstP);
        div.appendChild(secondP);
        div.appendChild(thirdP);

        building.appendChild(div);
        message.innerHTML = 'Your offer was created successfully.';
        
        }else{
            message.innerHTML = 'Your offer registration went wrong, try again.';
        }
    rent.value = "";
    apartment.value = "";
    commission.value = "";
}

function realEstateAgency () {
    const addBtn = document.getElementById('addOffer');
    const building = document.getElementById('building');
    const searchBtn = document.getElementById('searchOffer');
    const message = document.getElementById('message');

    addBtn.addEventListener('click', addOffer.bind(undefined, building, message))
    searchBtn.addEventListener('click', searchOffers.bind(undefined, building, message));
}
document.addEventListener('DOMContentLoaded', realEstateAgency);