<template>
  <LayoutContainer>
    <h1>Post</h1>
  </LayoutContainer>
</template>

<script setup lang="ts">
import { usePostStore } from '~/store/usePostStore'

const route = useRoute()
const postStore = usePostStore()
await postStore.fetchOne(route.params.slug.toString())
</script>
