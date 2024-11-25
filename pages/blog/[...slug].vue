<script setup lang="ts">
</script>

<template>
  <div class="row">
    <aside class="left-column">
      <profile />
    </aside>
    <main class="right-column">
      <ContentDoc v-slot="{ doc }">
        <article>
          <h1>{{  doc.title }}</h1>
          <BlogSummary :content="doc" />
          <div class="relative not-prose rounded-2xl overflow-hidden" v-if="doc.cover">
            <img :src="doc.cover" decoding="async"/>
          </div>
          <ContentRendererMarkdown :value="doc" class="content"/>
        </article>
      </ContentDoc>
    </main>
  </div>
</template>

<style lang="postcss">
  h1 {
    @apply text-3xl font-extrabold leading-tight text-gray-900 lg:mb-1 lg:text-4xl dark:text-white;
  }

  h2 {
    @apply mb-3 text-2xl lg:text-3xl font-semibold;
  }

  h2 > a, h3 > a {
    @apply text-black dark:text-white;
  }

  h3 {
    @apply mb-2 text-xl lg:text-2xl;
  }

  p {
    @apply my-5;
  }

  div.content {
    @apply p-0 lg:text-lg leading-4;
  }
</style>
