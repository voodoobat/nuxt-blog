<template>
  <header class="shadow">
    <LayoutContainer>
      <div class="flex justify-between items-center py-4">
        <nuxt-link to="/" class="text-2xl">
          Strapi & nuxt
        </nuxt-link>
        <nuxt-link to="/user" class="user">
          <span v-if="userStore.isAuthorized" class="user_name">
            {{ userStore.user.username }}
          </span>
          <svg-icon name="user" class="w-6 h-6" />
        </nuxt-link>
      </div>
    </LayoutContainer>
  </header>
</template>

<script lang="ts" setup>
import { useUserStore } from '~/store/useUserStore'

const userStore = useUserStore()
</script>

<style scoped lang="scss">
.user {
  $block: &;
  @apply flex gap-1 items-center;

  &:hover {
    #{$block}_name {
      @apply text-lime-400;
    }
  }

  &_name {
    @apply text-gray-500 text-xs transition-colors;
  }
}
</style>
