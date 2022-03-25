/*Snack 1
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore utilizzando destructuring e template literal
*/

//inizializzo array bici
const bici = [
    {
      'nome': 'Orbea - Orca M40',
      'peso': 9.64,
    },
    {
      'nome': 'Kona - Rove NRB SE',
      'peso': 9.98,
    },
    {
      'nome': 'Ridley - Fenix SL Ultegra Mix',
      'peso': 8.32,
    },
    {
      'nome': 'Kona - Libre CR, beige',
      'peso': 9.94,
    },
    {
      'nome': 'Marin - Headlands 2',
      'peso': 9.71,
    }
]

let stamp = document.getElementById('stamp');
//inizializzo valore bici peso inferiore mettendo il primo oggetto 
let light = bici[0];
//per ogni elemento nell'array
for (let i = 0; i < bici.length; i++) {
    //controllo se il valore nella chiave peso vecchio è maggiore del valore dell'oggetto [i]. se si viene sostituito
    if (light['peso'] > bici[i]['peso'] ) {
        light = bici[i];
    }
    console.log(light)
}
//destrutturo le chiavi in variabili
let {nome, peso} = light;
//stampo in html i valori delle variabili del oggetto più leggero (light)
stamp.innerHTML = 
`
<div> La bici più leggera disponibile in negozio è : ${nome} e pesa solamente ${peso} kg</div>
`
