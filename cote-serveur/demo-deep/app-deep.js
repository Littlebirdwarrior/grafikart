import {readFile} from 'node:fs/promises'
//ENOENT - erreur synifie que l'on ne trouve pas le fichier
//Parfois, pas acces au fichier courant, dans ce cas :
console.log(import.meta.url) //permet récupère le nom du ficher dans terminal : file:///Users/camille/Sites/github/grafikart/cote-serveur/demo-deep/app-deep.js
//URL, pas pratique, pour retrouver chemain relatif
import {fileURLToPath} from 'node:url'
console.log(fileURLToPath(import.meta.url))
//Pour retrouver le dossier, anciennement dirname,
import {dirname, join} from 'node:path'
const dir = dirname(fileURLToPath(import.meta.url))
const filename = join(dir, 'demo-deep.txt')


console.log(await readFile('demo-deep.txt', {encoding : 'utf-8'}))
