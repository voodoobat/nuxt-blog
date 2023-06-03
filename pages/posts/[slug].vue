<template>
  <PageContent :title="postStore.post.attributes?.title">
    <h1>Post</h1>
  </PageContent>
</template>

<script setup lang="ts">
import { usePostStore } from '~/store/usePostStore'

const route = useRoute()
const postStore = usePostStore()
await postStore.fetchOneBySlug(route.params.slug.toString())
await postStore.filter({
  name: { $eq: 'black' },
  content: { $eq: 'black' },
})
</script>
