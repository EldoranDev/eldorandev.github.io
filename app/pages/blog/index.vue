<script setup lang="ts">
const articles = await queryCollection('blog').all();
</script>

<template>
    <div class="row">
        <aside class="left-column">
            <profile />
        </aside>
        <main class="right-column">
            <article-intro v-for="article in articles" :key="article.id" :article="article" />
        </main>
    </div>
</template>

<style lang="postcss" scoped>
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
