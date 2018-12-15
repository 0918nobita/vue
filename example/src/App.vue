<template>
  <div id="app">
    <img src="./assets/logo.png" />
    <HelloWorld />
  </div>
</template>

<script>
import store from '@/store.js';
import HelloWorld from './components/HelloWorld';

export default {
  name: 'App',
  store,
  components: {
    HelloWorld
  },
  created() {
    console.log(`Before commit: ${this.$store.getters.count}`); // => 0
    this.$store.commit('increment');
    console.log(`After commit: ${this.$store.getters.count}`); // => 1
  }
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
