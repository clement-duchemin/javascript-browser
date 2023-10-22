//Exo 1

 document.getElementById('form-1').addEventListener('submit', function(e){
    e.preventDefault();
    let texte = document.getElementById('text').value;
     
    localStorage.setItem('texte', texte);
}); 

//Exo 2

document.getElementById('button-2').addEventListener('click', function(e){
    e.preventDefault();
    storedText=localStorage.getItem('texte');
    
    if (storedText) {
        alert("Données stockées : " + storedText);
    } else {
        alert("Aucune donnée n'a été stockée.");
    }
});


//exo 3

document.getElementById('form-3').addEventListener('submit', function(event) {
    event.preventDefault(); 
    
    let userInput = document.getElementById('userInput').value;
    
    if (userInput) {
        setCookie(userInput); 
        document.getElementById('confirmationMessage').textContent = "Les données ont été stockées avec succès!";
    } else {
        document.getElementById('confirmationMessage').textContent = "Veuillez entrer une valeur!";
    }
});

function setCookie(value) {
    document.cookie = "userValue=" + value;
};

//exo 4

document.getElementById('button-4').addEventListener('click', function(e){
    e.preventDefault(); 
    let userValue = getCookie("userValue");
    if (userValue) {
        alert("Les données stockées: " + userValue);
    } else {
        alert("Aucune donnée stockée.");
    }
});


 
 function getCookie(name) {
    let nameEQ = name + "=";
    let ca = document.cookie.split(';');
    for(let i=0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
};


//exo 5

document.getElementById('button-delete-localStorage').addEventListener('click', function(e){
    e.preventDefault();
    //localStorage.removeItem('texte');

    localStorage.clear();
    alert('tout est effacé');
});

//exo 6


document.getElementById('button-delete-cookies').addEventListener('click', function(e){
    e.preventDefault();
    deleteCookie("userValue");
    alert('cookies effacés');
});

function deleteCookie(name) {
    document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
}