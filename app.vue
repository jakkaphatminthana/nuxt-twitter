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

          <!-- Main -->
          <div class="col-span-12 bg-blue-500 md:col-span-8 xl:col-span-6">
            B
          </div>

          <!-- Right sidebar -->
          <div class="hidden bg-green-500 md:col-span-3 md:block xl:col-span-4">
            <div class="sticky top-0">
              <SidebarRight />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
