import { defineStore } from 'pinia'
import { useAxios } from '~/services/axios.service'
import { UsersPermissionsUser, UsersPermissionsUserRegistration } from '~/types/generated/schema'
import { notFoundError } from '~/constants/errors'

export const useUserStore = defineStore('user', {
  state: () => <{ user: UsersPermissionsUser }>({
    user: {},
  }),
  actions: {
    async fetchOne () {
      const jwt = useCookie('jwt')

      if (jwt.value) {
        const { data, error } = await useAxios<UsersPermissionsUser>('get', '/users/me')

        if (error) {
          throw createError(notFoundError)
        }

        this.user = data || {}
      }
    },

    async login (input: { identifier: string, password: string }) {
      const jwt = useCookie('jwt')
      const { data, error } = await useAxios<UsersPermissionsUserRegistration>('post', '/auth/local', {
        data: input,
      })

      if (error) {
        return error
      }

      if (data?.jwt) {
        this.user = data.user || {}

        jwt.value = data.jwt
      }
    },

    logout () {
      const jwt = useCookie('jwt')

      jwt.value = null
      this.user = {}
    },
  },
  getters: {
    isAuthorized (): boolean {
      return Boolean(this.user?.id)
    },
  },
})
