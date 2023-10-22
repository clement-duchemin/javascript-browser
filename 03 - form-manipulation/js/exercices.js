//1

/* function valideForm() {
    let formName = document.getElementById('nom').value;
    let formPrenom = document.getElementById('prenom').value;
    let interest = document.getElementsByName('interet');

    if(formName === '') {
        alert("Veuillez rentrer votre nom");
        return false;
    }

    if(formPrenom === '') {
        alert("Veuillez rentrez votre prénom");
        return false;
    }

    let interestChecked = false;
    for(let i = 0; i < interest.length ; i++) {
        if(interest[i].checked){
            interestChecked = true;
        }
    }

    if(!interestChecked) {
        alert("Veuillez sélectionner au moins un centre d'intérêt.");
        return false;
    }
    return true;
}
 */





//2

/* function recupererDonnees() {
    let nom = document.getElementById('nom').value;
    let sexe = document.querySelector('input[name="sexe"]:checked') ? document.querySelector('input[name="sexe"]:checked').value : '';
    let interets = document.querySelectorAll('input[name="interet"]:checked');
    let interetsArray = [];
    interets.forEach(interet => {
        interetsArray.push(interet.value);
    });

    console.log('Nom:', nom);
    console.log('Sexe:', sexe);
    console.log('Centres d\'intérêt:', interetsArray.join(', '));

    document.getElementById('resultat').innerHTML = 
        'Nom: ' + nom + '<br>' +
        'Sexe: ' + sexe + '<br>' +
        'Centres d\'intérêt: ' + interetsArray.join(', ');
} */



//3

 
/* document.getElementById('menu').addEventListener('change', function() {
    const selection = this.value;
    let newText = '';
  
    switch(selection) {
      case 'option1':
        newText = 'Vous avez choisi l\'option 1';
        break;
      case 'option2':
        newText = 'Vous avez choisi l\'option 2';
        break;
      case 'option3':
        newText = 'Vous avez choisi l\'option 3';
        break;
    }
  
    document.getElementById('texte').value = newText;
  });  */
  
  
  //4
  
         /* let suggestions = ["Apple", "Banana", "Cherry", "Date", "Elderberry", "Fig", "Grape"];
      
        const inputElement = document.getElementById('autocomplete-input');
        const suggestionsContainer = document.getElementById('autocomplete-suggestions');
      
        inputElement.addEventListener('input', () => {
          const query = inputElement.value.toLowerCase();
          suggestionsContainer.innerHTML = ''; 
          suggestions
            .filter(suggestion => suggestion.toLowerCase().includes(query)) 
            .forEach(suggestion => {
              const suggestionElement = document.createElement('div');
              suggestionElement.textContent = suggestion; 
              suggestionElement.addEventListener('click', () => {
                inputElement.value = suggestion; 
                suggestionsContainer.innerHTML = ''; 
              });
              suggestionsContainer.appendChild(suggestionElement); 
            });
        });  */
    


//5

/* function ajouterChamp() {
    let conteneur = document.getElementById('champs-conteneur');
    let champ = document.createElement('input');
    champ.type = 'text';
    conteneur.appendChild(champ);
}

function supprimerChamp() {
     const conteneur = document.getElementById('champs-conteneur');
     if(conteneur.childNodes.length > 0) {
        conteneur.removeChild(conteneur.lastChild);
     }
}
 */
    


//6

/* function nextStep(stepNumber) {
    const currentStep = document.getElementById(`step-${stepNumber}`);
    const nextStep = document.getElementById(`step-${stepNumber + 1}`);

    function validateStep(step) {
        const inputs = step.querySelectorAll('input');
        let isValid = true;

        inputs.forEach(input => {
            if(!input.checkValidity) {
                isValid = false;
            }
        });
        return isValid;
    }

    if(validateStep(currentStep)) {
        currentStep.style.display = 'none';
        nextStep.style.display = 'block';
    }else{
        alert("Veuillez remplir tous les champs correctement avant de passer à l’étape suivante.");
    }


    document.getElementById('multi-step-form').addEventListener('submit', function(event) {
        const finalStep = document.getElementById('step-3');

        if (!validateStep(finalStep)) {
            event.preventDefault();
            alert('Veuillez remplir tous les champs correctement avant de soumettre le formulaire.');
          }
    })
} */

