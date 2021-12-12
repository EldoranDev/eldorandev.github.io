<template>
    <article class="card">
        <div class="card-img-top">
            <div class="thumb-img" :style="`background: url('${project.image}')`"/>
        </div>
        <div class="card-body">
            <h2 class="card-body-title">{{ project.title }}</h2>
            <time class="card-body-subtitle">{{ date }}</time>
            <nuxt-content class="card-text" :document="project" />

            <a 
                v-if="project.github" 
                :href="project.github"
                
                target="__blank"
                class="card-link"
            >
                <GithubLogo />
            </a>

            <a
                v-if="project.gitlab"
                :href="project.gitlab"

                target="__blank"
                class="card-link"
            >
                <GitlabLogo />
            </a>

            <a
                v-if="project.link"
                :href="project.link"

                target="__blank"
                class="card-link"
            >
                <LinkLogo />
            </a>
        </div>
    </article>
</template>

<script>
    import GithubLogo from '~/assets/icons/github.svg?inline';
    import GitlabLogo from '~/assets/icons/gitlab.svg?inline';
    import LinkLogo from '~/assets/icons/link.svg?inline';

    export default {
        props: {
            project: Object
        },
        components: {
            GithubLogo,
            GitlabLogo,
            LinkLogo,
        },
        computed: {
            date() { 
                return new Date(this.project.createdAt).toLocaleDateString("de-DE", {month: "long", year: "numeric"});
            }
        }
    }
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