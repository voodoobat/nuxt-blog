<template>
  <nuxt-link v-if="to" :to="to" class="button" :class="{ 'is-disabled': disabled }">
    <slot />
  </nuxt-link>
  <button v-else :type="type" class="button" :disabled="disabled">
    <slot />
  </button>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    to?: string
    type?: 'button' | 'submit',
    disabled?: boolean
  }>(),
  {
    to: '',
    type: 'button',
  },
)
</script>

<style scoped lang="scss">
.button {
  @apply
    py-2 px-5
    border-2 border-lime-500
    text-white text-sm
    bg-lime-500
    rounded
    focus:shadow-lg;

  &:disabled,
  &.is-disabled {
    @apply bg-gray-300 border-gray-300;
  }
}
</style>
