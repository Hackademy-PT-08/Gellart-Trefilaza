//exercise_06


// Definisci un oggetto **playlist** che contiene una proprietà **canzoni**. La prorietà canzoni dovrà essere un array.

// Inserisci una o 2 canzoni in maniera dinamica e ciascuna deve avere le seguenti proprietà:

// - titolo
// - nomeCantante
// - anno

// Ad ogni canzone inserita stampa in console tutte le canzoni.

// const playlist = {
//     song1: [
//         title = `Playing god`,
//         author = `Pholipya`,
//         year = 2022
//     ]
// };


// playlist.song2 = [`Stairway to heaven`, `Led Zeppeling`, 1971];
// playlist.song3 = [`Play the part`, `Two feet`, 2022];

// console.log(playlist);






//exercise_02

// Definisci un oggetto ** rubrica ** che ha come proprietà gli ** utenti **
//     Per ogni utente specificare altre proprietà: ** nome ** , ** cognome ** , ** telefono ** e ** indirizzo ** .
// Dove indirizzo è a sua volta un altro oggetto contenente altre proprietà(via, città, ecc).

// -
// Quindi popolare la rubrica con dei dati a piacere. -
//     Crea un metodo all’ interno dell’ oggetto che restituisca nome cognome e telefono. -
//     Dopo eliminare un elemento e visualizzare nuovamente la rubrica così ottenuta. -
//     Crea poi una funzione che scorra tutti gli utenti all’ interno della rubrica.


/*rubrica object with user property that have other properties
and address have other properties*/

// const rubrica = [{
//     user1: {
//         name: "Antonio",
//         surname: "Rossi",
//         phone: 32648664641358,
//         address : {
//             city : `Roma`,
//             number : 55,
//         },
//         info: function () {
//             return `${this.name} ${this.surname}`;
//         },
//     },
//     user2: {
//         name: "Marco",
//         surname: "Bianchi",
//         phone: 4540844054614060,
//         address : {
//             city : `Milano`,
//             number : 78,
//         },
//         info: function () {
//             return `${this.name} ${this.surname}`;
//         },
//     },
//     user3: {
//         name: "Luigi",
//         surname: "Blue",
//         phone: 0564465456442146,
//         address : {
//             city : `Napoli`,
//             number : 88,
//         },
//         info: function () {
//             return `${this.name} ${this.surname}`;
//         },
//     },
//     user4: {
//         name: "Andrea",
//         surname: "Verde",
//         phone: 198728974546545464,
//         address : {
//             city : `Udine`,
//             number : 66,
//         },
//         info: function () {
//             return `${this.name} ${this.surname}`;
//         },
//     }
// }]

// console.log(rubrica);

// //delete user3 form the rubrica
// delete rubrica.user3

// //a function that check all the user in the rubrica
// function checkRubrica(params) {
//     rubrica.forEach(element => {
//         console.log(element);
//     });
// };

// checkRubrica();



//exercise_03 

// Definisci un oggetto che rappresenti un garage. Dovrà contenere una lista di automobili.
// Per ciascuna automobile dovrà essere definito un attributo marca e modello  (es {brand : ‘renault’ , model : ‘twingo’}).

// Crea un metodo all’interno dell’oggetto che restituisca tutti i dati della macchina ad es: `“Renault - Twingo”`

// Scrivi poi una funzione che stampi in console tutti i modelli presenti nel garage.

//garage object

// const garage = [{
//     car1: {
//         brand: `Ford`,
//         model: `Mustang Dark horse`,
//         hp: 500,
//         info: function () {
//             return `${this.brand} - ${this.model} - ${this.hp}`
//         },
//     },
//     car2: {
//         brand: `Mitsubishi`,
//         model: `Evo lancer`,
//         hp: 280,
//         info: function () {
//             return `${this.brand} - ${this.model} - ${this.hp}`
//         },
//     },
//     car3: {
//         brand: `BMW`,
//         model: `M3 Competition`,
//         hp: 503,
//         info: function () {
//             return `${this.brand} - ${this.model} - ${this.hp}`
//         },
//     }
// }];

// // console.log(garage);

// function checkGarage(params) {

//     for (let i = 0; i < garage.length; i++) {
//         console.log(garage[i]);
//     }

// };

// checkGarage();






//exercise_04

// Scrivi una funzione che, per il sito www.lamiasuperlibreria.aulab, prenda in input la lista “libri” ed una “categoria” passata dall’utente. Il programma dovrà ritornare una lista di tag anchor (naturalmente questi devono essere delle semplici stringhe da mostrare in console) con il relativo url e come contenuto il titolo del libro. Questa lista dovrà contenere  solo gli elementi appartenenti alla categoria espressa in input.

// La creazione della url dovrà rispettare queste regole:

// - tutte le lettere devono essere minuscole
// - gli spazi devono essere sostituiti con il simbolo “-”
// - la prima parte della url sarà il nome dell’autore e l’ultima il nome del libro unito a “.html”

// esempio lista libri:

// const LIBRI = [
//     {
//       titolo: "Il Signore degli Anelli",
//       autore: "Tolkien",
//       categoria: "fantasy"
//     },
//     {
//       titolo: "Harry Potter",
//       autore: "Rowling",
//       categoria: "fantasy",
//     },
//     {
//       titolo: "Il Conte di Montecristo",
//       autore: "Dumas",
//       categoria: "narrativa classica"
//     },
//     {
//       titolo: "Dune",
//       autore: "Herbert",
//       categoria: "fantascienza"
//     },
//     {
//       titolo: "Fight Club",
//       autore: "Palahniuk",
//       categoria: "narrativa moderna"
//     }
//   ]

// esempio url:

// `www.lamiasuperlibreria.aulab/tolkien/il-signore-degli-anelli.html`

// esempio tag anchor:

// `<a href=”www.lamiasuperlibreria.aulab/tolkien/il-signore-degli-anelli.html”>Il signore degli anelli</a>`

// esempio output finale:

// [ 
// 	'<a href=”www.lamiasuperlibreria.aulab/tolkien/il-signore-degli-anelli.html”>Il signore degli anelli</a>', 
// 	'<a href=”www.lamiasuperlibreria.aulab/herbert/dune.html”>Dune</a>' 
// ]


let categoria = `fantasy`;

const LIBRI = [
    {
      titolo: "Il Signore degli Anelli",
      autore: "Tolkien",
      categoria: "fantasy"
    },
    {
      titolo: "Harry Potter",
      autore: "Rowling",
      categoria: "fantasy",
    },
    {
      titolo: "Il Conte di Montecristo",
      autore: "Dumas",
      categoria: "narrativa classica"
    },
    {
      titolo: "Dune",
      autore: "Herbert",
      categoria: "fantascienza"
    },
    {
      titolo: "Fight Club",
      autore: "Palahniuk",
      categoria: "narrativa moderna"
    }
]

function checkLIBRI() {
  
  LIBRI.forEach(element => {
    console.log(element);

    

    if (categoria === LIBRI.categoria) {
      let autore = LIBRI.autore.toLowercase();
      let libro = LIBRI.titolo.toLowercase();
      let url = `www.lamiasuperlibreria.aulab/tolkien/il-signore-degli-anelli.html`
      const link = `<a href="${url}">${LIBRI.titolo}</a>`;
      console.log(link);
    }

    
  });

}

let risultatoFinale = checkLIBRI(LIBRI, categoria);
console.log(risultatoFinale);