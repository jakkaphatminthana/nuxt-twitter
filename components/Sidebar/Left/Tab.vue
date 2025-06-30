<script setup lang="ts">
const props = defineProps({
  active: {
    type: Boolean,
    default: false,
  },
});

const textClass = computed(() =>
  props.active ? "font-semibold" : "font-normal",
);
</script>

<template>
  <NuxtLink
    to="#"
    class="dark:hover:bg-dim-200 flex w-min items-center rounded-full p-3 text-black hover:bg-gray-200 dark:text-white"
  >
    <div class="text-dark h-6 w-6">
      <slot name="icon" />
    </div>

    <div class="xl:b ml-4 hidden text-xl xl:block" :class="textClass">
      <slot name="name" />
    </div>
  </NuxtLink>
</template>

<style scoped></style>
