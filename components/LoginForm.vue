<script setup lang="ts">
import { useAuthStore } from '~/stores/useAuthStore';

const data = reactive({ username: '', password: '', loading: false });
const authStore = useAuthStore();

const handleLogin = async () => {
  data.loading = true;

  try {
    await authStore.login({ username: data.username, password: data.password });
    navigateTo('/');
  } catch (error) {
    console.error(error);
  } finally {
    data.loading = false;
  }
};
</script>

<template>
  <div class="space-y-6 pt-5">
    <UIInput v-model="data.username" label="Username" placeholder="@username" />

    <UIInput v-model="data.password" label="Password" placeholder="******" />

    <div>
      <button @click="handleLogin">Login</button>
    </div>
  </div>
</template>
