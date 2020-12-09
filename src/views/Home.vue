<template>
  <div class="home">
    <ul>
      <li :key=i v-for="(film, i) in films" >
        <router-link :to="{name: 'Films', params: {id: film.url.split('/')[5]}}">{{film.title}}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';
import Axios from 'axios';

export default {
  name: 'Home',
  data() {
    return {
      films: [],
    };
  },
  methods: {
    async fetchFilms() {
      const films = await Axios.get('https://swapi.dev/api/films');
      this.films = films.data.results;
    },
  },
  mounted() {
    this.fetchFilms();
  },

};
</script>
