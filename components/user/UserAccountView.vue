<template>
  <div class="grid grid-cols-1 gap-3 text-center">
    <div class="info">
      <span class="info_label">
        login:
      </span>
      <span class="info_value">
        {{ userStore.user.username }}
      </span>
    </div>
    <div class="info">
      <span class="info_label">
        email:
      </span>
      <span class="info_value">
        {{ userStore.user.email }}
      </span>
    </div>
    <div class="pt-2">
      <BaseButton @click="userStore.logout">
        sign out
      </BaseButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useUserStore } from '~/store/useUserStore'

const userStore = useUserStore()
</script>

<style scoped lang="scss">
.info {
  @apply flex items-center justify-center gap-2;

  &_label {
    @apply text-gray-500 text-right;
  }
}
</style>
