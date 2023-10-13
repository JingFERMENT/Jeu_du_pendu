const words = ["ecole", "ordinateur", "telephone", "elise"];

// 1) l'ordinateur choisit un mot aléatoire
let aChosenWordByComputer = words[Math.floor(Math.random() * words.length)];
console.log(aChosenWordByComputer);
console.log(aChosenWordByComputer.length);

// 2) dessiner une rangée de tirets, qui correspondant au nombre des lettres de ce mot
let nbOfDashes = aChosenWordByComputer.replace(/./g, '_');
console.log(nbOfDashes);

// 3) le joueur annonce une lettre
let aChosenLetterByPlayer = "e";

// 4) La lettre fait-elle partie du mot ?
if (aChosenWordByComputer.includes(aChosenLetterByPlayer)) {
    //oui
    console.log("Bien joué!")
    
    // transformer le mot en un tableau afin de rechercher chaque lettre
    const aChosenWordByComputerArray = aChosenWordByComputer.split("")
    console.log(aChosenWordByComputerArray);
    
    // transformer les tirets en un tableau afin de rechercher chaque lettre
    const dashArray = nbOfDashes.split("");
    // console.log(dashArray)

        let foundedLetterIndex = aChosenWordByComputerArray.indexOf(aChosenLetterByPlayer);
        console.log(foundedLetterIndex);
        

        // remplacer le trait par une lettre réussie 
        dashArray.splice(foundedLetterIndex, 1, aChosenWordByComputer[foundedLetterIndex]);
        console.log(dashArray);
        console.log(aChosenWordByComputer[foundedLetterIndex]);
        console.log(foundedLetterIndex);
        
        function getAllIndexes(word, letter) {
            let indexes = [];
            for(let i = 0; i < word.length; i++)
                if (word[i] === letter)
                    indexes.push(i);
            return indexes;
        }
        
        console.log(getAllIndexes(aChosenWordByComputer, aChosenLetterByPlayer));
        
        
    } else {
    console.log("Raté!")
    console.log(nbOfDashes);
    //non, l'ordinateur dessine le premier trait du pendu
    //afficher le premier dessin, afficher le 2ème dessin, le 3ème dessin etc ...
}



// 6) le jeu se poursuit jusqu'à ce que
// 7) le joueur gagne la partie en trouvant toutes les lettrres du mot ou en le devinant correctement.
// 8) l'ordinateur gagne la partie en complétant le dessin du pendu

// l'ordinateur l'inscrit à sa place autant de fois qu'elle se trouve dans le mot



