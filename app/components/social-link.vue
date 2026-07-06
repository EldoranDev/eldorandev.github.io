<script setup lang="ts">
const { href, icon } = defineProps<{
  href: string;
  icon: string;
}>();
</script>

<template>
  <a :href="href" target="_blank" rel="noopener">
    <Icon :name="icon" class="profile-icon" />
  </a>
</template>

<style lang="postcss" scoped>
.profile-icon {
  @apply w-9 h-9 relative inline-block text-black dark:text-white hover:text-blue-600;
  @apply hover:text-blue-600 !important;
}
</style>
