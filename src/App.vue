<template>
  <Header @ricerca="fetch"></Header>
  <Main></Main>
  <div class="cards">
    <Card v-for="film in store.films" :key="film.id" :film="film"></Card>
    <CardTV v-for="tv in store.tv" :key="tv.id" :tv="tv"></CardTV>
  </div>
</template>

<script>
import axios from 'axios'
import store from './store'
import Header from './components/Header.vue';
import Main from './components/Main.vue'
import Card from './components/Card.vue';
import CardTV from './components/CardTV.vue'
export default {
  components: {
    Header,
    Main,
    Card,
    CardTV,
  },
  data() {
    return {
      store,
    }
  },
  methods: {
    fetch() {
      this.fetchFilms();
      this.fetchTv();
    },
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
    fetchTv() {
      const search = this.store.search
      axios
        .get('https://api.themoviedb.org/3/search/tv?api_key=e99307154c6dfb0b4750f6603256716d', {
          params: {
            query: search,
            language: 'it-IT',
          }
        })
        .then((res) => {
          this.store.tv = res.data.results
        })
    }
  },
  created() {
    this.fetchFilms()
    this.fetchTv()
    this.fetch()
  }
}
</script>

<style lang="scss">
@use './style/general.scss';

Card {
  background-color: red;
}

.cards {
  padding: 20px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
}
</style>

