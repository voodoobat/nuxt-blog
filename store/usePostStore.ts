import { defineStore } from 'pinia'
import { PostListResponse, PostResponseDataObject } from '~/types/generated/schema'
import { EntityFilters } from '~/types/common'
import { useAxios } from '~/services/axios.service'
import { notFoundError } from '~/constants/errors'

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

    async filter (filters: EntityFilters) {
      const { data } = await useAxios<PostListResponse>('get', '/posts', {
        params: { filters },
      })

      this.posts = data?.data || []
    },

    async fetchOneBySlug (slug: string) {
      const params = { filters: { slug: { $eq: slug } } }
      const { data } = await useAxios<PostListResponse>('get', '/posts', { params })

      if (!data?.data?.length) {
        throw createError(notFoundError)
      }

      this.post = data.data[0]
    },
  },
})
