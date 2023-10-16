const words = ["ecole", "maison", "livre", "medecin", "apprendre", "developpeur", "javascript"];

// 1) l'ordinateur choisit un mot aléatoire
let aChosenWordByComputer = words[Math.floor(Math.random() * words.length)];
console.log(aChosenWordByComputer);
// cibler l'endroit où mettre le mot choisi aléatoirement par l'ordinateur
const displayRandomWord = document.getElementById("display_random_word");

// cible l'endroit où il y a toutes les boutons des lettres
const btnGroup = document.getElementById("btn_group");
// console.log(btnGroup)
// const btnA = document.getElementById("btn_a");
// btnA.disabled = true;
// console.log(btnA);

const firstImageOfPendu = document.getElementById("pendu_1");
const secondImageOfPendu = document.getElementById("pendu_2");
const thirdImageOfPendu = document.getElementById("pendu_3");
const fourthImageOfPendu = document.getElementById("pendu_4");
const fifthImageOfPendu = document.getElementById("pendu_5");
const sixthImageOfPendu = document.getElementById("pendu_6");
const seventhImageOfPendu = document.getElementById("pendu_7");
const helpInfo = document.getElementById("helpInfo");
const cover1 = document.getElementById("cover1");
const cover2 = document.getElementById("cover2");

// console.log(cover);
// console.log(helpInfo);
// console.log(firstImageOfPendu);
// transformer le mot en un tableau afin de rechercher chaque lettre
const aChosenWordByComputerArray = aChosenWordByComputer.split("");
console.log(aChosenWordByComputerArray);

// 2) dessiner une rangée de tirets, qui correspondant au nombre des lettres de ce mot
let nbOfStars = aChosenWordByComputer.replace(/./g, "*");
console.log(nbOfStars);
displayRandomWord.innerHTML = nbOfStars;

// transformer les tirets en un tableau afin de rechercher chaque lettre
const starArray = nbOfStars.split("");
// console.log(starArray)

// 3) le joueur annonce une lettre
const nbOfTrials = 7;

// // trouver tous les indexs correspondant dans un mot
function getAllIndexes(word, letter) {
    let indexes = [];
    for (let index = 0; index < word.length; index++)
        if (word[index] === letter) indexes.push(index);
    return indexes;
}

