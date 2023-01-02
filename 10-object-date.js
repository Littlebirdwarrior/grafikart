//OBJECT DATE

/*Dans ce chapitre nous allons voir comment
utiliser l'objet pour représenter une date en JavaScript.
 Cet objet peut se construire de différentes façons. (! Les mois commennce à 0)*/

// new Date()
// new Date(timestampInMilliseconds)
// new Date(dateString)
//
// new Date(year, monthIndex)
// new Date(year, monthIndex, day)
// new Date(year, monthIndex, day, hours)
// new Date(year, monthIndex, day, hours, minutes)
// new Date(year, monthIndex, day, hours, minutes, seconds)
// new Date(year, monthIndex, day, hours, minutes, seconds, milliseconds)


/*On obtient alors un objet sur lequel on peut récupérer
différentes informations à l'aide de méthodes comme
getDate(),getFullYear(), getMonth()
et que l'on pourra aussi manipuler avec des méthodes comme
getDate(), getFullYear(), getMonth() ou autre.
Enfin, il est possible de formatter la date en suivant différents standards grâce aux méthodes
toISOString(), toUTCString() et toLocaleString().*/

//Exercice 1

/*Créer une fonction qui permet d'ajouter un certain nombre de jours à une date.*/

// function addDays(date, days) {
//     date.setDate(date.getDate() + days)
//     return date
// } //problème, mutation, object date est modifié par la fonction, crée un effet de bord

// //pour résoudre ce problème, créer fonction "pure", ne modifie pas ce qu'elle crée en paramètre
// function addDays(date, days) {
//     const newDate = new Date(date.getTime())//récupère timestamp de notre date originale
//     newDate.setDate(newDate.getDate() + days)
//     return newDate
// }
//
// const today = new Date()
// const tomorrow = addDays(today, 1)
// console.log(today, tomorrow)

//Exercice 2

/*Créer une fonction qui permet d'ajouter à la fois des jours, heures, minutes... à une date.*/


// const MONTHS = 'months'
// const DAYS = 'days'
// const YEARS = 'years'
// const MINUTES = 'minutes'

// function addInterval (date, n, unit) {
// const newDate = new Date(date.getTime())
// switch (unit) {
//     case DAYS :
//         newDate.setDate(newDate.getDate() + n)
//         break;
//     case MONTHS :
//         newDate.setMonth(newDate.getMonth() + n)
//         break;
//     case YEARS :
//         newDate.setFullYear(newDate.getFullYear() + n)
//         break;
//     case MINUTES :
//         newDate.setMinutes(newDate.getMinutes() + n)
//         break;
// }
//     return newDate
// }

// const today = new Date();
// const future = addInterval( today, 2, YEARS)

//Autre solution, créer un tableau pour représenter différentes partie de la date
//a chaque partie correspond un index
const MONTHS = 1 //élément à index 1, etc
const DAYS = 2
const HOURS = 3
const MINUTES = 4
const SECONDS = 5
const YEARS = 0

function addInterval (date, interval) {//mon objet prends une date d'entrée et un objet interval
    //on divise la date et l'interval en partie dans un tableau
const parts = [
    date.getFullYear(),
    date.getMonth(),
    date.getDate(),
    date.getHours(),
    date.getMinutes(),
    date.getSeconds(),
    date.getMilliseconds()
]
    for (const [unit, value] of Object.entries(interval)) { //pour chaque objet interval demandé, je modifie les values
        parts[unit] += value //fonction divise le tableau et ajoute à chaques élément n
    }
    return new Date (...parts)

}

const today = new Date();
const future = addInterval(today, { //ici, on communique un objet, cela nécessite modification fonction
    [MONTHS]: 2,
    [DAYS]: 1,
    [YEARS]: 3,
    [MINUTES]: 4,
})
console.log(today)
console.log((future.getTime() - Date.now() / 1000))// montre le nombre de seconde d'écart entre le futur et maintenant