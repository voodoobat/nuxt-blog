<template>
  <LayoutContainer class="my-10 grid grid-cols-3 gap-5">
    <PostSingle
      v-for="post in postStore.posts"
      :key="post.id"
      :post="post"
      class="text-center p-5 shadow rounded-l"
    />
  </LayoutContainer>
</template>

<script lang="ts" setup>
import { usePostStore } from '~/store/usePostStore'
import PostSingle from '~/components/post/PostSingle.vue'

const postStore = usePostStore()
await postStore.fetch()
</script>
