import { defineStore } from 'pinia'
import { Mutation, UsersPermissionsLoginInput } from '~/generated/schema'
import { loginMutation } from '~/graphql/queries/loginMutation'

export const useUserStore = defineStore('user', {
  state: () => ({
    isAuthorized: false,
  }),
  actions: {
    async login (input: UsersPermissionsLoginInput) {
      const jwt = useCookie('jwt')
      const { error, data } = await useAsyncQuery<Mutation>(loginMutation, input)

      if (error.value) {
        return console.error(error.value)
      }

      jwt.value = data.value?.login.jwt || null
      this.isAuthorized = !!jwt.value
    },

    logout () {
      const jwt = useCookie('jwt')

      jwt.value = null
      this.isAuthorized = false
    },
  },
})
