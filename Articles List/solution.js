function createArticle() {
	let titleInput = document.getElementById('createTitle');
	let textInput = document.getElementById('createContent');
	let articles = document.getElementById('articles');

	if(titleInput === null || textInput === null || articles === null){
		throw new Error('Fail!!!');
	}
	if (titleInput.value.length == 0 ||titleInput.value === "" 
	|| textInput.value.length == 0 || textInput.value === "") {
		alert("Please Fill All Required Field");
		return false;
	}

	let artical = document.createElement('article');
	let h4 = document.createElement('h4');
	let paragraph = document.createElement('p');


	h4.innerHTML = titleInput.value;
	paragraph.innerHTML = textInput.value;

	artical.appendChild(h4);
	artical.appendChild(paragraph);
	articles.appendChild(artical);

	
	titleInput.value = '';
	textInput.value = '';
	
}
document.addEventListener('DOMContentLoaded', x =>{
	document.getElementById('button').addEventListener('click', createArticle);
})