let count = 0;
// écouteur d'évènement sur les boutons des lettres
btnGroup.addEventListener("click", (event) => {

    let aChosenLetterByPlayer = event.target.value;
    // console.log(aChosenLetterByPlayer);
    // let chosenlettersByPlayer = [];
    // chosenlettersByPlayer.push(aChosenLetterByPlayer);
    
    console.log(event.target.classList.add("d-none"));
    
    // console.log(aChosenWordByComputer)
    // console.log(aChosenWordByComputer.includes(aChosenLetterByPlayer))

    // compteur: pour calculer le nombre des fois que le joueur a essayé

    if (aChosenWordByComputer.includes(aChosenLetterByPlayer)) {
        let allIndexsCorresponding = getAllIndexes(aChosenWordByComputer, aChosenLetterByPlayer);
        // console.log(allIndexsCorresponding);

        allIndexsCorresponding.forEach((oneIndexCorresponding) => {
            // remplacer le trait par une lettre réussie
            starArray.splice(
                oneIndexCorresponding,
                1,
                aChosenWordByComputer[oneIndexCorresponding]
            );
        });

    } else { // La lettre ne fait pas partie du mot 
        count++
        console.log(count);
        // l'ordinateur dessine le premier trait du pendu
        //afficher le premier dessin, afficher le 2ème dessin, le 3ème dessin etc ...
    }

    let leftOfTrails = nbOfTrials - count;
    //
    let starArrayAsString = starArray.toString();
    starArrayAsString = starArrayAsString.replace(/,/g, '')
    displayRandomWord.innerHTML = starArrayAsString;

    // console.log(starArray);
    // console.log(chosenlettersByPlayer);
    // console.log((JSON.stringify(starArray) == JSON.stringify(chosenlettersByPlayer)));

    if (count === 1) {
        firstImageOfPendu.classList.remove("d-none");
        secondImageOfPendu.classList.add("d-none");
        thirdImageOfPendu.classList.add("d-none");
        fourthImageOfPendu.classList.add("d-none");
        fifthImageOfPendu.classList.add("d-none");
        sixthImageOfPendu.classList.add("d-none");
        seventhImageOfPendu.classList.add("d-none");
    } else if (count === 2) {
        firstImageOfPendu.classList.add("d-none");
        secondImageOfPendu.classList.remove("d-none");
        thirdImageOfPendu.classList.add("d-none");
        fourthImageOfPendu.classList.add("d-none");
        fifthImageOfPendu.classList.add("d-none");
        sixthImageOfPendu.classList.add("d-none");
        seventhImageOfPendu.classList.add("d-none");
    } else if (count === 3) {
        firstImageOfPendu.classList.add("d-none");
        secondImageOfPendu.classList.add("d-none");
        thirdImageOfPendu.classList.remove("d-none");
        fourthImageOfPendu.classList.add("d-none");
        fifthImageOfPendu.classList.add("d-none");
        sixthImageOfPendu.classList.add("d-none");
        seventhImageOfPendu.classList.add("d-none");
    } else if (count === 4) {
        firstImageOfPendu.classList.add("d-none");
        secondImageOfPendu.classList.add("d-none");
        thirdImageOfPendu.classList.add("d-none");
        fourthImageOfPendu.classList.remove("d-none");
        fifthImageOfPendu.classList.add("d-none");
        sixthImageOfPendu.classList.add("d-none");
        seventhImageOfPendu.classList.add("d-none");
    } else if (count === 5) {
        firstImageOfPendu.classList.add("d-none");
        secondImageOfPendu.classList.add("d-none");
        thirdImageOfPendu.classList.add("d-none");
        fourthImageOfPendu.classList.add("d-none");
        fifthImageOfPendu.classList.remove("d-none");
        sixthImageOfPendu.classList.add("d-none");
        seventhImageOfPendu.classList.add("d-none");
    } else if (count === 6) {
        firstImageOfPendu.classList.add("d-none");
        secondImageOfPendu.classList.add("d-none");
        thirdImageOfPendu.classList.add("d-none");
        fourthImageOfPendu.classList.add("d-none");
        fifthImageOfPendu.classList.add("d-none");
        sixthImageOfPendu.classList.remove("d-none");
        seventhImageOfPendu.classList.add("d-none");
    } else if (count === 7) {
        firstImageOfPendu.classList.add("d-none");
        secondImageOfPendu.classList.add("d-none");
        thirdImageOfPendu.classList.add("d-none");
        fourthImageOfPendu.classList.add("d-none");
        fifthImageOfPendu.classList.add("d-none");
        sixthImageOfPendu.classList.add("d-none");
        seventhImageOfPendu.classList.remove("d-none");
    } else {
        firstImageOfPendu.classList.add("d-none");
        secondImageOfPendu.classList.add("d-none");
        firstImageOfPendu.classList.add("d-none");
        firstImageOfPendu.classList.add("d-none");
        firstImageOfPendu.classList.add("d-none");
        firstImageOfPendu.classList.add("d-none");
        seventhImageOfPendu.classList.add("d-none");
    }


    if (count <= nbOfTrials && (JSON.stringify(starArray) == JSON.stringify(aChosenWordByComputerArray))) {
        helpInfo.innerHTML = "Vous avez gagné le jeu. \ud83c\udf89 \uD83D\uDE4C";
        console.log(helpInfo.innerText);
        const addCover2 = cover2.classList.remove("d-none");
        console.log(addCover2);
        // location.reload();
    } // le joueur gagne la partie en trouvant toutes les lettrres du mot ou en le devinant correctement.
    else if (count < nbOfTrials) {
        helpInfo.innerHTML = `Il vous reste ${leftOfTrails} essais. \u270A`;
        console.log(helpInfo.innerHTML);
    }
    else {
        // l'ordinateur gagne la partie en complétant le dessin du pendu
        helpInfo.innerHTML = "Vous avez raté le jeu.\uD83D\uDE22 ";
        console.log(helpInfo.innerHTML);
        const addCover1 = cover1.classList.remove("d-none");
        console.log(addCover1);
        // location.reload();
    }

});



// déclarer un tableau vide pour mettre toutes les lettres chosies par le joueur
// mettre ces lettres dans le tableau
// let chosenlettersByPlayer = [];
// // let a = "e";
// // chosenlettersByPlayer.push(a);

// console.log(chosenlettersByPlayer);

// //  4) vérifrier si les lettres choisies par les joueurs correspondent au mot choisir par l'ordinateur
// chosenlettersByPlayer.forEach((aChosenLetterByPlayer) => {
//     // si la lettre fait partie du mot
//     if (aChosenWordByComputer.includes(aChosenLetterByPlayer)) {
//         let allIndexsCorresponding = getAllIndexes(
//             aChosenWordByComputer,
//             aChosenLetterByPlayer
//         );
//         // console.log(allIndexsCorresponding);

//         allIndexsCorresponding.forEach((oneIndexCorresponding) => {
//             // remplacer le trait par une lettre réussie
//             starArray.splice(
//                 oneIndexCorresponding,
//                 1,
//                 aChosenWordByComputer[oneIndexCorresponding]
//             );
//         });

//     } else { // La lettre ne fait pas partie du mot
//         count++
//         // l'ordinateur dessine le premier trait du pendu
//         //afficher le premier dessin, afficher le 2ème dessin, le 3ème dessin etc ...
//     }

// });

// let leftOfTrails = nbOfTrials - count;

// // console.log(starArray);
// // console.log(chosenlettersByPlayer);
// // console.log((JSON.stringify(starArray) == JSON.stringify(chosenlettersByPlayer)));

// if (count <= nbOfTrials && (JSON.stringify(starArray) == JSON.stringify(aChosenWordByComputerArray))) {
//     console.log("Vous avez gagné le jeu.")
//     // console.log(starArray);
// } // le joueur gagne la partie en trouvant toutes les lettrres du mot ou en le devinant correctement.
// else if (count < nbOfTrials) {
//     console.log(`Il vous reste ${leftOfTrails} essais.`);
// }
// else {
//     // l'ordinateur gagne la partie en complétant le dessin du pendu
//     console.log("Vous avez raté le jeu.")
// }
