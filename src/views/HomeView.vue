<template>
  <div>
    <navbar-top></navbar-top>

    <hero-index></hero-index>

    <projects-showcase></projects-showcase>

    <team></team>
      <Foot></Foot>
  </div>
</template>

<script>
  import NavbarTop from '../components/NavbarTop.vue'
  import HeroIndex from '../components/HeroIndex.vue'
  import ProjectsShowcase from '../components/ProjectsShowcase.vue'
  import Team from '../components/Team.vue'
  import Foot from '../components/Foot'
export default {
  name: 'HomeView',
  components: {
    Foot,
    Team,
    ProjectsShowcase,
    HeroIndex,
    NavbarTop
  },
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
