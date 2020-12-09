<template>
  <div>
    <h2>{{movie.title}}</h2>
    <h3>{{movie.director}}</h3>
    <h3>{{movie.release_date}}</h3>
    <div class="intro">
      <marquee direction="up" scrollamount="1" height="500" >{{movie.opening_crawl}}</marquee>
    </div>
  </div>
</template>

<script>
import Axios from 'axios';

export default {
  name: 'Films',
  data() {
    return {
      movie: [],
    };
  },
  methods: {
    async getFilm() {
      const result = await Axios.get(`https://swapi.dev/api/films/${this.$route.params.id}/`);
      this.movie = result.data;
      console.log(result.data);
    },
  },
  mounted() {
    this.getFilm();
  },
};
</script>

<style scoped>

.intro{

  white-space: pre-wrap;
  background-color: black;
  color: white;
  overflow: hidden;
  text-align: center;
}
</style>
