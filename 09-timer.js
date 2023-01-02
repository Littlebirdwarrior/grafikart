//Exo 1 : afficher 5 fois bonjour

// let i = 0
// const t = setInterval(() => {
//         i ++
//         console.log('Bonjour')
//         if (i>= 5){
//                 clearInterval(t)
//         }
// }, 1000);

//Exo 2 : fonction décompte
//  function decompte(n){
//          console.log(n)
//          const c = setInterval(() => {
//                  n--
//                  console.log(n)
//                  if(n===0 ){
//                         clearInterval(c)
//                  }
//          }, 1000)
//  }
//         decompte(5)

//Autre ecriture
function decompte(n){
    console.log(n)
    if(n===0) {
        return
    }
    setTimeout(() => {
        decompte(n-1)
    }, 1000)
}
decompte(3)