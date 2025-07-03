<script setup lang="ts">
import LoginForm from '~/components/LoginForm.vue';

definePageMeta({
  layout: 'auth',
});
</script>

<template>
  <div class="mx-auto flex h-full w-full max-w-sm items-center lg:w-96">
    <LoginForm />
  </div>
</template>
