<template>
  <div id="app">
    <img alt="cat not loaded :(" src="./assets/cat.jpg" height="100px">
    <counter/>
    <new-component/>
  </div>
</template>

<script>
import Counter from './components/Counter.vue'
import NewComponent from './components/NewComponent.vue'

export default {
  name: 'app',
  components: {
    Counter,
    NewComponent
  }
}
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
