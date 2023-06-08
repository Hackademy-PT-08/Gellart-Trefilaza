
//POKEDEX

// Crea il tuo pokedex

// https://pokeapi.co/

// Mostrare i pokemon in delle card con img, nome, e tipologia (types: grass, poison, etc…)

// ```jsx
// // usare il parametro ?limit=150 altrimenti ci sono troppi risultati
// ```

// Permettere la ricerca di un pokemon tramite un input di testo

// ```jsx
// // esempio: l'url da chiamare sarà cosi composto https://pokeapi.co/api/v2/pokemon/pikachu
// ```

// BONUS: se volete potete fare il dettaglio del pokemon in una [modale](https://getbootstrap.com/docs/5.3/components/modal/)



//creo una funzione con annidata una fetch per far una richiesta al server
function getAllPokemon() {

    fetch("https://pokeapi.co/api/v2/pokemon?offset=20&limit=20")
        .then(res => { return res.json() })
        .then(data => {

            //funzione per generare cards pokemon
            createPokemonCards(data)
        });
}

getAllPokemon()

//creo una funzione per creare dinamicamente le pokemon cards
function createPokemonCards(listaPokemon) {

    //richiamo un <div></div> con la classe id="pokedex"
    const pokedex = document.getElementById(`pokedex`);

    //ciclo il tutto per crearle dinamicamente 
    listaPokemon.forEach(pokemon => {

        //template literal
        let cardTemplate =

           ` <div id="cards_col" class="col">
                <div class="card mt-5" style="width: 18rem;">
                    <img src="${pokemon.img}" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">${pokemon,name}</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the
                                bulk
                                of the card's content.</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                </div>
            </div>`
            pokedex.insertAdjacentElement("beforeend", cardTemplate)
    });
}