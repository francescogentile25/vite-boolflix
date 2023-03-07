<template>
  <div>
    <h1>ciao</h1>
  </div>
  <Header></Header>
  <Main></Main>
</template>

<script>
import Header from './components/Header.vue';
import Main from './components/Main.vue'
export default {
  components: {
    Header,
    Main,
  },
}
</script>

<style lang="scss">
@use './style/general.scss'
</style>

