<script setup>
// const { data } = await useAsyncData('projects', () => queryContent('/projects'))

const projects = await queryContent('projects')
  .sort({ 'createdAt': -1 })
  .find()

</script>

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

<style lang="postcss">
  .left-column {
    @apply relative mt-4 text-center;
  }

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
