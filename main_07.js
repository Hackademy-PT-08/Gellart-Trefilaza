
//exercise_01

// Scrivi una funzione Javascript che stampi in console se un libro è stato letto o meno controllando
//  la proprietà dell’oggetto readingStatus

//  const library = [ 
//     {
//         title: 'Bill Gates',
//         author: 'The Road Ahead',
//         readingStatus: true
//     },
//     {
//         title: 'Steve Jobs',
//         author: 'Walter Isaacson',
//         readingStatus: true
//     },
//     {
//         title: 'Mockingjay: The Final Book of The Hunger Games',
//         author: 'Suzanne Collins',
//         readingStatus: false
//     }
// ];

// - Se la proprietà è true allora stampare a console:
// `${titolo del libro} di ${autore del libro} è stato letto!`
// - Se la proprietà è false allora stampare a console:

//     `${titolo del libro} di ${autore del libro} non è ancora stato letto!`



// const library = [ 
//     {
//         title: 'The Road Ahead',
//         author: 'Bill Gates',
//         readingStatus: true
//     },
//     {
//         title: 'Walter Isaacson',
//         author: 'Steve Jobs',
//         readingStatus: true
//     },
//     {
//         title: 'Suzanne Collins',
//         author: 'Mockingjay: The Final Book of The Hunger Games',
//         readingStatus: false
//     }
// ];



// function checkIfBookWasRed() {

//     library.forEach(element => {
//         console.log(element);

//         if (library.readingStatus === true) { // CORREZIONE: Non hai bisogno di fare === true ma basta if (library.readingStatus)
//             console.log(`${library.title} di ${library.author} è stato letto!`)
//         } else {
//             console.log(`${library.title} di ${library.author} non è ancora stato letto!`)
//         }
//     });

// }

// checkIfBookWasRed();



//exercise_02

// Definisci un oggetto che rappresenti una sala da bowling, dovrà contenere un’array di giocatori che saranno formati dalle proprietà, nome e punteggi.

// Creare una funzione che calcoli il totale di ogni giocatore e estragga il vincitore della partita.

// const bowling = {
//     players: [
//       { name: "Giocatore 1", scores: [10, 7, 9, 7, 6, 10, 10, 9, 10, 8, 7, 10, 10, 10, 9, 8, 10] },
//       { name: "Giocatore 2", scores: [9, 8, 10, 10, 7, 10, 10, 10, 9, 10, 8, 7, 10, 10, 10, 9, 10] },
//       { name: "Giocatore 3", scores: [10, 10, 7, 8, 10, 7, 9, 8, 10, 10, 10, 9, 8, 10, 10, 10, 7] }
//     ]
//   };

//   // Expected output: Il Vincitore è il Giocatore 2 con 157 punti totali

//   **TIP**: LAVORATE CON LE FUNZIONI.

// Ad es: `checkWinner(bowling)`

// **TIP**: Aggiungete una proprietà `total` per ogni oggetto Player `{ name: “xxx”, scores: [7, 9, 10], total: 123 }`


// const bowling = {
//     players: [
//         { name: "Giocatore 1", scores: [10, 7, 9, 7, 6, 10, 10, 9, 10, 8, 7, 10, 10, 10, 9, 8, 10] },
//         { name: "Giocatore 2", scores: [9, 8, 10, 10, 7, 10, 10, 10, 9, 10, 8, 7, 10, 10, 10, 9, 10] },
//         { name: "Giocatore 3", scores: [10, 10, 7, 8, 10, 7, 9, 8, 10, 10, 10, 9, 8, 10, 10, 10, 7] }
//     ]
// };

// function checkWinner(bowling) {

//   //mi son bloccato Marco CORREZIONE :D :D :D ti lascio lo svolgimento dell'esercizio di seguito
//     bowling.players.forEach(giocatore => {
//        let totalSum = 0;
//        totalSum =  giocatore.scores.reduce(())
//     });
// }

// checkWinner();

/* CODICE MARCO */
/*

function playersTotal(bowling) {
  const players = bowling.players;

  for (let i = 0; i < players.length; i++) {
    const player = players[i];
    const scores = player.scores;

    let total = 0;

    scores.forEach(score => total += score); // anche map()
		// players[i].scores.forEach()

    player.total = total;
		// players[i].total = total;
  }
}


function checkWinner(bowling) {
  const players = bowling.players;

  let winner;
	// const totals = players.map(player => player.total);
	const maxScore = Math.max(...players.map(player => player.total))
	// const maxScore = Math.max(...totals);

  for (let i = 0; i < players.length; i++) {
    if (players[i].total >= maxScore ) {
      winner = players[i];
    }
  }

	//players.forEach(player => {
		//if (player.total >= maxScore ) {
	     //winner = players[i];
    //}
	//});

  return winner;
}


playersTotal(bowling);
const winner = checkWinner(bowling);

console.log(winner);

*/




//exercise_03  DA FINIRE

const weekDays = {
    monday : [
        event = {
            nomeEvento: "Lezione",
            inizioEvento: "18:30"
        }
    ],
    tuesday : [
        event = {
            nomeEvento: "Lezione",
            inizioEvento: "18:30"
        }
    ],
    wendesday : [
        event = {
            nomeEvento: "Lezione",
            inizioEvento: "18:30"
        }
    ],
    thursday : [
        event = {
            nomeEvento: "Lezione",
            inizioEvento: "18:30"
        }
    ],
    friday : [
        event = {
            nomeEvento: "Lezione",
            inizioEvento: "18:30"
        }
    ],
    saturday : [
        event = {
            nomeEvento: "Lezione",
            inizioEvento: "18:30"
        }
    ],
    sunday : [
        event = {
            nomeEvento: "Lezione",
            inizioEvento: "18:30"
        }
    ],
}
