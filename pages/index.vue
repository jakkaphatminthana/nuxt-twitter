<script setup lang="ts">
import HomePage from '~/components/HomePage.vue';

definePageMeta({
  middleware: 'auth',
});

const darkMode = ref(false);
const { token } = useAuthStore();
console.log('🔴 token = ', token);
</script>

<template>
  <div :class="{ dark: darkMode }">
    <div class="dark:bg-dim-900 bg-white">
      <div class="min-h-full">
        <div class="mx-auto grid grid-cols-12 sm:px-6 lg:max-w-7xl lg:gap-5 lg:px-8">
          <!-- Left sidebar -->
          <div class="hidden lg:block xl:col-span-2">
            <div class="sticky top-0">
              <SidebarLeft />
            </div>
          </div>

          <!-- Main -->
          <div class="col-span-12 bg-red-50 lg:col-span-8 xl:col-span-6">
            <HomePage />
          </div>

          <!-- Right sidebar -->
          <div class="hidden lg:col-span-3 lg:block xl:col-span-4">
            <div class="sticky top-0">
              <SidebarRight />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
