<template>
  <LayoutContainer class="flex h-full items-center justify-center">
    <UserLoginForm v-if="!userStore.isAuthorized" />
    <BaseButton v-else @click="userStore.logout">
      sign out
    </BaseButton>
  </LayoutContainer>
</template>

<script setup lang="ts">
import { useUserStore } from '~/store/useUserStore'

const userStore = useUserStore()
</script>
