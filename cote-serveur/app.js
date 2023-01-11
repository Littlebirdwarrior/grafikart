//************** readFile permet de lire un fichier (utiliser l'option encoding pour obtenir une chaîne de caractère).

////Méthode synchrone, peu d'intérêt
// import fs from 'node:fs'; //Pour lire demo-deep.txt, utilisation du module file system, dit fs
// const content = fs.readFileSync('demo-deep.txt', {encoding : 'utf-8'}) //ici, encoding utf-8 permet décoder le buffer
// console.log(content)

/*ici, erreur terminal 'SyntaxError: Cannot use import statement outside a module'
et Warning: To load an ES module, set "type": "module" in the package.json or use the .mjs extension.
* Explique que pour l'instant, import pas pris en charge, deux options :
* renomer app.js en app.mjs (crée buffer, tableau binaire) ou rajouter un type module dans la config json*/

//Buffer
/*Un buffer est un espace en mémoire (généralement de la RAM) qui stocke des données binaires.
Dans Node.js, nous pouvons accéder à ces espaces de mémoire grâce à la classe Buffer intégrée. Les buffers stockent une séquence d’entiers,
comme un array en JavaScript. Contrairement aux arrays, vous ne pouvez pas modifier la taille d’un buffer une fois qu’il est créé.
Vous avez peut-être utilisé des buffers sans vous en rendre compte si vous avez déjà écrit du code de Node.js.
Par exemple, lorsque vous lisez à partir d’un fichier avec fs.readFile(), les données renvoyées au callback ou à la
Promise sont un objet buffer. En outre, lorsque des requêtes HTTP sont effectuées dans Node.js, elles renvoient des flux de données
qui sont temporairement stockés dans un buffer interne lorsque le client ne peut pas traiter le flux en une seule fois.
Les buffers sont utiles lorsque vous interagissez avec des données binaires,
généralement à des niveaux de réseau inférieurs. Ils vous donnent également la possibilité d’effectuer
des manipulations fines de données dans Node.js. => https://www.digitalocean.com/community/tutorials/using-buffers-in-node-js-fr */

// //Méthode asynchrone, avec callback, utile car non bloquant,
// import fs from 'node:fs';
// //reçoit deux param, l'erreur et le contenu
// const content = fs.readFile('demo-deep.txt', {encoding : 'utf-8'}, function (err, content) {
//     console.log(content , '2e, callback quand finis de charger')
// })
// console.log('1er car non bloquant')

// // // Méthode asynchrone avec Promise, évite erreurs et permet lire plusieurs fichier à la fois
// import { readFile } from 'node:fs/promises';
// try {
//     //await => crée une promesse, Promise.all([]) permet de grouper les promesses
//     const contents = await Promise.all([
//         readFile('demo-deep.txt', {encoding : 'utf-8'}),
//         readFile('demo-deep-second.txt', {encoding : 'utf-8'})
//     ])
//     console.log(contents)
// } catch (err) {
//     console.log(err.message)
// }

// *************writeFile permet d'écrire dans un fichier (utiliser l'option flag pour ne pas écraser).
//     import { writeFile } from 'node:fs/promises';
//
//     await writeFile('demo-deep.txt', ' Bonjour les gens', {
//         flag: 'a' //permet de ne pas écraser l'origine et d'ajouter du text
//     })

// *************copyFile
// import { copyFile } from 'node:fs/promises';
//
// try {
//     await copyFile('demo-deep.txt', 'demo-deep-second.txt');
//     console.log('source.txt was copied to \'demo-deep-second.txt\'');
// } catch {
//     console.log('The file could not be copied form \'demo-deep.txt\' to \'demo-deep-second.txt\' ');
// }


/* Autres méthodes : unlink permet de supprimer un fichier, rename, readdir permet de lire le contenu d'un dossier*/

//****************stat permet d'obtenir des informations sur un fichier (taille, date de création, date de modification...)
// import { stat, writeFile } from 'node:fs/promises'
//
// const i = await stat ('demo-deep.txt')
// console.log(i)
/* infos intéressantes
 size: 99, taille du fichier
birthtime: 2023-01-03T17:49:07.267Z date de création
* */

// //****************Open (ouvrir et verrouiller un fichier pd modification, utile si boucles)
// import {open} from 'node:fs/promises'
// const file = await open ('demo-deep.txt', 'a')//flag permet éviter réécriture
// file.write(' Hello')//action
// file.close()//ferme le fichier
//
// //**************** watch (Observer un dossier et liste tous évènement)
//
// import {watch} from 'node:fs/promises'
// //retour de watch, pas promesses mais asynciterator, un for of qui renvois une promesse à chaque tours
// //plusieurs options, dont récursives, observe ts les fichier
// const watcher = watch('./') //ici, observe le chemain courant
// for await (const event of watcher) {//for await, évite le watcher
//     console.log(event)
// }//ici pas de résultat terminal, process ne se quitte pas jusqu'a évenement
// //objet et méthode de type change dans terminal (rename, change)
// //coupe évènement cmd c





//Exercice - readdir
/*créer une fonction permettant de lister les éléments qui se situent dans le fichier courant,
et ce de manière non récurssive*/

import { readdir } from 'node:fs/promises'
import { stat } from 'node:fs/promises'

const wait = (duration) => new Promise(resolve => setTimeout(resolve, duration))

// try {
//     const files = await readdir('./', {withFileTypes : true})//sauvegarder liste des fichiers dispo à la racine ds files
//     for (const file of files) {
//         const {size} = await stat(file.name) //ici, on utilise la partition {}, on isole une seule propriété de stat - la size
//         console.log(`${file.isDirectory() ? 'D' : 'F'} - ${file.name} -${size}oct`)
//         // //ici, notation en ternaire qui pose condition "est-ce un dossier", si oui, 'D', si contraire "F"
//     }
// } catch (err) {
//     console.error(err);
// }


//// solution plus rapide
try {
    console.time('label')
    const files = await readdir('./', {withFileTypes : true})
    await Promise.allSettled(
        files.map(async (file) => {
            const parts = [
                file.isDirectory() ? 'D' : 'F',
                file.name
            ]
            if (!file.isDirectory()){
                const {size} = await stat(file.name)
                parts.push(`${size}o`)
            }
            console.log(parts.join(' - '))
        })
    )
} catch (err) {
    console.error(err);
}
console.timeEnd('label')