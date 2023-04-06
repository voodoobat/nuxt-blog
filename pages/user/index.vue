<template>
  <LayoutContainer class="flex h-full items-center justify-center">
    <UserFormLogin v-if="!userStore.isAuthorized" />
    <UserAccountView v-else />
  </LayoutContainer>
</template>

<script setup lang="ts">
import { useUserStore } from '~/store/useUserStore'

const userStore = useUserStore()
</script>
