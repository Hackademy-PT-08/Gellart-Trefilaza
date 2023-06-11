
//POKEDEX


// Crea il tuo pokedex

// https://pokeapi.co/ --> una url, quindi fare una richiesta al server per mezzo di una fetch

// Mostrare i pokemon in delle card con img, nome, e tipologia (types: grass, poison, etc…) --> fare una funzione che mi crei le carte per mezzo di un ciclo 

// ```jsx
// // usare il parametro ?limit=150 altrimenti ci sono troppi risultati
// ```

// Permettere la ricerca di un pokemon tramite un input di testo

// ```jsx
// // esempio: l'url da chiamare sarà cosi composto https://pokeapi.co/api/v2/pokemon/pikachu
// ```

// BONUS: se volete potete fare il dettaglio del pokemon in una [modale](https://getbootstrap.com/docs/5.3/components/modal/)

//variabili
const row = document.createElement("div");
row.classList.add("row");

//DICHIARAZIONI

//funzione con annidata una fetch
function getAllPokemon() {

    //faccio una richiesta al server , quindi utilizzo una fetch
    fetch("https://pokeapi.co/api/v2/pokemon/?offset=20&limit=20")
      .then(res => {
        //la risposta che arriva la converto in json
        return res.json()
      })
      .then(data =>{
        console.log(data.results)
        createPokemonCards()
      })
      .catch(error => {
        console.log(error)
      })
}

//function per creare le carte pokemon
function createPokemonCards(listaPokemon) {

  const pokedex = document.getElementById("pokedex")

    //per crearle tutte dinamicamente so che devo fare un ciclo
    listaPokemon.forEach(pokemon => {

      //creazione div card
      const pokemonCard = document.createElement("div")
      //assegnazione classi a div card
      pokemonCard.classList.add("card","mt-3")

      //creazione div col card
      const colPokemonCard = document.createElement("div")
      //assegnazione classi a colPokemonCard
      colPokemonCard.classList.add("col-sm-6", "col-md-5", "col-lg-3", "mt-5")
      
      //creazione template
      let pokemonCardTemplate = `
      <img src="..." class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>`

      pokemonCard.innerHTML = pokemonCardTemplate;
      pokedex.appendChild(row);
      row.appendChild(colPokemonCard);
      colPokemonCard.appendChild(pokemonCard)
    });
}





//INVOCAZIONI
getAllPokemon();