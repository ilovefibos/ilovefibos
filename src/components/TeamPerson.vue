<template>
  <div class="card has-text-left">
    <div class="card-image">

    </div>
    <div class="card-content">
      <a :href="person.link" target="_blank" rel="noopener">

      <div class="media">
        <div class="media-left">
          <figure class="image is-48x48">
            <img class="c-avatar" :src="person.avatar" alt="Image">
          </figure>
        </div>
        <div class="media-content">
          <p class="title is-4">{{ person.name }}</p>
          <p class="subtitle is-6">@{{ person.id }}</p>
        </div>
      </div>

      <div class="content has-text-right">
        <span v-html="person.description"></span>
        <br>
        <span v-for="(skill, index)  in person.skills" :key="skill">
          <a style="text-transform: lowercase">#{{ skill }}</a><span v-if="index !== person.skills.length - 1">, </span>
        </span>
      </div>
      </a>

    </div>
  </div>
</template>

<script>
  export default {
    name: 'team-person',
    props: ['person']
  }
</script>

<style lang="scss" scoped>
  .c-avatar {
    border-radius: 50%;
  }

  .c-team__image {
    object-fit: cover;
  }
</style>
