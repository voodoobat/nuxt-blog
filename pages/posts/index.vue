<template>
  <PageContent title="Posts">
    <div class="my-10 grid grid-cols-3 gap-5">
      <PostSingleBox
        v-for="post in postStore.posts"
        :key="post.id"
        :post="post"
        class="text-center p-5 shadow rounded-l"
      />
    </div>
  </PageContent>
</template>

<script lang="ts" setup>
import { usePostStore } from '~/store/usePostStore'

const postStore = usePostStore()
await postStore.fetch()
</script>
