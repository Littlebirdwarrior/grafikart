//EXERCICES
//isPalindrome()
/*L'objectif de cet exercice est de créer une
fonction isPalindrome() qui renverra vrai si
un mot est un palindrome et false sinon.
La fonction ne sera pas sensible à la casse.*/

/*étapes
* 1- définir un mot en var1
* 2- dire que min et MAJ se valent
* 3- découper le mot et créer un tableau t1
* 3- retourner le tableau t2
* 4-comparer t1 et t2
* OU 4'- fusionner le mot et créer une string qui est var2
* 5'-comparer var1 et var2 qui renvois true ou false*/


 // function isPalindrome(word) {
 //     /*test
 //     // let uppWord = word.toUpperCase();
 //     // console.log(uppWord)
 //     // let charsArray = uppWord.split('');
 //     // console.log(charsArray)
 //     // let reverseArray = charsArray.reverse();
 //     // console.log(reverseArray)
 //     // let result = reverseArray.join('')
 //     // console.log (result)
 //    */
 //     let uppWord = word.toUpperCase()
 //     let result = uppWord.split('').reverse().join()
 //
 //     if (uppWord === result){
 //         console.log(`${word} is a palindrome`)
 //     } else {
 //         console.log(`${word} is not palindrome`)
 //     }
 // }
 //    isPalindrome("tEst")
 //    isPalindrome("blue")
 //    isPalindrome("Kayak")
 //    isPalindrome("anNa")

//CORRECTION
/*function isPalindrome (word) {
    const reversedWord = word
        .split('')
        .reverse()
        .join('')
    return word.toUpperCase() === reversedWord.toUpperCase()
}*/


//MOYENNE
/* Dans cet exercice on souhaite modifier l'objet suivant
pour ajouter une propriété moyenne qui contiendra la moyenne de chaque élève.*/

// const students = [
//     {
//         name: 'John',
//         notes: [1, 20, 18, 19, 12]
//     },
//     {
//         name: 'Jane',
//         notes: [17, 18, 20, 13, 15]
//     },
//     {
//         name: 'Sophie',
//         notes: [17, 12, 14, 15, 13]
//     },
//     {
//         name: 'Marc',
//         notes: [2, 3, 5, 8, 9]
//     },
//     {
//         name: 'Manon',
//         notes: [18, 17, 18, 19, 12]
//     }
// ]
//
// const moyenne = (notes) => {
//     let sum = 0
//     for (let note of notes) {
//         sum = sum + note
//     }
//     return sum/notes.length
// }
//
// //modifie l'objet de base, calcule myn de chq student de students
// for (let student of students) {
//     student.moyenne = moyenne(student.notes)
//     // calcule la pire note et meilleure note
//     student.worst = Math.min(...student.notes)
//     //student.worst = Math.min.apply(null,student.notes) //-> autre grammaire avec .apply()
//     student.best = Math.max(...student.notes)
//     //student.best = Math.max.apply(null,student.notes)
// }
//
// //Affiche le top 3
// /*1 - sort() mets les moyennes dans un tableau ?
// * 2- sort() range le tableau dans l'ordre
// * 3- affiche le top 3*/
//
// const compareStudent = (a, b) => {
//     return b.moyenne - a.moyenne //si a<b donnera un nombre négatif, positif ou nul,
//     // si négatif, b en 1er, si positif, a en 1er, null, garde ordre ?
//     //inversé a et b afin d'avoir la meilleur note en premier a étant le plus mauvais élève et b le meilleur
// }
//
// students.sort(compareStudent)//propriété myn ajoutée, propriété sort() trie
// //console.log(students)
//
// //Pour ne pas se repeter, on créer une fonctions
//
// const formatStudent = (student) => { //on travaille avec le paramètre student qui ajit comme un indice
//     return `${student.name} avec une moyenne de ${student.moyenne}, sa meilleur note est ${student.best}, sa pire note est ${student.worst}`
// }
//
// console.log(`Top 3 étudiant
// 1: ${formatStudent(students[0])}
// 2: ${formatStudent(students[1])}
// 3: ${formatStudent(students[2])}
// `)

//Calculateur de fréquence
/*Nous allons créer un système capable de calculer la fréquence
des mots dans une chaine de caractère. L'objectif sera dans un premier
temps d'obtenir un objet qui contiendra en propriété le mot, et en valeur
le nombre d'occurence ({bonjour: 3, maison: 2})*/

const phrase = `Vous savez, moi je ne crois pas qu’il y ait de bonne ou de mauvaise situation. 
Moi, si je devais résumer ma vie aujourd’hui avec vous, je dirais que c’est d’abord des rencontres.`

/*
* 1-supprimer les espaces et les charactères spéciaux -> replaceAll(,. ) et mettre tout en minuscule lowerCase()
* 2-les mettre dans un tableau -> split()
* 3- les trier --> sort ()
* 4- créer un objet capable de sauvegarder les fréquences {vous: 2, moi : 1}*/

// const words = phrase
    /*ici, possibilité de faire une fonction*/
    // .toLowerCase()
    // .replaceAll(',','') //replace()--> seulement 1er occurence
    // .replaceAll('?','')
    // .replaceAll('!','')
    // .replaceAll(':','')
    // .replaceAll('"','')
    // .split(' ')//on exporte chaque mots en chaine de char
//console.log(words)
//créer une boucles pour mesurer la fréquence de chaque mots

const frequencies = {}
const ignored = [',', '?', ':', '!', '«', '»', '…', '’']
let cleanedPhrase = phrase.toLowerCase()
for(let character of ignored) {
    cleanedPhrase = cleanedPhrase.replaceAll(character, '')
}
const words = cleanedPhrase.split(' ')
for(let word of words){
    if(word !== ''){ //ici, on peut créer des rêgles différentes, mots supérieur à 3 par exemple  "&& word.length >= 3"
        //première fois que l'on rencontre le mots, donne une valeur undefined, si c'est le cas, je lui donne la valeur 1, sinon, incrémente
        if (frequencies[word]) {
            frequencies[word] ++
        } else {
            frequencies[word] = 1
        }
    }
}
//pour trier et classer les fréquence, besoin de les ranger dans array
const frequenciesArray = []
for (let k in frequencies) { //pour chaque fréquence k, je push dans mon array un objet ou k est le mot et son ordre sa fréquence
    frequenciesArray.push({
            word: k,
            count: frequencies[k]
        })
}
frequenciesArray.sort((a,b) => b.count - a.count)
console.log(`Les mots les plus fréquents sont 
    "${frequencies[0].word}", 
    "${frequencies[1].word}" , 
    "${frequencies[2].word}"`)