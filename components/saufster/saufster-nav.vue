<script setup lang="ts">

//const navigation = await fetchContentNavigation(queryContent('/saufster'))

const navigation = [ { children: [ {_path: "", title: ""}] }];
</script>

<template>
  <nav class="flex space-x-4 pb-4 justify-center">
    <NuxtLink
      v-for="entry in navigation[0].children!"

      class="text-slate-200 hover:text-slate-600 rounded-md px-3 py-2 test-sm font-medium "

      :to="entry._path"
    >
      {{  entry.title }}
    </NuxtLink>
  </nav>
</template>
