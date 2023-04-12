<template>
  <LayoutContainer class="my-5">
    <h1 v-if="title" class="text-5xl mt-10 text-center">
      {{ title }}
    </h1>
    <div class="my-5">
      <slot />
    </div>
  </LayoutContainer>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    title?: string
  }>(),
  {
    title: '',
  },
)
</script>
