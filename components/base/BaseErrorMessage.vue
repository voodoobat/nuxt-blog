<template>
  <transition name="fx-boo">
    <div v-if="message" class="error">
      {{ message }}
    </div>
  </transition>
</template>

<script setup lang="ts">
defineProps<{ message: unknown }>()
</script>

<style scoped lang="scss">
.error {
  @apply
    p-5
    border-2 border-red-700 rounded
    text-xs text-red-700
    bg-red-200;
}
</style>
