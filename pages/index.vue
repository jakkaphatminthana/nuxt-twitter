<script setup lang="ts">
const isLoading = ref(true);
</script>

<template>
  <div>
    <MainSection title="Home" :loading="isLoading"> Content </MainSection>
  </div>
</template>

<style scoped></style>
