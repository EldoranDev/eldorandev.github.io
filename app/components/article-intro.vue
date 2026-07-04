<script setup lang="ts">
import type { BlogCollectionItem } from "@nuxt/content";

const { article } = defineProps<{ article: BlogCollectionItem }>();
const date = new Date(article.date).toLocaleDateString("de-DE", {
  day: "2-digit",
  month: "long",
  year: "numeric",
});
</script>

<template>
  <article class="article-intro">
    <div class="card-img-top">
      <div
        class="thumb-img"
        :style="`background: url('${article.cover}')`"
      ></div>
    </div>
    <span>{{ date }}</span>
    <h3 class="article-intro__title">
      <a :href="article.path">{{ article.title }}</a>
    </h3>
    <div>
      <tag v-for="tag in article.tags" :key="tag" :tag="tag">
        {{ tag }}
      </tag>
    </div>
  </article>
</template>

<style lang="postcss" scoped>
.article-intro {
  @apply flex flex-col items-center;
}
.article-intro__title {
  @apply text-4xl font-light;
}
</style>
