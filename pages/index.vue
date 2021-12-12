<template>
    <div class="row">
      <aside class="left-column">
        <profile />
      </aside>
      <main class="right-column">
        <project
          v-for="project in projects"
          :key="project.slug"
          :project="project" 
        />
      </main>
    </div>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const projects = await $content('/projects').sortBy('createdAt', 'desc').fetch();

    return {
      projects
    };
  },
  head: {
    bodyAttrs: {
      // class: 'dark'
    }
  }
}
</script>

<style lang="postcss">
  .left-column {
    @apply relative mt-4 text-center;
  }

  .right-column {}

  @media (min-width: 1280px) {
    .left-column {
      flex: 0 0 25%;
      max-width: 25%;
    }

    .right-column {
      @apply relative mt-4;

      flex: 0 0 50%;
      max-width: 50%;
      margin-left: 8.33333%;
    }
  }
</style>