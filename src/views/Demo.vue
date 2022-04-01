<template>
    <div id="les_pokemons_liste">
        <!-- <p>{{maVariable}}</p>
        <p>{{compteur}}</p> -->

        <!-- v-model permet de définir une variable à utiliser, une méthode avec les forms -->
        <!-- <input type="text" v-model="firstName"><br><br> -->

        <!-- on utilise un v-if pour ne rien afficher s'il n'y a rien d'écrit dans l'input
        Avec une deuxième balise avec v-else, on définit un else. il ne doit pas y avoir d'autre balise entre les deux -->
        <!-- <span v-if="firstName != ''">Bonjour {{firstName}} !</span>
        <span v-else>Merci de saisir votre prénom</span><br><br> -->

        <!-- v-on permet de définir un événement on peut aussi mettre @click au lieu de v-on:click -->
        <!-- <button v-on:click="direBonjour">En route !</button><br><br> -->

        <!-- on fait une liste pour mettre nos pokémons et on attribue une key avec v-bind
        on récupère chaque pokémon dans le tableau pokemons, et on les met dans p. on prend aussi l'index, qu'on donne en key 
        après on affiche p avec la syntaxe double moustache. entre moustaches c'est du JS basique -->
        <!-- <p v-for="(p, index) in pokemons" v-bind:key="index">{{p.name}}</p> -->

        <!-- <div id="tableau">
          <table>
            <tr>
              <td>ID</td>
              <td>Nom</td>
              <td>Types</td>
              <td>Taille</td>
            </tr>
            <tr v-for="(p, index) in pokemons" v-bind:key="index">
              <td>{{p.id}}</td>
              <td>{{p.name}}</td>
              <td><p v-for="(t, i) in p.types" v-bind:key="i">{{t}}</p></td>
              <td >{{p.height}}</td>
            </tr>
          </table>
        </div> -->

        <div v-for="(p, index) in pokemons" v-bind:key="index">
            <router-link id="pokemon" v-bind:to="'/pokemondetails/' + p.id">
              <img class="sprite" v-bind:src="p.sprite" alt="">
            </router-link>
          <p v-for="(t, i) in p.types" v-bind:key="i">
            {{t}}
          </p>
        </div>
    </div>
</template>

<style scoped>

  table{
    width: 30vw;
  }

  table>tr:first-of-type{
    background-color: rgb(76, 89, 99);
    color: white;
  }

  table>tr:nth-child(even){
    background-color: rgb(245, 245, 245);
  }

  table>tr:not(:first-of-type):nth-child(odd){
    background-color: rgb(228, 228, 228);
  }

  li{
    list-style: none;
  }

  #tableau{
    width: 100vw;
    display: flex;
    flex-flow: row;
    justify-content: center;
  }

  div{
    overflow: hidden;
  }

  #les_pokemons_liste{
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: space-evenly;
  }

  .sprite{
    max-width: 6vw;
    padding: 1em;
    margin: 0.5em;
  }
</style>

<script>

// On importe la classe Pokémon et PokemonService
import { Pokemon } from '../models/pokemons.js';
import { PokemonService } from '../services/pokemonservice.js';

export default {
  name: 'Demo',
  data() {
    return {
      maVariable: 'Bonjour !',
      compteur: 0,
      firstName: '',
      pokemons: [],
      service: new PokemonService,
    };
  },
  // On met les méthodes dans methods
  methods: {
    direBonjour() {
      alert('Bonjour ' + this.firstName);
    },
  },
  // Cette fonction sera appelée lorsque le composant est créé.
  created() {
    console.log('Created !');
  },
  // Cette fonction sera appelée lorsque le composant est prêt à l'emploi.
  mounted() {
    console.log('Mounted !');
    setInterval(() => {
      this.compteur += 1;
    }, 1000);

    // On met les pokémons dans le tableau
    this.service.getPokemons()
    .then(pokemons => {
      this.pokemons = pokemons;
    });

  },
};
</script>
