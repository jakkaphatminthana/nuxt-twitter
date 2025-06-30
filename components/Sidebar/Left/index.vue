<script setup lang="ts">
import { HomeIcon } from "@heroicons/vue/24/solid";
import {
  HashtagIcon,
  BellIcon,
  InboxIcon,
  BookmarkIcon,
  DocumentTextIcon,
  UserIcon,
  EllipsisHorizontalCircleIcon,
} from "@heroicons/vue/24/outline";
</script>

<template>
  <div class="flex h-screen flex-col">
    <!-- Logo -->
    <div
      class="transition-default my-2 w-min rounded-full p-2 hover:bg-blue-50 dark:hover:bg-white/20"
    >
      <NuxtLink to="/">
        <div class="flex h-8 w-8 items-center justify-center">
          <LogoApp />
        </div>
      </NuxtLink>
    </div>

    <!-- Tabs -->
    <div class="mt-2 space-y-8">
      <SidebarLeftTab>
        <template #icon><HomeIcon /></template>
        <template #name> Home </template>
      </SidebarLeftTab>
      <SidebarLeftTab>
        <template #icon><HashtagIcon /></template>
        <template #name> Explore </template>
      </SidebarLeftTab>
      <SidebarLeftTab>
        <template #icon><BellIcon /></template>
        <template #name> Notifications </template>
      </SidebarLeftTab>
      <SidebarLeftTab>
        <template #icon><InboxIcon /></template>
        <template #name> Messages </template>
      </SidebarLeftTab>
      <SidebarLeftTab>
        <template #icon><BookmarkIcon /></template>
        <template #name> Bookmarks </template>
      </SidebarLeftTab>
      <SidebarLeftTab>
        <template #icon><DocumentTextIcon /></template>
        <template #name> Lists </template>
      </SidebarLeftTab>
      <SidebarLeftTab>
        <template #icon><UserIcon /></template>
        <template #name> Profile </template>
      </SidebarLeftTab>
      <SidebarLeftTab>
        <template #icon><EllipsisHorizontalCircleIcon /></template>
        <template #name> More </template>
      </SidebarLeftTab>
    </div>
  </div>
</template>

<style scoped></style>
