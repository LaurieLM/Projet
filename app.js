//CONSIGNE 1 - BACKGROUND BODY
var body = document.getElementsByTagName('body');

document.body.style.backgroundColor = 'cadetblue';

//CONSIGNE 2 - AJOUT LISTE
var liste = document.createElement('li');
liste.appendChild(document.createTextNode('Lorem'));

document.querySelector('ul').appendChild(liste);

// CONSIGNE 3 - CLIC BTN1 SUPPRIMER LE DERNIER LI
let btn1 = document.getElementById('btn1');
let ul = document.getElementsByTagName('ul');

btn1.addEventListener("click", () => {
    delete liste
}); 

// CONSIGNE 4 - REPLIER LA LISTE 2
let btn2 = document.getElementById('btn2');
let li2 = document.getElementById('li2');

btn2.addEventListener("click", () => {
    if(getComputedStyle(li2).display != "none"){
        li2.style.display = "none";
    } else {
        li2.style.display = "block";
    }
});

// CONSIGNE 5 - CLIC BTN3 AJOUTER CLASSE CSS BTN1 MARGE 

let btn3 = document.getElementById('btn3')

btn3.addEventListener("click", () => {
    btn1.className = 'btn1';
    btn1.style.marginTop = (100) + "px";
})

//CONSIGNE 6 - CHANGER COULEUR BTN4
let btn4 = document.getElementById('btn4');

btn4.addEventListener("click", () => {
    btn4.style.backgroundColor = 'red'
})

//CONSIGNE 7 - CLIC BTN5 CHARGER IMG BACKGROUND SECTION1
let btn5 = document.getElementById('btn5');
let section1 = document.getElementById('section-1')

btn5.addEventListener("click", () => {
    section1.style.backgroundImage = "url('./img/background.png')"
});

//CONSIGNE 8 - SURVOL BTN6 CHANGE COULEUR TOUT BTN 
button = document.getElementsByTagName('button');
btn6 = document.getElementById('btn6');

btn6.addEventListener("hover", )