//Les stream

/*Un Stream, c’est un flot de données de taille inconnue, dont le contenu est accessible par paquets
(« chunk » en anglais) au fil du temps, de manière asynchrone.
On peut l’opposer au Buffer. Un Buffer est un bloc de données de taille connue à l’avance et
dont le contenu est accessible de manière synchrone.

Prenons un exemple.

Lire une vidéo dans un Buffer, vous oblige à la télécharger entièrement avant d’en commencer la lecture.
A contrario, la lire en Streaming vous permet de lancer la lecture presque immédiatement,
dès que les premiers « chunks » ont été téléchargés.
En d’autres termes, dans un Buffer, une donnée incomplète est une donnée corrompue et n’est donc pas exploitable,
alors que dans un Stream, la donnée est consultée dans une fenêtre temporelle et est donc par nature, incomplète à chaque instant.

En fait, en interne, un Stream utilise justement un Buffer comme zone tampon, pour stocker les chunks qu’il détient.

Lorsqu’un Stream produit des chunks, qu’il stocke donc dans son Buffer interne en vue de leur consommation par l’extérieur,
on dit que ce Stream est accessible en lecture (ou « Readable »). Et lorsque depuis l’extérieur,
on peut pousser des chunks dans le Buffer interne d’un Stream en vue de leur traitement, on dit que ce Stream est accessible en écriture
(ou « Writable »).

Mais un Stream, c’est aussi un émetteur d’événements (ou « EventEmitter »),
auxquels vous allez pouvoir vous abonner pour le suivre, tout au long de son cycle de vie.
Par exemple, un Stream « Readable » va émettre un événement "readable", pour indiquer à celui qui le consomme,
que de la donnée est prête à être consommée.

En résumé, l’équation est assez simple : Buffer + EventEmitter = Stream.
source : https://blog.engineering.publicissapient.fr/2020/02/19/implementer-et-consommer-les-streams-readable-et-writable-de-node-js/*/

//Exemple : Stream permettant de copier une vidéo dans un autre fichier
//Problème: créer des flux de lecture pour éviter de bloquer le script d'écriture pendant la lecture :
// le stream permet de séquencer les données et de les envoyer progressivement

import { createReadStream } from 'node:fs'
import { createWriteStream} from 'node:fs'
import { stat } from 'node:fs/promises';

const readStream = createReadStream('video-1.mp4')
const writeStream = createWriteStream('video-1-copy.mp4')
const {size} = await stat('video-1.mp4')
let read = 0
let progress = 0

//je crée une fonction pour suivre l'avencée de lecture du readStream
readStream.on('data', (chunk) => {
    read += chunk.length
    progress = Math.round(100* read/size)
    console.log(progress)
})
readStream.on('end', () => {
    console.log('fin de la lecture')
})

//je crée une fonction pour coordonée la lecture et l'écriture de fichiers

readStream.pipe(writeStream) // Pipe, flux de lecture envoyé dans un flux d'écriture simultanément

// // Le flux writeStream sera clôturé automatiquement à la fin de la lecture et
// // La synchronisation est gérée en interne et si un des flux est plus lent alors
// // la lecture ou l'écriture pourra être mis en pause afin d'optimiser les performances.

/* le stream est un type de donnée que l'on retrouvera dans de nombreux module de NodeJS :
 - process.stdout et process.stderr sont des flux d'écriture permettant d'afficher des informations au niveau du terminal.
 - http.ServerResponse, l'objet permettant de représenter une réponse du serveur HTTP, sera un flux dans lequel on pourra écrire.
 - http.IncomingMessage, l'objet qui représentera une requête entrante dans le cas d'un serveur HTTP sera un flux accessible en lecture.*/