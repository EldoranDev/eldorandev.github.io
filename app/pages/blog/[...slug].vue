<script setup lang="ts">
const route = useRoute();
const { data: doc } = await useAsyncData(route.path, () => {
  return queryCollection("blog").path(route.path).first();
});
</script>

<template>
  <div class="row">
    <aside class="left-column">
      <profile />
    </aside>
    <main class="right-column">
      <article v-if="doc" class="prose dark:prose-invert">
        <header>
          <h1>{{ doc.title }}</h1>
          <BlogSummary :content="doc" />

          <div
            class="relative not-prose rounded-2xl overflow-hidden"
            v-if="doc.cover"
          >
            <img :src="doc.cover" decoding="async" />
          </div>
        </header>
        <ContentRenderer :value="doc" />
      </article>
    </main>
  </div>
</template>

<style lang="postcss" scoped></style>
