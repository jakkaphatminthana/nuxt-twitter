<script setup lang="ts">
const mockWhatHappeningData = [
  { title: '#SomethingA', count: 100 },
  { title: '#SomethingB', count: 200 },
  { title: '#SomethingC', count: 300 },
];

const mockWhoToFollowData = [
  { name: 'Someone AA', handle: '@SomeoneAA', image: 'https://picsum.photos/200/300' },
  { name: 'Someone AA', handle: '@SomeoneAA', image: 'https://picsum.photos/200/300' },
  { name: 'Someone AA', handle: '@SomeoneAA', image: 'https://picsum.photos/200/300' },
];
</script>

<template>
  <div class="flex flex-col">
    <!-- What's happening -->
    <PreviewCard title="What's happening">
      <PreviewCardItem v-for="(item, index) in mockWhatHappeningData" :key="index">
        <div>
          <h2 class="text-md font-bold text-gray-800 dark:text-white">{{ item.title }}</h2>
          <p class="text-xs text-gray-400">{{ item.count }}</p>
        </div>
      </PreviewCardItem>
    </PreviewCard>

    <!-- Who to follow -->
    <PreviewCard title="Who to follow">
      <PreviewCardItem v-for="(item, index) in mockWhoToFollowData" :key="index">
        <div class="flex flex-row justify-between p-2">
          <div class="flex flex-row">
            <img class="h-10 w-10 rounded-full" :src="item.image" :alt="item.name" />
            <div class="ml-2 flex flex-col">
              <h1 class="text-sm font-bold text-gray-900 dark:text-white">{{ item.name }}</h1>
              <p class="text-xs text-gray-400">{{ item.handle }}</p>
            </div>
          </div>
          <div class="flex h-full items-center">
            <button
              class="rounded-full bg-black px-4 py-2 text-xs font-bold text-white dark:bg-white dark:text-black"
            >
              Follow
            </button>
          </div>
        </div>
      </PreviewCardItem>
    </PreviewCard>
  </div>
</template>

<style scoped></style>
