<template>
  <div id="app">
    <HomeView/>
  </div>
</template>

<script>
import HomeView from './views/HomeView.vue'

export default {
  name: 'app',
  components: {
    HomeView
  }
}
</script>

<style lang="scss">
  @import "./assets/scss/main.scss";

</style>
