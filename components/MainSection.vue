<script setup lang="ts">
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  loading: {
    type: Boolean,
    required: true,
  },
});
</script>

<template>
  <div class="border-app-color border-x">
    <div class="dark:bg-dim-900/80 sticky top-0 bg-white/80 px-4 py-3 backdrop-blur-md">
      <h2 class="text-xl font-bold text-gray-800 dark:text-gray-100">{{ props.title }}</h2>
    </div>

    <div
      v-if="props.loading"
      class="border-app-color flex items-center justify-center border-b p-4"
    >
      <UISpinner />
    </div>
    <div v-else>
      <slot />
    </div>
  </div>
</template>

<style scoped></style>
