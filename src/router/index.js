import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Demo from '../views/Demo.vue';
import BlindTest from '../views/BlindTest.vue';
import PokemonDetails from '../views/PokemonDetails.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  {
    path: '/demo',
    name: 'Demo',
    component: Demo,
  },
  {
    path: '/pokemondetails/:id',
    name: 'Pokemon Details',
    component: PokemonDetails,
  },
  {
    path: '/blindtest',
    name: 'Blind Test',
    component: BlindTest,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
