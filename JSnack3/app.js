/*
Snack 3
Dato l'array di nomi:
const myArray = ['Michele', 'Fabio', 'Roberto', 'Giovanni', 'Simone', 'Chiara'];
e dati due numeri min e max (min più piccolo di max).
Creiamo un nuovo array contenente i valori che hanno la posizione compresa tra i due numeri.
Eseguiamo questo esercizio prima con forEach e poi con filter.
*/

const myArray = ['Michele', 'Fabio', 'Roberto', 'Giovanni', 'Simone', 'Chiara'];
const newArray = [];
// let filteredArray = [];
let min;
let max;


ask();
function ask() {
    min = parseInt(prompt('Inserisci un numero tra 1 e 6'));
    max = parseInt(prompt('Inserisci un numero più alto del precedente, ma non superiore di 6'));
    if (isNaN(min) == true || min == '' || isNaN(max) == true || max == '' || max < min || max > myArray.length || min < 0) {
        alert('Numero non valido');
        ask();
    } else {
        //for each method
        // myArray.forEach((element, index) => {
        //     if (index > (min - 1) && index < (max - 1)) {
        //         newArray.push(element);
        //     }
        // })
        //filter method
        const filteredArray = myArray.filter((element, index) => {
            return index > (min - 1) && index < (max - 1);
        })
        console.log(filteredArray);
    }
}

console.log(newArray);






