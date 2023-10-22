// exo 1
/* const ul1 = document.getElementById('liste1');

 if (ul1) {
    const dernierElement = ul1.lastElementChild;
    if (dernierElement) {
        ul1.insertBefore(dernierElement, ul1.firstElementChild);
    }
}  */
 
// exo 2

/* const modifyContent = document.getElementById('paragraphe1');

modifyContent.innerText = "new text";
modifyContent.style.color = 'red' */

// exo 3 

/*let nextSibling = modifyBro.nextElementSibling;
nextSibling.style.fontSize = '52px'; */

/* const modifyBro = document.getElementById('modifyBro');

const parent = modifyBro.parentElement;

const allP = parent.querySelectorAll('p');

allP.forEach(p => {
    if(p !== modifyBro) {
        p.textContent = 'new text bros !';
    }
}); */


// exo 4 

/* const kid = document.getElementById('kid');
const kidParent = kid.parentElement;

kidParent.style.background = "red"; */

// exo 5

/* const ul1 = document.getElementById('liste2');
const li1 = ul1.children;

ul1.children[0].style.color = "green"; 
ul1.children[0].querySelectorAll('li')[1].style.color = "orange"; // Make the third li (which is nested) orange

li1[1].style.color = "red"; */

// exo 6

/* let elementCss = document.getElementsByClassName('element-classe');

elementCss[0].style.color = 'red';

let attribute = document.querySelector('[data-attribut="valeur"]');

attribute.style.border = '1px solid purple'; */

