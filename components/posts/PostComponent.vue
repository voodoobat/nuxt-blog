<template>
  <div>
    <h2 class="text-2xl">
      {{ post?.title }}
    </h2>
    <div class="mt-4" v-html="post?.content" />
    <p class="mt-3 text-xs text-gray-500">
      <DateFormat :src="post?.updatedAt" />
    </p>
  </div>
</template>

<script setup lang="ts">
import { UnwrapRef } from 'vue'
import { PostEntity } from '~/generated/schema'
import DateFormat from '~/components/utilities/DateFormat.vue'

defineProps<{
  postId?: string
  post: UnwrapRef<PostEntity['attributes']> | undefined
}>()
</script>
