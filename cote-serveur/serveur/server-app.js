import {createServer} from 'node:http'
import {createReadStream} from 'node:fs'
import { json, text } from 'node:stream/consumers'



// // Create a local server to receive data from
// const server = createServer((req, res) => { //comprend une requete et une reponse
//     const file = createReadStream('index.html')
//     // res.write('Hello') // écrit directement ds le fichier
//     res.writeHead(200, { //statut = code, ex: 404 = page n'existe pas
//         'Content-Type': 'text/html'
//     });
//     file.pipe(res, { end:false})
//     file.on('end', () =>{
//      res.end() //cloture le flux, ne pas le faire si l'intention d'écrire autre chose derière
//     })
// });
//
// server.listen(8888);

// // Qu'est ce que l'objet request - comment l'afficher
// const server = createServer((req, res) => {
//     console.log(req.headers.accept) // comme ça
//     const file = createReadStream('index.html')
//     res.writeHead(200, {
//         'Content-Type': 'text/html'
//     });
//     file.pipe(res)
//     file.on('end', () =>{
//         res.end()
//     })
// });
//
// server.listen(8888);

// // Afficher l'url (http://localhost:8888/hello?param1=bonjour)
// const server = createServer((req, res) => {
//     // console.log(req.url) // renvois /hello?param1=bonjour, le chemain, quel fichier à été demander
//     const url = new URL( req.url, `http://${req.headers.host}`);//construit une url affichant le nom de domaine
//     res.write(`Bonjour ${url.searchParams.get('name')}`) // à l'url (http://localhost:8888/hello/aze/?name=john), affiche Bonjour John
//     res.end()
//     console.log(url) // searchParams: URLSearchParams { 'name' => 'john' }
// });

// server.listen(8888);

//Req, peut envoyer des informations par le body
const server = createServer( async (req, res) => {
    const url = new URL(req.url, `http://${req.headers.host}`) //c'est important, permet qqchose url

        //     // sans méthode
        // let body = '';
        // req.on('data', (chunk) => {
        //     body += chunk
        // })
        // req.on('close', () => {
        //     console.log(body)
        //     res.end()
        // })

    // // avec méthode stream/consumers
    // console.log(`Bonjour ${(await json(req)).name}`) //callback async pour recevoir la réponse en json
    res.write(`Coucou ${(await json(req)).name}`) //
    res.end()

});


server.listen(8888);