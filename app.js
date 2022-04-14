//Les boites de dialogues 

//alert
alert("Je suis la fonction alert");

//console.log
console.log("Je suis la fonction alert");

//promt
var saisi = prompt("Saisir quelque chose");

//confirm
console.log(confirm("J'en suis sûr"));

/* ---- Les  types de variables ---- */

// Type int - number
var chiffre = 5;

// Chaine de caractére
var chaine = "Je suis la chaine de caractére";

// Tableaux
// simple
var tableau = [5,6,"je mixte",1,"chiffre et","caractere","dans mon tableau"];

// multidimensionnel
var multi = [
    ["Camara","Moussa",14],
    ["Machin","Bidule",14],
    ["Simpson","Homer",14],
    ["Simpson","Bart",14]
];

// Les objects
var object1 = {
    nom: "Camara",
    prenom: "Moussa",
    age:63
}
var object2 = {
    nom: "Simpson",
    prenom: "Homer",
    age:45
}

/* ---- Les boucles ---- */
// while
console.log("Boucle while \n");
var index = 0;
while (index < 5) {
    console.log("Je passe dans la boucle " +index+ " fois ");
    
    index++;
}

// do ... while
console.log("Boucle do...while \n");
var index = 0;
do {
    console.log("j'affiche une fois avant d'aller verifier la condition dans while");

    index++;
} while (index < 3);

// For
console.log("Boucle for \n");
for (var index = 0; index < 5; index++) {
    
    console.log("Je passe dans la boucle " +index+ " fois ");
}


// foreach
var tab = [1,5,9,6,2];
tab.forEach(element => {
   console.log(element); 
});

/* ---- Les fonctions ---- */
// fonction simple
function nomFonction() {
    alert("Je suis la fonction SANS parametre");
}
//Appel de la fonction
nomFonction();

// fonction avec parametre
function afpa(nbre1,nbre2) {
    return nbre1+nbre2;
}

console.log(" Resultat fonction" +afpa(15,20));
console.log(" Resultat fonction " +afpa(1,9));

// fonction avec parametre indefini

function cda(...nbre) {
    var resultat=0;
    nbre.forEach(element=>{
    resultat +=element;
	  });
	return resultat;

}

//Appel fonction
console.log("Fonction avec parametre indefini");
console.log(cda(5,15));
console.log(cda(5,15,1,5,3,9,8,4,7,2));
console.log(cda(5,15,35));

/* --- Fonction anonyme --- */
var addition = function(n,x){
    return n+x;
}
console.log(addition(10,25));//35

(function(n,x){
    console.log(" auto-invoquee " + (n+x));
})(23,10);


/* --- MANIP DOM --- */

console.log(" Affiche le block avec l'id cda " ,document.getElementById("cda"));
console.log(" Affiche le block avec la classe " ,document.getElementsByClassName("afpa"));
console.log(" Affiche le block avec la balise p " ,document.getElementsByTagName("p"));

// QuerySelector
console.log("QuerySelector \n");
console.log(" Affiche le block avec la classe " ,document.querySelector(".afpa"));
console.log(" Affiche le block avec l'id cda " ,document.querySelector("#cda"));
console.log(" Affiche le block avec la balise p " ,document.querySelector("p"));
console.log(" Affiche le block avec la balise p " ,document.querySelectorAll(".afpa"));
console.log(" Affiche le block avec la balise p \n" ,
    document.querySelector(".afpa").style.backgroundColor ="yellow");

