/*LES ERREURS*/

class Rectangle {
    constructor(width, height) {
        //Parfois nos fonctions vont recevoir des paramètres qui ne conviennent pas
        // et il faudra être capable de renvoyer une erreur quand cela arrive.
        // Il est possible de renvoyer une erreur à l'aide de l'opérateur throw qui coupe l'execution du scripte
        //Faire message + explicite possible
        if(width <0 || height <0){
            throw new Error('construction Rectangle pas possible avec valeurs négatives')
        }
        this.width = width
        this.height = height
    }


    get perimeter () {
        return this.width + this.height * 2
    }
}

class Square extends Rectangle{
    constructor(width) {
        super(width,width)
    }


}

/*Vous pouvez aussi créer des classes d'erreur personnalisées
pour pouvoir les identifier par la suite*/

class PromptError extends Error {
}

function promptRectangle(){
    /*Le throw va faire remonter l'erreur et bloquer le script si elle n'est pas capturée.
    Il est possible de capturer les erreurs en utilisant le try...catch
    Il est à mettre après la classe*/
    try{
        const width =  parseInt(prompt('Largeur'), 10)
        const height =  parseInt(prompt('Hauteur'), 10)
        const r = new Rectangle(width, height)
        console.log(r.perimeter)
        /* Le catch dans console souvent illisible,
        Il est possible de re-envoyer une erreur et
        d'utiliser la cause pour conserver la cause originale du problème
        On peut mettre un code erreur (ex: dans la construction de cote-serveur, cause : 404)*/
    }catch (e){
        throw new Error ('Entrée utilisateur invalide', {cause: e})
    }
}


/* Afficher l'erreur de la classe (ici, code du prof ne marche pas ;)*/
try {
    promptRectangle()
} catch (e) {
    if (e instanceof PromptError) {
        console.log('PromptError', {cause : e})
    } else {
        console.log('erreur classique', {cause : e})
    }
}



/*L'objet Error sera construit avec une chaine de caractères qui permettra de décrire la raison de l'erreur.
On pourra aussi lui passer un objet en second argument qui contiendra une propriété cause qui permettra de donner plus
d'informations sur la cause de l'erreur.(!) pas standar sur tous navigateur*/

