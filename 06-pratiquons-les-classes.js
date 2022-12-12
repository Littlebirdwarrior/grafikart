//Prise de notes ici

//Pratiquons les classes

/*Exercices 1
* Notre code JavaScript va être utilisé dans un outil de dessin et on a besoin de class
* pour représenter nos formes géométriques. On se concentrera sur la création de rectangle et de carré.
Le rectangle sera construit à l'aide de 2 informations (la largeur et la hauteur).
* Le carré lui sera construit qu'avec une seule dimension et sera l'extension du rectangle.*/

// class Rectangle {
//     constructor(width, height) {
//         this.width = width
//         this.height = height
//     }
//
//     get perimeter () {
//         return this.width + this.height * 2
//     }
//
//     get isValid () {
//         return this.width > 0 && this.height > 0
//     }
//
//     isBiggerThan (shape){
//         return this.perimeter > shape.perimeter
//     }
// }
//
// class Square extends Rectangle{
//     constructor(width) {
//         super(width,width)
//     }
//
// }
//
// const r = new Rectangle(10, 20);
// console.log(r.perimeter) // 60
// console.log(r.isValid) // true
// const r2 = new Rectangle(-10, 20);
// console.log(r2.isValid) // false
// const c = new Square(10);
// console.log(c.perimeter) // 40
// console.log(r.isBiggerThan(c)) // true


//Exercice 2
/* Dans cet exercice on cherche à gérer une bibliothèque de livres.
On commencera par créer une class qui permettra de représenter un livre
(on construira l'objet avec un titre et un nombre de page). On aura ensuite plusieurs propriétés / méthodes utiles

page, renverra la page courante du livre (1 par défaut)
nextPage(), permet de tourner la page et incrémentera la page courante
close(), permet de fermer un livre (revenir à la 1ère page)
Ensuite on créera une class Library pour organiser nos livres.

addBook(), permet de rajouter un livre à la bibliothèque
addBooks([]), permet de rajouter plusieurs livres d'un coup (on lui passera un tableau)
findBooksByLetter('s'), permet de lister tous les livres qui ont un titre qui commence par la lettre indiquée
* */

class Book {
    #page = 1

    constructor(title, pages) {
        this.pages = pages
    }
    //les getter permettent d'empêcher les setteur coté utilisateurs
    get page () {
        return this.#page
    }

    nextPage(){
        if(this.#page < this.pages){
            this.#page++
        }
    }

    close() {
        this.#page = 1
    }
}
//methodo, noté toutes les méthodes pour pouvoir travailler ensuite

class Library {
    #books = [] //créer un tableau vide permet de mettre tous les livres au même niveau et de rajouter des méthodes de filtre par la suite

    addBook (book) {
        this.#books.push(book)
    }

    addBooks(books) {
        for(let book of books) {
            this.addBook(book)
        }
    }//ForEach, this est undefined, origine d'une erreur car this désigne autre chose, je n'arrive pas à le débuger

//filter, crée une shallow copie du tableau
    findBooksByLetter(letter) {
        return this.#books.filter((book) => book.title[0].toLowerCase() === letter.toLowerCase())
    }

    /*byLetter(letter) {
        found = [];
        for(let book of this.#books) {
            if(book.title[0].toLowerCase() === letter.toLowerCase()) {
                found.push(book)
            }
        }
    }*/

}

const b = new Book('Seigneur des anneaux', 200);
console.log(b)
console.log(b.page)
b.nextPage()
console.log(b.page)
b.close()
console.log(b.page)

const l = new Library()
l.addBook(b)
l.addBooks([
    new Book('Ready player one', 100),
    new Book('Oui-oui', 10),
    new Book('Sillage', 50),
])

console.log(Library)
console.log(l.findBooksByLetter('S'))



