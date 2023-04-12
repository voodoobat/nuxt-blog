import { defineStore } from 'pinia'
import { PostListResponse, PostResponseDataObject } from '~/generated/schema'
import { useAxios } from '~/services/axios.service'
import { notFoundError, serverError } from '~/constants/errors'

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
      const { data } = await useAxios<PostListResponse>('get', '/posts')
      this.posts = data?.data || []
    },

    async fetchOne (slug: string) {
      const { data } = await useAxios<PostListResponse>('get', '/posts', {
        params: {
          filters: {
            slug: { $eq: slug },
          },
        },
      })

      if (!data?.data?.length) {
        throw createError(notFoundError)
      }

      this.post = data.data[0]
    },
  },
})
