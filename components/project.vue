<template>
    <article class="card">
        <div class="card-img-top">
            <div class="thumb-img" :style="`background: url('${project.image}')`"/>
        </div>
        <div class="card-body">
            <h2 class="card-body-title">{{ project.title }}</h2>
            <time class="card-body-subtitle">{{ date }}</time>
            <ContentRenderer class="card-text" :value="project" />

            <a
                v-if="project.github"
                :href="project.github"

                target="__blank"
                class="card-link"
            >
              <nuxt-icon name="github" />
            </a>

            <a
                v-if="project.gitlab"
                :href="project.gitlab"

                target="__blank"
                class="card-link"
            >
              <nuxt-icon name="gitlab" />
            </a>

            <nuxt-link
              v-if="project.blog"
              :href="project.blog"

              class="card-link"
            >
              <nuxt-icon name="blog" />
            </nuxt-link>

            <a
                v-if="project.link"
                :href="project.link"

                target="__blank"
                class="card-link"
            >
              <nuxt-icon name="link" />
            </a>
        </div>
    </article>
</template>

<script setup lang="ts">
  const { project } = defineProps(["project"])

  const date = new Date(project.date).toLocaleDateString("de-DE", {month: "long", year: "numeric" });
</script>

<style lang="postcss">
    .card {
        @apply shadow-md rounded-sm flex flex-col relative bg-white mb-3 dark:bg-gray-800;
    }

    .thumb-img {
        @apply bg-center bg-no-repeat bg-cover !important;
        height: 175px;
    }

    .card-img-top {
        @apply rounded-sm;
        border-top-left-radius: inherit;
        border-top-right-radius: inherit;
        overflow: hidden;
        width: 100%;
    }

    .card-body {
        @apply flex-auto p-5;
    }

    .card-body-title {
        @apply mb-3 text-2xl font-light;
    }

    .card-body-subtitle {
        @apply -mt-1.5 mb-2 text-gray-600 dark:text-gray-400 block;
    }

    .card-text {
        @apply mb-4 text-sm;
    }

    .card-text p {
        @apply mb-4;
    }

    .card-link {
        @apply text-black dark:text-white inline-block;
        @apply hover:text-blue-600 !important;
    }

    .card-link svg {
        @apply w-9 h-9
    }
</style>
