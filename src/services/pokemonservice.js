import {Pokemon} from '../models/pokemons.js';
import axios from 'axios';

export class PokemonService {
    constructor() {

    }

    getPokemon(id){
        return new Promise((resolve, reject) => {

            axios.get('https://pokeapi.co/api/v2/pokemon/' + id)
            .then(response => {
                // Quand on a les résultats on appelle le code. On met la data dans une variable
                let pokemondata = response.data;
                console.log(pokemondata); 

                // On crée un nouveau Pokemon, on lui affecte les propriétés envoyées par l'API et on resolve
                // ça va déclencher le .then du code de PokemonDetails qui appelle getPokemon
                let unPokemon = new Pokemon();

                unPokemon.name = pokemondata.name;
                /* if(pokemondata.types.length == 2) {
                    unPokemon.types = pokemondata.types[0].type.name + ' / ' + pokemondata.types[1].type.name;
                } else {
                    unPokemon.types = pokemondata.types[0].type.name;
                } */
                let types = pokemondata.types;
                let typesArray = [];

                for(let i = 0; i<types.length; i++){
                    typesArray.push(types[i].type.name);
                }

                console.log(typesArray);

                unPokemon.types = typesArray;
                unPokemon.sprite = pokemondata.sprites.other['official-artwork'].front_default;
                unPokemon.description = pokemondata.stats[0].base_stat + ' HP | ' + pokemondata.stats[1].base_stat + ' ATK | ' + pokemondata.stats[2].base_stat + ' DEF | ' + pokemondata.stats[3].base_stat + ' SPATK | ' + pokemondata.stats[4].base_stat + ' SPDEF | ' + pokemondata.stats[5].base_stat + ' SPE';

                let moves = pokemondata.moves;
                let movesArray = [];

                for(let i = 0; i<moves.length; i++){
                    movesArray.push(moves[i].move.name);
                }

                unPokemon.moves = movesArray;

                unPokemon.sound = 'https://www.pokebip.com/audio/cris-sl/'+ id + '.mp3';

                resolve(unPokemon); 

            })
            .catch(reason => {
                reject("Erreur lors de la récupération des infos sur le Pokémon : " + reason);
            });
        })
    };

    // Cette méthode retourne un tableau de pokémons
    getPokemons() {
        return new Promise((resolve, reject) => {
            let pokemons = [];

            axios.get('https://pokeapi.co/api/v2/pokemon?limit=901')
            .then(response => {
                // Code appelé quand on reçoit les résultats
                let result = response.data.results;
                // Pour chaque pokémon trouvé, on récupère l'id
                result.forEach(p => {
                    let substr = p.url.split('/');
                    let idPokemon = substr[substr.length - 2];

                    p.id = idPokemon;
                    p.sprite = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/'+p.id+'.png'
                    
                    pokemons.push(p);                 
                });

                resolve(pokemons);
            })
            .catch(reason => {
                reject("Erreur lors de la récupération des Pokémons :" + reason);
            });
        });
    }
}