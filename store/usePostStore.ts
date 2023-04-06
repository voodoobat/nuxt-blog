import { defineStore } from 'pinia'
import { PostListResponse, PostListResponseDataItem } from '~/generated/schema'
import { useAxios } from '~/services/axios.service'

export const usePostStore = defineStore('posts', {
  state: () => <{
    posts: PostListResponseDataItem[]
  }>({
    posts: [],
  }),
  actions: {
    async fetch () {
      const { data, error } =
        await useAxios<PostListResponse>('get', '/posts')

      if (error) {
        return error
      }

      this.posts = data?.data || []
    },
  },
})
