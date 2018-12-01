<template>
  <section id="team" class="hero is-medium" style="background-color: whitesmoke">
    <div class="hero-body">
      <div class="container has-text-centered">
        <h1 class="title is-spaced">The Team</h1>

        <div class="columns">
          <div class="column is-one-third is-offset-one-third">
            <team-person :person="persons[0]"></team-person>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import TeamPerson from './TeamPerson.vue'

  export default {
    name: 'team',
    components: {
      TeamPerson
    },
    data () {
      return {
        persons: [
          {
            id: 'lowwor',
            name: 'lowwor',
            avatar: 'https://avatars2.githubusercontent.com/u/5444033?s=460&v=4',
            image: '../../assets/logo.png',
            description: '<em>Full Stack</em>',
            skills: ['mobile','web', 'server', 'design', 'dapp'],
            link: 'https://github.com/lowwor'
          }
        ]
      }
    },
    mounted () {
      this.persons.sort(() => { return 0.5 - Math.random() })
    }
  }
</script>
