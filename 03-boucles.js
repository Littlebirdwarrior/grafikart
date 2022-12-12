/*LES BOUCLES*/
/*----------------------------------------------------------------------*/

//WHILE
/*let i = 0
while (i < 3) {
console.log("Je compte " + i)
if (i === 1) {
    break
}
i++
}*/
//FOR
//lister les éléments d'un tableau ou d'un objet --> for... in
// const fleurs = ['jascintes', 'azalées', 'primevères', 'tulipes']
// const pots = {
//     a : 'céramique',
//     b: 'verre',
//     c: 'carton',
// }
// for (let i in fleurs) {
//     console.log((i), fleurs[i]);
// }
// for (let i in pots) {
//     console.log((i), pots[i])
// }
//lister tous les éléments d'un tableau sans l'indices --> for of
//ne marche pas pour un objet, non itérable
// for (let fleur of fleurs){
//     console.log(fleur)
// }
//Lister les lettres d'une string
// const greeting = 'bonjour';
//     for (let letters of greeting) {
//         console.log(letters)
// }
/*EXERCICE
Décompte
08:18 - Pour cet exercice on demandera à l'utilisateur (à l'aide de prompt)
un nombre à l'utilisateur entre 0 et 10,
on affichera ensuite tous les nombres sous le nombre indiqué par l'utilisateur
(s'il rentre 4, on afficher 4, 3, 2, 1, 0).
Si l'utilisateur rentre un chiffre erroné on affichera un message d'erreur*/

// let chiffreUser = prompt ('Choississez un chiffre entre 0 et 10')
// if (chiffreUser<0 || chiffreUser>10)
// {
//     console.log('Ce chiffre n\'est pas compris entre 0 et 10')
// }
// else {
//   do {
//       console.log(chiffreUser)
//       chiffreUser --
//   } while (chiffreUser>0)
// }
//Autre grammaire
// if (chiffreUser > 10 || chiffreUser < 0) {
//     console.log("Le nombre n'est pas entre 0 et 10")
// } else {
//     for (let i = chiffreUser; i >= 0; i--) {
//         console.log(i)
//     }
// }
//On créera une variable guess qui contiendra un nombre entre 0 et 10,
// l'objectif sera ensuite de faire deviner ce mot à l'utilisateur.
// Si l'utilisateur se trompe on lui donnera une indication "plus"
// ou "moins" pour l'orienter vers la bonne réponse.

// const tresor = 3
// const guess = parseInt(prompt('Proposez un chiffre entre 1 et 10'))
// if (guess<0 || guess>10) {
//     console.log('ce n\'est pas compris entre 1 et 10')
//     }
// else if(guess<tresor) {
//         console.log ('Augmentez votre chiffre')
//     }
// else if (guess>tresor) {
//         console.log('Diminuez votre chiffre')
//     }
// else if (guess===tresor){
//         console.log ('Bravo vous avez deviné')
//     }
// else {
//     console.log('Vous n\'avez pas taper un nombre')
// }

// while(true) {
//     const chiffre = prompt('Votre chiffre') * 1
//     if (chiffre < guess) {
//         console.log('Plus')
//     } else if (chiffre > guess) {
//         console.log('Moins')
//     } else {
//         break
//     }
// }
// console.log('Bravo ! vous avez deviné')