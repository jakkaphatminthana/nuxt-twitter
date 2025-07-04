<script setup lang="ts">
const { initAuth } = useAuthStore();

onBeforeMount(() => {
  initAuth();
});
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
