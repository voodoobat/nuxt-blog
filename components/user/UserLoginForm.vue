<template>
  <form class="grid grid-cols-1 gap-3" @submit.prevent="submit">
    <div class="text-lg text-center pb-2">
      Sign in
    </div>
    <FormInputText
      v-model:value="input.identifier"
      type="text"
      placeholder="username or email"
    />
    <FormInputText
      v-model:value="input.password"
      type="password"
      placeholder="password"
    />
    <FormButton type="submit" :disabled="isDisabled">
      log in
    </FormButton>
  </form>
</template>

<script setup lang="ts">
import { useUserStore } from '~/store/user'

const user = useUserStore()
const input = reactive({
  identifier: '',
  password: '',
})

const isDisabled = computed(() => (!input.identifier || !input.password))
const submit = async () => await user.login(input)
</script>
