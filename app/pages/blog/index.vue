<script setup lang="ts">
const articles = await queryCollection("blog").order("date", "DESC").all();
</script>

<template>
  <div class="row">
    <aside class="left-column">
      <profile />
    </aside>
    <main class="right-column">
      <ul class="divide-y divide-gray-200 dark:divide-gray-800">
        <li v-for="post in articles" :key="post.path" class="py-6 first:pt-0">
          <time
            :datetime="post.date"
            class="text-sm text-gray-500 dark:text-gray-400"
          >
            {{ post.date }}
          </time>

          <h3 class="mt-1 text-xl font-semibold text-gray-900 dark:text-white">
            <NuxtLink
              :to="post.path"
              class="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              {{ post.title }}
            </NuxtLink>
          </h3>

          <p
            v-if="post.description"
            class="mt-2 text-gray-600 dark:text-gray-400"
          >
            {{ post.description }}
          </p>

          <NuxtLink
            :to="post.path"
            class="mt-2 inline-block text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline"
          >
            Continue reading →
          </NuxtLink>

          <div class="mt-3 flex flex-wrap gap-2">
            <NuxtLink
              v-for="tag in post.tags"
              :key="tag"
              :to="`/blog/tag/${tag}`"
              class="text-xs px-2 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
            >
              {{ tag }}
            </NuxtLink>
          </div>
        </li>
      </ul>
    </main>
  </div>
</template>

<style lang="postcss" scoped>
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
