/* //1

let btnClick = document.getElementById('button-2-1');

btnClick.addEventListener('click', function() {
    alert('hey');
});



//2

let hoverMe = document.getElementById('hover-me');

hoverMe.addEventListener('mouseover', function(){
    hoverMe.style.color='red';
});
hoverMe.addEventListener('mouseleave', function(){
    hoverMe.style.color='green';
});


//3

let inputSelection = document.getElementById('myInput');

inputSelection.addEventListener('keydown', function(event){
    console.log('Touche appuyée :', event.key);
})





//4

const boiteDeDialogue = document.getElementById('boiteDeDialogue');
const fond = document.getElementById('fond');

    fond.addEventListener('click', () => {
    boiteDeDialogue.style.display = 'none';
    fond.style.display = 'none';
  });


  //5

    document.getElementById('myForm').addEventListener('submit', function(event) {
        event.preventDefault(); 
    
        var nom = document.getElementById('nom').value;
        var email = document.getElementById('email').value;
    
        var errorMessage = '';
    
        if(nom === '') {
          errorMessage += 'Veuillez entrer votre nom. ';
        }
    
        if(email === '') {
          errorMessage += 'Veuillez entrer votre e-mail.';
        } else if (!/\S+@\S+\.\S+/.test(email)) {
          errorMessage += 'Veuillez entrer une adresse e-mail valide.';
        }
    
        if(errorMessage !== '') {
          document.getElementById('errorMessage').innerText = errorMessage;
        } else {
          console.log("all good")
        }
      });


//6

window.addEventListener('scroll', function(){
    document.body.style.backgroundColor = 'red';
});
window.addEventListener('click', function(){
    document.body.style.backgroundColor = 'white';
}); */