import { defineStore } from 'pinia'
import { UsersPermissionsLoginInput, UsersPermissionsLoginPayload, UsersPermissionsUser } from '~/generated/schema'
import { useAxios } from '~/services/axios.service'

export const useUserStore = defineStore('user', {
  state: () => <{
    isAuthorized: boolean
    user: UsersPermissionsUser
  }>({
    isAuthorized: false,
  }),
  actions: {
    fetchOne () {
      const jwt = useCookie('jwt')
      if (jwt.value) {
        this.isAuthorized = true
      }
    },

    async login (input: UsersPermissionsLoginInput) {
      const jwt = useCookie('jwt')
      const { data, error } = await useAxios<UsersPermissionsLoginPayload>('post', '/auth/local', input)

      if (error) {
        return error
      }

      if (data?.jwt) {
        this.isAuthorized = true
        jwt.value = data.jwt
      }
    },

    logout () {
      const jwt = useCookie('jwt')

      jwt.value = null
      this.isAuthorized = false
    },
  },
})
