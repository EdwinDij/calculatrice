//do {
//    var choix = prompt("Que souhaitez-vous faire? \n\n 1 - Addition \n 2 - Multiplication \n 3 - Soustraction \n 4 - Division" );
//}while(choix != 1 && choix != 2 && choix !=3 && choix != 4);

//let premierNombre = Number();
//let deuxiemeNombre = Number();

//do {
//    premierNombre = Number(prompt('entre un nombre'));
 //   deuxiemeNombre = Number(prompt('entrez un deuxième nombre'));
    
//}while(Number.isNaN(premierNombre || deuxiemeNombre));

//function addition(premierNombre, deuxiemeNombre) {
  
    
//}

let nombreUn    = 4;
let nombreDeux  = 7;

function addition(nombreA, nombreB) {

    let result = nombreA + nombreB;
   // console.log(result);
   return result;

}

console.log(addition(nombreUn, nombreDeux));