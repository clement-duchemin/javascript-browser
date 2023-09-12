/* //1

let paragraphe = document.getElementById('monParagraphe');
paragraphe.textContent = "Bonjour, DOM !";
//paragraphe.innerText = "Bonjour, DOM !";

function addTextInside(target, contenu){
    target.innerText = contenu;
}

addTextInside(paragraphe, "hi from function");



//2
let image = document.getElementById('monImage');
image.src = "images/img2.jpg";



//3
let parentDiv = document.getElementById('elementParent');
let button = document.getElementById('myButton');
parentDiv.appendChild(button);

//4
let classCss = document.querySelector('.to-be-removed');
classCss.classList.add('new-one');
classCss.classList.remove('to-be-removed');

//5
const noms = ["Alice", "Bob", "Charlie"];

const liste = document.getElementById("myList");

for (let nom of noms) {
  let li = document.createElement("li");
  li.textContent = nom;
  liste.appendChild(li);
}

//6
let liRemoved = document.getElementById('exo-6-list').getElementsByTagName('li')[1];
liRemoved.remove();



 */