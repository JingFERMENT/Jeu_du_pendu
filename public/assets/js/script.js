// tableau pour stocker les mots
const words = [
    "ecole",
    "maison",
    "livre",
    "medecin",
    "apprendre",
    "developpeur",
    "javascript",
    "france",
    "chine",
];

// déclaration des variables
const displayRandomWord = document.getElementById("display_random_word");
const btnLetters = document.querySelectorAll(".btn-info");
const firstImageOfPendu = document.getElementById("pendu_1");
const secondImageOfPendu = document.getElementById("pendu_2");
const thirdImageOfPendu = document.getElementById("pendu_3");
const fourthImageOfPendu = document.getElementById("pendu_4");
const fifthImageOfPendu = document.getElementById("pendu_5");
const sixthImageOfPendu = document.getElementById("pendu_6");
const seventhImageOfPendu = document.getElementById("pendu_7");
const helpInfo = document.getElementById("helpInfo");
const cover = document.getElementById("cover");
const restartBtn = document.getElementById("restart");

let aChosenWordByComputer = words[Math.floor(Math.random() * words.length)];
const aChosenWordByComputerArray = aChosenWordByComputer.split("");
console.log(aChosenWordByComputerArray);
let nbOfStars = aChosenWordByComputer.replace(/./g, "*");

displayRandomWord.innerHTML = nbOfStars;
const starArray = nbOfStars.split("");
console.log(starArray);

const nbOfTrials = 7;
let countError = 0;

function displayImages(countError) {
    // l'ordinateur dessine le premier, le 2ème, la 3ème trait du pendu ....etc
    switch (countError) {
        case 1:
            firstImageOfPendu.classList.remove("d-none");
            break;
        case 2:
            firstImageOfPendu.classList.add("d-none");
            secondImageOfPendu.classList.remove("d-none");
            break;
        case 3:
            secondImageOfPendu.classList.add("d-none");
            thirdImageOfPendu.classList.remove("d-none");
            break;
        case 4:
            thirdImageOfPendu.classList.add("d-none");
            fourthImageOfPendu.classList.remove("d-none");
            break;
        case 5:
            fourthImageOfPendu.classList.add("d-none");
            fifthImageOfPendu.classList.remove("d-none");
            break;
        case 6:
            fifthImageOfPendu.classList.add("d-none");
            sixthImageOfPendu.classList.remove("d-none");
            break;
        case 7:
            sixthImageOfPendu.classList.add("d-none");
            seventhImageOfPendu.classList.remove("d-none");
            break;
        default:
            // firstImageOfPendu.classList.add("d-none");
            // secondImageOfPendu.classList.add("d-none");
            // thirdImageOfPendu.classList.add("d-none");
            // fourthImageOfPendu.classList.add("d-none");
            // fifthImageOfPendu.classList.add("d-none");
            // sixthImageOfPendu.classList.add("d-none");
            // seventhImageOfPendu.classList.add("d-none");
            break;
    }
}

function displayHelpMessage(countError,starArray) {
    if (
        countError <= nbOfTrials &&
        JSON.stringify(starArray) == JSON.stringify(aChosenWordByComputerArray)
    ) {
        helpInfo.innerHTML = "Vous avez gagné le jeu. \ud83c\udf89 \uD83D\uDE4C";
        console.log(helpInfo.innerText);
        const addCover = cover.classList.remove("d-none");
        console.log(addCover);
    } // le joueur gagne la partie en trouvant toutes les lettrres du mot ou en le devinant correctement.
    else if (countError < nbOfTrials) {
        let leftOfTrails = nbOfTrials - countError;
        helpInfo.innerHTML = `Il vous reste ${leftOfTrails} essais. \u270A`;
        // console.log(helpInfo.innerHTML);
    } else {
        // l'ordinateur gagne la partie en complétant le dessin du pendu
        helpInfo.innerHTML = "Vous avez raté le jeu.\uD83D\uDE22 ";
        console.log(helpInfo.innerHTML);
        const addCover = cover.classList.remove("d-none");
        console.log(addCover);
    }
}

// fonction trouver tous les indexs correspondant dans un mot
function getAllIndexes(word, letter) {
    let indexes = [];
    for (let index = 0; index < word.length; index++)
        if (word[index] === letter) indexes.push(index);
    return indexes;
}

function checkLetter(letter, starArray) {
    if (aChosenWordByComputer.includes(letter)) {
        
        let allIndexsCorresponding = getAllIndexes(aChosenWordByComputer, letter);
        
        allIndexsCorresponding.forEach((oneIndexCorresponding) => {
            starArray.splice(
                oneIndexCorresponding,
                1,
                aChosenWordByComputer[oneIndexCorresponding]
            );
        });
    } else {
        countError++;
        // console.log(countError);
    }
    
    let starArrayAsString = starArray.join('');
    // console.log(starArrayAsString);
    displayRandomWord.innerHTML = starArrayAsString;
    // console.log(displayRandomWord.innerHTML);
}

function reinitializeGame() {
    location.reload();
}

//écouteur des évènements
restartBtn.addEventListener("click", reinitializeGame);

btnLetters.forEach((btnLetter) =>
    // console.log(btnLetter.innerHTML.toLowerCase()));
    btnLetter.addEventListener("click", () => {
        let aChosenLetterByPlayer = btnLetter.innerHTML.toLowerCase();
        // console.log(aChosenLetterByPlayer)
        
        btnLetter.classList.add("disabled");
        
        checkLetter(aChosenLetterByPlayer, starArray);
        
        displayHelpMessage(countError, starArray);
        
        displayImages(countError);
    })
);
