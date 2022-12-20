//SELECTEURS
const textes = document.querySelector ("span");
const p = document.querySelector (".présentation p");
const button = document.querySelector ("button");
const bg = document.querySelector ("body");

//EVENEMENTS

button.addEventListener("click", function(){

    document.body.style.backgroundImage = "url('images/dark.jpg')";

    if (textes.style.color === 'rgb(203, 81, 0)'){
        textes.style.color = 'rgb(0, 30, 203)';  
        p.style.color = 'black';  
    }
    else {
        textes.style.color = 'rgb(203, 81, 0)';
        p.style.color = 'rgb(203, 81, 0)';  
    }
    
 })
    

console.log(button);
