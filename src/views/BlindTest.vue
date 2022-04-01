<template>
    <div id="conteneur_global">
        <h1>Who's that pokemon ?</h1>
        <p>Score : {{score}}</p>

        <img id="sprite" v-bind:src="pokemonToGuess.sprite" alt="">

        <div id="conteneur_choix" v-for="(p, index) in randomPokemons" v-bind:key="index">
            <p id="choix" v-on:click="check">{{p.name}}</p>
        </div>
    </div>
</template>

<style scoped>
    #conteneur_global{
        display: flex;
        flex-flow: column nowrap;
        justify-content: center;
        align-items: center;
    }

    #sprite{
        filter: brightness(0);
        max-width: 15vw;
    }

    #conteneur_choix{
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-evenly;
        width: 70vw;
    }

    #choix{
        border: black 2px solid;
        width: 10vw;
        padding: 1em 1em;
        border-radius: 20px;
    }
</style>

<script>
import {PokemonService} from '../services/pokemonservice.js';

export default {
    name: 'BlindTest',
    data() {
        return {
            pokemons: [],
            randomPokemons: [],
            score : 0,
            pokemonToGuess: '',
            service: new PokemonService,
        };
    },
    methods: {
        check() {
            if (p.name === this.pokemonToGuess) {
                score += 1;
            }
        }
    },
    created(){
        console.log('Created');
    },
    mounted(){
        console.log('Mounted');

        // On récupère tous les pokémons
        this.service.getPokemons()
        .then(pokemons => {
            this.pokemons = pokemons;

            // On récupère 4 pokémons au hasard
            for (let i = 0; i < 4; i++) {
                let randomNumber = Math.floor(Math.random() * 200);
                this.randomPokemons.push(this.pokemons[randomNumber]);
                console.log(this.randomPokemons);
            }

            // On récupère au hasard l'un des 4 pokémons, il sera la bonne réponse
            let randomNumberOutOf4 = Math.floor(Math.random() * 3);
            this.pokemonToGuess = this.randomPokemons[randomNumberOutOf4];
            console.log(this.pokemonToGuess);
        });

        // On récupère le sprite des pokémons
        let sprites = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/'+this.pokemonToGuess.id+'.png';

    }
}
</script>