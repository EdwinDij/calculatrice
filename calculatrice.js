//function arythmétique 



function addition(nombreA, nombreB) {
    return nombreA + nombreB;

}

function multiplication(nombreA, nombreB) {
    return nombreA * nombreB;

}
function soustraction(nombreA, nombreB) {
    return nombreA - nombreB;

}

function division(nombreA, nombreB) {
    if (nombreB == 0) {
        throw new Error("interdit");
    }
    return nombreA / nombreB;

}

do {
    var choix = Number(prompt("Que souhaitez-vous faire? \n\n 1 - Addition \n 2 - Multiplication \n 3 - Soustraction \n 4 - Division"));
} while (choix != 1 && choix != 2 && choix != 3 && choix != 4);


do {
    var premierNombre = Number(prompt('entre un nombre:'));
    var deuxiemeNombre = Number(prompt('entrez un deuxième nombre:'));

} while (isNaN(premierNombre) || isNaN(deuxiemeNombre));

try {
    switch (choix) {
        case 1:
            var resultat = addition(premierNombre, deuxiemeNombre);
            break;

        case 2:
            var resultat = multiplication(premierNombre, deuxiemeNombre);
            break;

        case 3:
            var resultat = soustraction(premierNombre, deuxiemeNombre);
            break;

        case 4:
            var resultat = division(premierNombre, deuxiemeNombre);
            break;
        default:
            throw new
                Error("une erreur s'est glissé")
    }
    alert("voici le resultat : " + resultat);
}
catch (error) {
    alert(error);
}

