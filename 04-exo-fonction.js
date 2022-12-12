/*LES FONCTIONS*/
/*----------------------------------------------------------------------*/

// function greeting (name){
//     console.log(`Bonjour ${name}`)
// }
//
// const names = ['John','Jane','Jonas']
// for (let name of names) {
//     greeting(name)
// }

//THIS
//appeler une fonction sans paramêtre avec this

// const johnDoe = {
//     firstname: 'John',
//     lastname: 'Doe',
//     fullname : function () {
//         console.log (`${this.firstname} ${this.lastname}`.toUpperCase())
//     }
// }
//     johnDoe.fullname()

//les callback = quand mon param est une fonction

// const isPair = function ( a, cb) {
//     if (a % 2 === 0 ) {
//         cb(a)
//     }
// }
//  isPair( 4, function (n) {
//      console.log(`mon nombre ${n} est pair`)
//  })

//EXERCICES
//Créer une fonction isPremier() qui permet d'indiquer si un nombre est premier
// function isPremier(n) {
//
//     if (isNaN(n)){
//         console.log(`${n} n'est pas un nombre`)
//     }
// /*if prendra toujours un booléen, ici j'effectue une comparaison entre le résultat
// * de la division euclidienne entre n et 2,3 et 5 (%), le résultat de cette comparaison est un booléen,
// * égale à 0 ou pas. Ici, la condition est inversé car le true correspond à n'est pas premier*/
//
//     if ( n<2 || n % 2 === 0 || n % 3 === 0 || n % 5 === 0) {
//         console.log(`${n} n'est pas premier`)
//     } else {
//         console.log(`${n} is premier`)
//     }
//
// }
//  isPremier(-9)
//  isPremier(0)
//  isPremier(1)
//  isPremier(7)
//  isPremier(3)

/*On crée un nombre aléatoire entre 0 et 10,
ensuite on demandera à l'utilisateur de deviner ce nombre avec 3 essaies.
Pour créer la logique on utilisera des fonctions spécifiques

Une fonction isRight(n) qui renverra un booléen si l'utilisateur à la bonne réponse ou non
Une fonction guess() qui permet de faire un essaie,
cette fonction renverra true ou false en fonction de la réponse donnée
*/

const solution = Math.floor(Math.random() * 11) //On crée un nombre aléatoire entre 0 et 10
// const solution = 3

// function isRight(n) {//je créer une foncton
//     return solution === n //On compare si n est égale à solution, true ou false
// }

const isRight = (n) => {//je créer une foncton
    return solution === n //On compare si n est égale à solution, true ou false
}

const guess = () => {//je cree
    const chiffre = prompt('Devinez un chiffre entre 1 et 10') * 1
    console.log(`Votre proposition est ${chiffre}`)
    if(isNaN(chiffre)){
        console.log('Veuillez taper un chiffre, gros malin')
        return guess() //recurssivité, je me rappelle guess si ce n'est pas un nombre
    }
    if( chiffre<0||chiffre>10){
        console.log ('Ce chiffre n\'est pas compris entre 1 et 10')
        return guess() //recurssivité, je me rappelle guess si ce n'est pas un nombre
        //recurssivité possible car je demande qqchose à utilisateur
    }
    return isRight(chiffre); //n prend la valeur de chiffre , j'appelle
}

// ! if n'est pas une fonction mais un opérateur logique,
// et un appel de fonction est aussi son résultat

for (let i = 1; i <= 3; i++) { // deux choses à tester
    //ici je teste si l'utilisateur à deviné
    if(guess()/*j'appelle*/){
        console.log('Vous avez devinez')
        break
    } else {
        console.log ('Vous n\'avez pas devinez')
    }
    //ici je teste si l'utilisateur à encore des essais (a mettre à la fin )
    if(i===3){
        console.log("vous n'avez plus de crédit")
        break
    }
}