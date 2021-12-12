<template>
  <div class="layout">
    <div class="content">
      <div class="row">
        <aside class="profile">
          <profile />
        </aside>
        <main class="projects">
          <project
            v-for="project in projects"
            :key="project.slug"
            :project="project" 
          />
        </main>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const projects = await $content('/projects').fetch();

    return {
      projects
    };
  },
}
</script>

<style lang="postcss">
  .layout {
    @apply min-h-screen min-w-full;
  }

  .content {
    @apply container mx-auto px-4;
  }
  
  .row {
    @apply flex flex-wrap;
  }

  .profile {
    @apply relative mt-4 text-center;

    flex: 0 0 25%;
    max-width: 25%;
  }

  .projects {
    @apply relative;

    flex: 0 0 50%;
    max-width: 50%;
  }
</style>