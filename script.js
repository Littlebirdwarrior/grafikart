/*LES VARIABLES*/
/*----------------------------------------------------------------------*/
// const a = 'salut';
// const b = `les gens`;
// /*toujours commencer par const, puis si change let ; var déprécié
// guillemet : problème, caractères spéciaux, dans ce cas /
// guillemet double évite échappement,
// si besoin de plusieurs lignes, backtick ` ou antislash \n
// */
// const  isMajeur = undefined
//
// //tableau
// const notes = [13,
//     14,
//     2,
//     8,
//     9,
//     'hello',
//     [1,2,3]
// ]
//
// //objets
// const person = {
//     firstname: 'John',
//     lastname: 'Do',
//     age : 24,
//     note: [12,24,15],
//     job: {
//         name: 'informaticien',
//         hours: 35
//     }
// }

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

/* LES CLASSES*/

/*Si vous inspectez un objet avec votre navigateur vous remarquerez qu'il y a une propriété particulière [[Prototype]].
 Cette propriété est un objet qui contient aussi des propriétés et des méthodes.
 Cet objet [[Prototype]] peut être obtenu à l'aide de la méthode Object.getPrototypeOf*/
// console.log(Object.getPrototypeOf(1))
// console.log(Object.getPrototypeOf("hello"))
// console.log(Object.getPrototypeOf([]))
// console.log(Object.getPrototypeOf(true))

//Cascade en JS
/*Lorsque l'on utilise une méthode ou une propriété sur un objet, le moteur JavaScript va regarder
si la méthode / propriété existe sur l'objet en question.
Si ce n'est pas le cas il va regarder le prototype.
S'il ne trouve toujour rien alors il regardera le prototype du prototype jusqu'à arriver au bout de la chaine
(l'élément qui n'a plus de prototype). Ce système permet d'avoir un système d'héritage au sein du langage javascript.
Par exemple, une chaine de caractère a comme prototype String, qui lui même à le prototype Object.
DONC CASCADE JS => 1. Méthode/Type
                        2. Prototype/Fonction
                                3. object/prototype de object
*/




const moyenne =(notes) => {
    let sum = 0
    for(let note of notes){
        sum = sum + note
    }
    return sum/ notes.length
}

//definir une classe/ un constructor (qui est une fonction)
class Student {
    _notes = []
    ecole = 'Jules Ferry'
    //valeur privée
    #secret = "Hello"

    constructor(firstname, lastname) {//pas besoin de function devant
        this.firstname = firstname
        this.lastname = lastname
    }
    //methode utilisable par tous objet du prototype
    // pas besoin du mot function pour les méthodes
    setNotes (notes) {
        this.notes = notes
    }

    //methode appelé automatiquement, permet entrer donnée plus facilement -> setter /getter
    //setter, appelé automatiquement quand on définis une valeur, permet vérification (si c'est un tableau)
    //getter, acceder à une propiété
    set _note(v) {
        //cree erreur qui s'appelle en boucle, nécéssité de  nommer note différemment
        if (Array.isArray(v)){
            this._notes = v
        }
    }
        //getter, si pas de retour, renvois undifined
    get name() {
        return `${this.firstname} ${this.lastname}`
    }

    canPass(){
        return moyenne(this._notes) >= Student.moyenne
    }
    //Définir propriété dans la classe avec static, crée une constante dans la classe
    static moyenne = 10
}
//créer le prototype d'un prototype : permet créer propriété particulière pour une seule version de l'object

class SuperStudent extends Student {

    get name (){
        return 'Super' + super.name
    }

    canPass() {
        return super.canPass()
    }
}

const John = new SuperStudent('John', 'Doe')
John.notes = 19
const Jane = new Student('Jane', 'Doe')
Jane.notes = [16,18,20]
console.log(John)
console.log(Jane)
console.log(John.canPass(), Jane.canPass())
console.log(John.name)
console.log(John.#secret) //renvois erreur








