import { defineStore } from 'pinia'
import { PostEntity, Query } from '~/generated/schema'
import { postsQuery } from '~/graphql/queries/postsQuery'

export const usePostsStore = defineStore('posts', {
  state: () => <{
    posts: PostEntity[]
  }>({
    posts: [],
  }),
  actions: {
    async find () {
      const { error, data } = await useAsyncQuery<Query>(postsQuery)

      if (error.value) {
        return console.error(error.value)
      }

      this.posts = data.value?.posts?.data || []
    },
  },
})
