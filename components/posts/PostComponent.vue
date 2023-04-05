<template>
  <div>
    <h2 class="text-2xl">
      {{ post?.title }}
    </h2>
    <div class="mt-4" v-html="post?.content" />
    <p class="mt-3 text-sm text-gray-500">
      {{ post?.updatedAt }}
    </p>
  </div>
</template>

<script lang="ts" setup>
import { UnwrapRef } from 'vue'
import { PostEntity } from '~/generated/schema'

defineProps<{
  postId?: string
  post: UnwrapRef<PostEntity['attributes']> | undefined
}>()
</script>
