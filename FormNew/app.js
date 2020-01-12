function acceptance() {

	const warehouse = document.getElementById('warehouse');
	const companyName = document.getElementById('shippingCompany');
	const productName = document.getElementById('productName');
	const productQuantity = document.getElementById('productQuantity');
	const productScrape = document.getElementById('productScrape');

	let name = companyName.value;
	let product = productName.value;
	let quantity = productQuantity.value;
	let scrape = productScrape.value;

	if(name.length <= 0 || product.length <= 0 
		|| quantity.length <= 0 || scrape.length <= 0){
		alert('Missing data!!!')
	}

	let currentQuantity = Number(quantity) - Number(scrape);
		if (currentQuantity > 0) {
			let toPrint = `${name} ${product} - ${currentQuantity} pieces`;

			let div = document.createElement('div');
			let p = document.createElement('p');
			p.innerHTML = toPrint;
			div.appendChild(p);
		
			let removeBtn = document.createElement('button');
			removeBtn.innerHTML = 'Out of stock';
			removeBtn.setAttribute('type', 'button');
			removeBtn.addEventListener('click', function() {
				div.remove();
			});

			div.appendChild(removeBtn);
			warehouse.appendChild(div);
		}
	
	companyName.value = "";
	productName.value = "";
	productQuantity.value = "";
	productScrape.value = "";
}

function main (){
	const addBtn = document.getElementById('acceptance');

	addBtn.addEventListener('click', acceptance);
}
document.addEventListener('DOMContentLoaded', main);