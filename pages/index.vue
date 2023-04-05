<template>
  <LayoutContainer class="my-10 grid grid-cols-3 gap-5">
    <PostComponent
      v-for="post in posts.posts"
      :key="post.id"
      :post="post.attributes"
      class="text-center p-5 shadow rounded-l"
    />
  </LayoutContainer>
</template>

<script lang="ts" setup>
import { usePostsStore } from '~/store/posts'
import PostComponent from '~/components/posts/PostComponent.vue'

const posts = usePostsStore()
await posts.find()
</script>
