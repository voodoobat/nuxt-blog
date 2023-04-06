import { defineStore } from 'pinia'
import { PostEntity, PostEntityResponseCollection } from '~/generated/schema'
import { useAxios } from '~/services/axios.service'

export const usePostStore = defineStore('posts', {
  state: () => <{
    posts: PostEntity[]
  }>({
    posts: [],
  }),
  actions: {
    async fetch () {
      const { data, error } =
        await useAxios<PostEntityResponseCollection>('get', '/posts')

      if (error) {
        return error
      }

      this.posts = data?.data || []
    },
  },
})
