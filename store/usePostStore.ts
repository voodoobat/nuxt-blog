import { defineStore } from 'pinia'
import { PostListResponse, PostResponseDataObject } from '~/generated/schema'
import { useAxios } from '~/services/axios.service'

export const usePostStore = defineStore('posts', {
  state: () => <{
    posts: PostResponseDataObject[]
    post: PostResponseDataObject,
  }>({
    posts: [],
    post: {},
  }),
  actions: {
    async fetch () {
      const { data, error } = await useAxios<PostListResponse>('get', '/posts')

      if (error) {
        return error
      }

      this.posts = data?.data || []
    },

    async fetchOne (slug: string) {
      const { data, error } = await useAxios<PostListResponse>('get', '/posts', {
        params: {
          filters: {
            slug: { $eq: slug },
          },
        },
      })

      if (error) {
        return console.error(error)
      }

      if (!data?.data?.length) {
        return console.error('no data')
      }

      this.post = data.data[0]
    },
  },
})
