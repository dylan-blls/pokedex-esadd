<template>
    <div id="container">
        <div id="infos_pokemon">
            <h1>{{'#'+this.pokemonId + ' - ' + pokemon.name}} </h1>
            <div id="containertype"><span id="type1" v-bind:style="getColor.color1">{{pokemon.types[0]}}</span> <span id="type2" v-bind:style="getColor.color2">{{pokemon.types[1]}}</span></div>
            <p id="stats">{{pokemon.description}}</p>
            <img id="noise" src="../assets/noise_texture.jpg" alt="">
            <audio v-bind:src="pokemon.sound" controls></audio>
        </div>
        
        <div id="img_pokemon">
            <img v-bind:src="pokemon.sprite" id="artwork">
            <div id="bgtype1" v-bind:style="getColor.color1"></div> 
            <div id="bgtype2" v-bind:style="getColor.color2"></div>
            <div id="battle"></div>
        </div>

        <div id="containermoves">
            <p v-for="(moves, index) in pokemon.moves" v-bind:key="index">{{moves}}</p>
        </div>
     </div>
</template>

<style scoped>
    audio{
        margin-top: 2vh;
    }

    #infos_pokemon{
        display: flex;
        flex-flow: column nowrap;
        justify-content: center;
        align-items: center;
    }

    #noise{
        width: 98.9vw;
        height: 43vh;
        position: absolute;
        top: 10.3vh;
        left:0;
        mix-blend-mode: color-burn;
        opacity: 0.1;
    }

  #artwork{
      max-width: 15vw;
      max-height: 40vh;
      position: relative;
      grid-area: 1/1/2/2;
      top: 1vh;
      cursor: grab;
  }

  #img_pokemon{
      display: grid;
      justify-items: center;
      align-items: flex-end;
      grid-template-columns: 1fr;
      grid-template-rows: 1fr;
      margin-left: 10vw;
  }

  #battle{
      width: 15vw;
      height: 3vh;
      background-color: rgba(62, 68, 73, 0.795);
      border-radius: 100%;
      z-index: -1;
      grid-area: 1/1/2/2;
      position: relative;
      top: -1vh;
  }

  #artwork:hover{
    animation: jump 1s step-start 0s infinite;
  }

  #container{
      display: flex;
      flex-flow: row wrap;
      justify-content: center;
      align-content: center;
      margin-top: 5vh;
  }

  #containertype{
      display: flex;
      flex-flow: row nowrap;
      width: 12vw;
      justify-content: space-evenly;
  }

  #type1, #type2{
      border-radius: 20px;
      padding: 0.2rem 1rem;
      font-weight: bold;
      font-size: 1.2rem;
  }

  #bgtype1, #bgtype2{
      position : absolute;
      z-index: -1;
      top: 30%;
      left: 50%;
      height: 20px;
      width: 20px;
      border-radius: 100%;
      transition-duration: 2s;
  }

  #bgtype1{
      animation: type1 linear infinite 9s;
      filter: blur(1px);
  }

  #bgtype2{
      animation: type2 linear infinite 9s;
      filter: blur(1px);
  }

  /* #type1:hover ~ #bgtype1{
      transform: scale(100);
      opacity: 1;
      transition-duration: 2s;
  }

  #type2:hover ~ #bgtype2{
      transform: scale(100);
      opacity: 1;
      transition-duration: 2s;
  } */

  #containermoves{
      height: 275vh;
      width: 50vw;
      padding: 0 25vw;
      margin: auto;
      background-color: white;
      margin-top: 5vh;
      padding-top: 5vh;
      display: flex;
      flex-flow: row wrap;
      justify-content: space-evenly;
      align-items: flex-start;
  }

  #containermoves>p:nth-child(even){
      background-color: rgb(243, 243, 243);
  }

  #containermoves>p{
      width: 10vw;
      padding: 0.5em;
      margin: 1vh 1vw;
      border-radius: 20px;
  }

  #stats{
      margin-top: 5vh;
  }

  @keyframes jump {
    50% {
        top: -1vh;
    }
  }

  @keyframes type1 {
    0%{
       transform: scale(1);
       opacity: 0; 
    }
    50% {
        opacity: 1;
        transform: scale(70);
    }
    100%{
       transform: scale(1);
       opacity: 0; 
    }
  }

  @keyframes type2 {
    0%{
       transform: scale(70);
       opacity: 1; 
    }
    50% {
        opacity: 0;
        transform: scale(1);
    }
    100%{
       transform: scale(70);
       opacity: 1; 
    }
  }

</style>

<script>
import { PokemonService } from '../services/pokemonservice.js';

    export default {
        name: 'PokemonDetails',
        data() {
            return {
                pokemonId: 0,
                service: new PokemonService,
                pokemon: {},
            }
        },
        computed: {
            getColor() {
                if (this.pokemon.types != undefined) {
                    let colors = [];

                    console.log('Couleurs')
                    console.log(colors);

                    this.pokemon.types.forEach(t => {
                        switch (t) {
                            case 'bug':
                                colors.push('#91c12b');
                                break;
                            case 'poison':
                                colors.push('#ab6bc9');
                                break;
                            case 'flying':
                                colors.push('#8faadd');
                                break;
                            case 'grass':
                                colors.push('#63bc5a');
                                break;
                            case 'fighting':
                                colors.push('#cf3f6b');
                                break;
                            case 'ghost':
                                colors.push('#5169ae');
                                break;
                            case 'fairy':
                                colors.push('#ed90e7');
                                break;
                            case 'ice':
                                colors.push('#74cec0');
                                break;
                            case 'normal':
                                colors.push('#929ba3');
                                break;
                            case 'fire':
                                colors.push('#ff9e54');
                                break;
                            case 'dragon':
                                colors.push('#036dc4');
                                break;
                            case 'electric':
                                colors.push('#f4d339');
                                break;
                            case 'steel':
                                colors.push('#5a8fa3');
                                break;
                            case 'psychic':
                                colors.push('#fa727a');
                                break;
                            case 'ground':
                                colors.push('#d87843');
                                break;
                            case 'dark':
                                colors.push('#5a5365');
                                break;
                            case 'water':
                                colors.push('#4f91d7');
                                break;
                            case 'rock':
                                colors.push('#c5b78c');
                                break;
                        }
                    })

                    return {
                        color1 : 'background-color: '+ colors[0],
                        color2 : 'background-color:'+ colors[1],
                    }
                } return ''
            }
        },
        mounted() {
            let route = this.$route;
            console.log(route);
            let id = route.params.id;
            this.pokemonId = id;

            this.service.getPokemon(this.pokemonId)
            .then(p => {
                this.pokemon = p;
            })
        }
    }
</script>
