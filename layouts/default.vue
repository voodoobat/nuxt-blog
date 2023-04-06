<template>
  <LayoutHeader />
  <main class="grow">
    <nuxt-page />
  </main>
  <LayoutFooter />
</template>

<script setup lang="ts">
import { useUserStore } from '~/store/useUserStore'

const userStore = useUserStore()
userStore.fetchOne()
</script>
