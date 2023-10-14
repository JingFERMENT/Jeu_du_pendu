const words = ["ecole", "maison", "livre", "medecin","apprendre","developpeur", "javascript"];

// 1) l'ordinateur choisit un mot aléatoire
let aChosenWordByComputer = words[Math.floor(Math.random() * words.length)];
console.log(aChosenWordByComputer);
// cibler l'endroit où mettre le mot choisi aléatoirement par l'ordinateur
const displayRandomWord = document.getElementById("display_random_word");

const btnGroup = document.getElementById("btn_group");

const btnA = document.getElementById("btn_a");
console.log(btnA.value);

// transformer le mot en un tableau afin de rechercher chaque lettre
const aChosenWordByComputerArray = aChosenWordByComputer.split("");
console.log(aChosenWordByComputerArray);

// 2) dessiner une rangée de tirets, qui correspondant au nombre des lettres de ce mot
let nbOfStars = aChosenWordByComputer.replace(/./g, "*");
console.log(nbOfStars);
displayRandomWord.innerHTML = nbOfStars;

// transformer les tirets en un tableau afin de rechercher chaque lettre
const dashArray = nbOfStars.split("");
// console.log(dashArray)

// 3) le joueur annonce une lettre
const nbOfTrials = 7;

// déclarer un tableau vide pour mettre toutes les lettres chosies par le joueur
// mettre ces lettres dans le tableau
let chosenlettersByPlayer = [];
// let a = "e";
// chosenlettersByPlayer.push(a);

console.log(chosenlettersByPlayer);

// compteur: pour calculer le nombre des fois que le joueur a essayé
let count = 0;

//  4) vérifrier si les lettres choisies par les joueurs correspondent au mot choisir par l'ordinateur
chosenlettersByPlayer.forEach((aChosenLetterByPlayer) => {
    // si la lettre fait partie du mot 
    if (aChosenWordByComputer.includes(aChosenLetterByPlayer)) {
        let allIndexsCorresponding = getAllIndexes(
            aChosenWordByComputer,
            aChosenLetterByPlayer
        );
        // console.log(allIndexsCorresponding);

        allIndexsCorresponding.forEach((oneIndexCorresponding) => {
            // remplacer le trait par une lettre réussie
            dashArray.splice(
                oneIndexCorresponding,
                1,
                aChosenWordByComputer[oneIndexCorresponding]
            );
        });
        
    } else { // La lettre ne fait pas partie du mot 
        count++
        // l'ordinateur dessine le premier trait du pendu
        //afficher le premier dessin, afficher le 2ème dessin, le 3ème dessin etc ...
    }

});

let leftOfTrails = nbOfTrials - count;

// console.log(dashArray);
// console.log(chosenlettersByPlayer);
// console.log((JSON.stringify(dashArray) == JSON.stringify(chosenlettersByPlayer)));

if (count <= nbOfTrials && (JSON.stringify(dashArray) == JSON.stringify(aChosenWordByComputerArray))) {
    console.log("Vous avez gagné le jeu.")
    // console.log(dashArray);
} // le joueur gagne la partie en trouvant toutes les lettrres du mot ou en le devinant correctement.
else if (count < nbOfTrials) {
    console.log(`Il vous reste ${leftOfTrails} essais.`);
}
else {
    // l'ordinateur gagne la partie en complétant le dessin du pendu
    console.log("Vous avez raté le jeu.")
}

// trouver tous les indexs correspondant dans un mot
function getAllIndexes(word, letter) {
    let indexes = [];
    for (let index = 0; index < word.length; index++)
        if (word[index] === letter) indexes.push(index);
    return indexes;
}


// écouteur d'évènement sur les boutons des lettres
// btnGroup.addEventListener("click", checkLetter);


