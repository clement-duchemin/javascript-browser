//1

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

let dialogue = document.getElementById('maBoiteDialogueUnique');
