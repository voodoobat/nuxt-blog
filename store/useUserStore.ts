import { defineStore } from 'pinia'
import { Mutation, Profile, UsersPermissionsLoginInput } from '~/generated/schema'
import { loginMutation } from '~/graphql/queries/loginMutation'
import { profileQuery } from '~/graphql/queries/profileQuery'

export const useUserStore = defineStore('user', {
  state: () => <{
    isAuthorized: boolean
    profile: Profile
  }>({
    isAuthorized: false,
    profile: {},
  }),
  actions: {
    async fetchOne () {
      const jwt = useCookie('jwt')
      if (jwt.value) {
        const { error, data } = await useAsyncQuery(profileQuery)

        if (error.value) {
          return console.error(error.value)
        }

        console.log(data)
        this.isAuthorized = true
      }
    },

    async login (input: UsersPermissionsLoginInput) {
      const jwt = useCookie('jwt')
      const { error, data } = await useAsyncQuery<Mutation>(loginMutation, input)

      if (error.value) {
        return error.value
      }

      jwt.value = data.value?.login.jwt || null
      await this.fetchOne()
    },

    logout () {
      const jwt = useCookie('jwt')

      jwt.value = null
      this.isAuthorized = false
    },
  },
})
