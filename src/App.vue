<template>
  <Header @ricerca="fetchFilms"></Header>
  <Main></Main>
  <div class="cards">
    <Card v-for="film in store.films" :key="film.id" :film="film"></Card>
  </div>
</template>

<script>
import axios from 'axios'
import store from './store'
import Header from './components/Header.vue';
import Main from './components/Main.vue'
import Card from './components/Card.vue';
export default {
  components: {
    Header,
    Main,
    Card,
  },
  data() {
    return {
      store,
    }
  },
  methods: {
    fetchFilms() {
      const search = this.store.search
      axios
        .get('https://api.themoviedb.org/3/search/movie?api_key=e99307154c6dfb0b4750f6603256716d', {
          params: {
            query: search,
            language: 'it-IT',
          }
        })
        .then((res) => {
          this.store.films = res.data.results
        })
    },
  },
  created() {
    this.fetchFilms()
  }

}
</script>

<style lang="scss">
@use './style/general.scss';

.cards {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 20px;
}
</style>

