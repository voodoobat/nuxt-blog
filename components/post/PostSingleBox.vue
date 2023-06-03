<template>
  <div>
    <h2 class="text-2xl">
      <NuxtLink :to="`/posts/${post.attributes?.slug}`">
        {{ post.attributes?.title }}
      </NuxtLink>
    </h2>
    <div class="mt-4" v-html="post.attributes?.content" />
    <p class="mt-3 text-xs text-gray-500">
      <UtilityDateFormat :src="post.attributes?.createdAt" />
    </p>
  </div>
</template>

<script setup lang="ts">
import { UnwrapRef } from 'vue'
import { PostResponseDataObject } from '~/types/generated/schema'

defineProps<{
  postId?: string
  post: UnwrapRef<PostResponseDataObject>
}>()
</script>
