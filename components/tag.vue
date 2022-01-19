<template>
    <nuxt-link
        class="tag"
        :to="`/blog/tag/${tag}`"
    >
        {{ tag }}
    </nuxt-link>
</template>

<script>
export default {
    props: {
        tag: String
    },
};
</script>

<style lang="postcss">
    .tag {
        @apply bg-gray-500 text-gray-300 rounded-full px-2 py-1 m-1;
    }
</style>