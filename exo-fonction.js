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