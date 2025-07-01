<script setup lang="ts">
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div class="border-app-color dark:bg-dim-700 m-2 overflow-hidden rounded-2xl border bg-gray-50">
    <h1 class="border-b p-3 text-xl font-extrabold text-gray-900 dark:text-white">
      {{ props.title }}
    </h1>

    <slot />

    <div class="dark:hover:bg-dim-200 cursor-pointer p-3 text-sm text-blue-400 hover:bg-gray-100">
      Show more
    </div>
  </div>
</template>

<style scoped></style>
