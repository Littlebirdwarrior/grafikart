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