/*LES FONCTION USUELLES*/
//************Les fonctions sur les tableaux
//-la méthode at
//permet d'inverser l'inspection d'un tableau
const notes = [12,17,18]
console.log(notes.at[-1])

//-contact
//permet de fusionner deux tableau
const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
const array3 = array1.concat(array2);
console.log(array3, 'mes tableaux 1 et 2 fusionnés');

//-fill
//écraser un tableau avec des valeurs spécifique
const array4 = [1, 2, 3, 4, 5, 6, 7];

// fill with 0 from position 2 until position 4
console.log(array4.fill(0, 2, 4), '0 en index 2 à 4');
// expected output: [1, 2, 0, 0, 5, 6, 7]

// fill with 5 from position 1
console.log(array4.fill(5, 1), '5 à partir de index 1');
// expected output: [1, 5, 5, 5, 5, 5, 5]

console.log(array4.fill(6), '6 partout');
// expected output: [6, 6, 6, 6, 6, 6, 6]

//-filter
const values = [12,17,18,9,5]
const goodValues = values.filter((value) => value >= 10)
console.log(goodValues, "mes valeurs filtrées supérieures à 10") //crée nouveau tableau ! utiliser pour supprimer élément dans un tableau

//les find * permet explorer tableau et trouver éléments*
//permet récupérer 1er éléments correspondant à une condition

const array5 = [5, 12, 8, 130, 44];

const found = array5.find(element => element > 10);

console.log(found , "find > 10");
// expected output: 12

//findIndex
//renvois index de l'élément trouvé
const array6 = [5, 12, 8, 130, 44];

const isLargeNumber = (element) => element > 13;

console.log(array6.findIndex(isLargeNumber) , 'find index > 13');
// expected output: 3

//findLast
//renvois dernier éléments correspondant à la condition

const array7 = [5, 12, 50, 130, 44];

const foundLast = array7.findLast((element) => element > 45);

console.log(foundLast, 'find last > 45');
// expected output: 130

//flat
//permet de réduire les niveaux de profondeur d'un tableau (les tableaux dans des tableaux)
const arr1 = [0, 1, 2, [3, 4]];

console.log(arr1.flat() , 'tout aplatir');
// expected output: [0, 1, 2, 3, 4]

const arr2 = [0, 1, 2, [[[3, 4]]]];

console.log(arr2.flat(2) , 'limiter la profondeur à 2 tableau,');
// expected output: [0, 1, 2, [3, 4]]

//forEach
// substitut de for ... of, permet de parcourir les éléments d'un tableau et d'y appliquer un truc
//utilise valeur et index, permet d'agir sur les deux, et permet de réutiliser cette fonction sur plz tableaux contrairement aux boucles

const fleurs = ['la rose', 'la jonquille', 'la pensée', 'l\'azalée']
fleurs.forEach((fleur, index) => {
        console.log(`voici ${fleur} d'index ${index} de mes fleurs`)
    }
)

//from
//crée tableau à partir de différentes choses, utile si itération à convertir en tableau
console.log(Array.from('foo'), "épelle 'foo'" );
// expected output: Array ["f", "o", "o"]

console.log(Array.from([1, 2, 3], x => x + x) , 'additionne chaque nombre lui-même pour [1, 2, 3]');
// expected output: Array [2, 4, 6]

//include
//vérifier si valeurs contenue dans un tableau, évite de passer par condition

const pets = ['cat', 'dog', 'bat'];

console.log(pets.includes('cat'),
    '[\'cat\', \'dog\', \'bat\'], Does it include a cat ?');
// expected output: true

console.log(pets.includes('mice'),
    '[\'cat\', \'dog\', \'bat\'], Does ut include a mice ?');
// expected output: false

//indexOf
//renvoie la valeur de l'index si l'élément existe, sinon, renvois -1
console.log(pets.indexOf('bat'),
    '[\'cat\', \'dog\', \'bat\'], Where is the bat\'s place ?')
//expected output. 2
console.log(pets.indexOf('giraffe'),
    '[\'cat\', \'dog\', \'bat\'], Where is the giraffe\'s place ?')
//expected output. -1 - there is no giraffe here

//join
const elements = ['Fire', 'Air', 'Water'];
console.log(elements.join(),
    '[\'Fire\', \'Air\', \'Water\'], join(), just word');
// expected output: "Fire,Air,Water"
console.log(elements.join(''),
    '[\'Fire\', \'Air\', \'Water\'], join(\'\'), combine word');
// expected output: "FireAirWater"
console.log(elements.join('-'),
    '[\'Fire\', \'Air\', \'Water\'], join(\'-\'), add a dash');
// expected output: "Fire-Air-Water"

//les map
//permettent de réunir des informations
const array8 = [1, 4, 9, 16];
// pass a function to map
const map1 = array8.map(x => x * 2);
console.log(map1, 'voici ma map');
// expected output: Array [2, 8, 18, 32]

const persons = [
    {firstname : 'John', lastname:'Doe'},
    {firstname : 'Jane', lastname:'Doe'},
    {firstname : 'Marc', lastname:'Doe'},
    {firstname : 'Sophie', lastname:'Doe'},
    {firstname : 'Jenny', lastname:'Doe'},
]
console.log(
    persons
        .map((p) => p.firstname + ' ' + p.lastname)
        .join('\n')
)

//pop
// supprime le dernier élément d'un tableau et retourne cet élément.
// Cette méthode modifie la longueur du tableau.

const rainbow = ['red', 'orange' , 'yellow', 'green', 'blue', 'purple'];
console.log(rainbow.pop())
console.log(rainbow)
//expected output 'purple'
rainbow.forEach(() => {
    console.log(rainbow.pop())
    console.log(rainbow)
})
//expected output: cite chaque couleurs puis la retire du tableau jusqu'a index 1

console.log(rainbow)
rainbow.pop()
console.log(rainbow)
//expected output red

//reduce
const height = [1, 2, 3]
console.log(
    height.reduce(( acc, height)=> {
        return acc + height
    }, 0)
)

//shift
//La méthode shift() permet de retirer le premier élément d'un tableau et de renvoyer cet élément.
// Cette méthode modifie la longueur du tableau.
//Slice
//La méthode slice() renvoie un objet tableau, contenant une copie superficielle (shallow copy) d'une portion du tableau d'origine,
// la portion est définie par un indice de début et un indice de fin (exclus). Le tableau original ne sera pas modifié.

const animals = ['bison', 'zebra', 'camel', 'duck', 'elephant', 'gorilla', 'fumeck']
console.log( animals.slice(1))
console.log( animals.slice(3, 4))
console.log( animals.slice(-1))
console.log( animals.slice(2))
console.log( animals.slice(2, -2))



//****************Les fonctions sur les nombres
//****************Les fonctions sur les chaînes de caractères

//****************Les fonctions sur les objets
//****************Les fonctions sur les fonctions