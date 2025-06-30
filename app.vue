<script setup lang="ts">
const darkMode = ref(true);
</script>

<template>
  <div :class="{ dark: darkMode }">
    <div class="dark:bg-dim-900 bg-white">
      <div class="min-h-full">
        <div
          class="mx-auto grid grid-cols-12 sm:px-6 lg:max-w-7xl lg:gap-5 lg:px-8"
        >
          <!-- Left sidebar -->
          <div class="hidden md:block xl:col-span-2">
            <div class="sticky top-0">
              <SidebarLeft />
            </div>
          </div>
          <div class="bg-blue-500">B</div>
          <div class="bg-green-500">C</div>
        </div>
      </div>
    </div>
  </div>
</template>
