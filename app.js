//CONSIGNE 1 - BACKGROUND BODY
var body = document.getElementsByTagName('body');

document.body.style.backgroundColor = 'cadetblue';

//CONSIGNE 2 - AJOUT LISTE
var liste = document.createElement('li');
liste.appendChild(document.createTextNode('Lorem'));

document.querySelector('ul').appendChild(liste);

// CONSIGNE 3 - REPLIER LA LISTE 2
let btn2 = document.getElementById('btn2');
let li2 = document.getElementById('li2');

btn2.addEventListener("click", () => {
    if(getComputedStyle(li2).display != "none"){
        li2.style.display = "none";
    } else {
        li2.style.display = "block";
    }
});

// CONSIGNE 4 - CLIC BTN3 AJOUTER CLASSE CSS BTN1 MARGE 

