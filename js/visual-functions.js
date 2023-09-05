const imgContainer = document.getElementById('images-container');
const txtContainer = document.getElementById('texts-container');

function changeBackground(color){
	document.body.style.background = color;

}

// tout est en pixels
function addImage(file, top, left, width){
	let figure = document.createElement('figure');
	let img = document.createElement('img');
	img.src = file;
	figure.appendChild(img);
	figure.style.top = top + "px";
	figure.style.left = left + "px";
	figure.style.width = width + "px";

	imgContainer.appendChild(figure);
	
}

function addText(text, fontsize, top, left, color){
	let p = document.createElement('p');
	p.innerHTML = text;
	p.style.top = top + "px";
	p.style.left = left + "px";
	p.style.fontSize = fontsize + "px";
	p.style.color = color;

	txtContainer.appendChild(p);
}

function messyEffect(elements, min, max){
	for(let a=0; a<elements.length; a++){
		let el = document.querySelectorAll(elements[a]);
		for(let i=0; i<el.length; i++){
			let rotation = random(min, max);
			el[i].style.transform = "rotate("+rotation+"deg)";
		}
	}
}

