<template>
    <article class="card">
        <div class="card-img-top"></div>
        <div class="card-body">
            <h2 class="card-body-title">{{ project.title }}</h2>
            <time class="card-body-subtitle">{{ project.createdAt }}</time>
            <nuxt-content class="card-text" :document="project" />

            <a 
                v-if="project.github" 
                :href="project.github"
                
                class="card-link"
            >
                G
            </a>
        </div>
    </article>
</template>

<script lang="ts">
    export default {
        props: {
            project: Object
        },
    }
</script>

<style lang="postcss">
    .card {
        @apply shadow-md rounded-sm flex relative;
    }

    .card-body {
        @apply flex-auto p-5;
    }

    .card-body-title {
        @apply mb-3 text-2xl font-light;
    }

    .card-body-subtitle {
        @apply -mt-1.5 mb-2 text-gray-600;
    }

    .card-text {
        @apply mb-4;
    }

    .card-link {

    }
</style>