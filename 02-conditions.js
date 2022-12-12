/*LES CONDITIONS*/
/*----------------------------------------------------------------------*/
//attention pour les nombres flottants, parfois considéré comme des strings
//     const ageDriver = 12
//     const pays = 'US'
//     const peutConduireFrance = pays === 'FR' && ageDriver >= 18
//     const peutConduireUS = pays === 'US' && ageDriver >= 16
//     if (peutConduireFrance|| peutConduireUS) {
//         console.log('vous êtes majeur')
//     } else {
//         console.log( " vous n'êtes pas majeur ")
//     }

//
// const year = 2022
// // const brithYear = prompt('Quel est votre année de naissance ?')
// // const viewerAge = year - brithYear
// const viewerTrue = ( viewerAge >= 18)
// const viewerBetween = ( viewerAge >= 13)
// if (viewerTrue) {
//     console.log('Vous pouvez regarder Evil Dead ou Matrix')
// } else if (viewerBetween){
//     console.log('Vous pouvez regarder Matrix')
// }
// else {
//     console.log('Vous pouvez regarder Lilo et Stitch')
// }

//////////////a*b = e positive ou negative
/*
si x+ et y+ = +
si x- et y- = +
si x+ et y- = -
si x- et y+ = -
* correction */
// const x = prompt('Entrez un premier nombre')
// const y = prompt('Entrez un second nombre')
// const result = x * y
// //signe, permet de faire évoluer réponse selon condition
// let signe
// //on doit vérifier que le résultat tapper est bien un nombre
// if (isNaN(result)) {
//     console.log(`Opération impossible: ${x}x${y}`)
// } else {
//     if (result >= 0) {
//         signe = 'positif'
//     } else {
//         signe = 'négatif'
//     }
//     //les backticks permettent de taper un paragraphe
//     console.log(`${x}x${y}=${result} est ${signe}`)
// }
/* RAPPEL
 // && ET
 true && true // true
 true && false // false
 false && true // false
 false && false // false

 // || OU
 true || true // true
 true || false // true
 false || true // true
 false || false // false

 // ! NON
 !true // false
 !false // true */