<template>
  <div class="error">
    <div class="text-center">
      <h1 class="text-3xl font-bold">
        Error {{ error.statusCode }}
      </h1>
      <p class="text-xl mt-3">
        {{ error.statusMessage }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { NuxtError } from '#app'

withDefaults(
  defineProps<{
    error: NuxtError
  }>(),
  {},
)
</script>

<style scoped lang="scss">
.error {
  @apply
    fixed
    flex justify-center items-center
    w-full h-full
    bg-white;
}
</style>
