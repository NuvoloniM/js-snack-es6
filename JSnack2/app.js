/*Snack2
Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà:
Punti fatti e falli subiti.
Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti 
e stampiamo tutto in console.
*/

const serieB = [
    {
        'nomi' : 'Cremonese',  
        'punti' :0,
        'falli' :0
    },
    {
        'nomi' : 'Pisa',  
        'punti' :0,
        'falli' :0
    },
    {
        'nomi' : 'Monza',  
        'punti' :0,
        'falli' :0
    },
    {
        'nomi' : 'Lecce',  
        'punti' :0,
        'falli' :0
    },
    {
        'nomi' : 'Brescia',  
        'punti' :0,
        'falli' :0
    },
    {
        'nomi' : 'Benevento',  
        'punti' :0,
        'falli' :0
    }
]
console.log(serieB);

let classifica = document.getElementById('classifica');
//inizialzo array vuoto
let rank = [];
//per ogni elemento dlel'array
for (let i = 0; i < serieB.length; i++) {
    //modifico nell'obj dell'array il valore della key punti e di quella dei falli
    let randomPunti = getRandomArbitrary(1,100);
    serieB[i].punti = randomPunti;
    let randomFalli = getRandomArbitrary(1,50);
    serieB[i].falli = randomFalli; 
    let {nomi, falli} = serieB[i];
    //pusho gli oggetti con i nuovi valori nell'array   
    rank.push({nomi,falli});
    console.log(rank);
    classifica.innerHTML +=
    `
    <div> ${nomi} falli : ${falli}</div>
    `
}

//funzione per creare numero random
function getRandomArbitrary(min, max) {
    return Math.round(Math.random() * (max - min) + min);
  }
  