<template>
  <form class="grid grid-cols-1 gap-3" @submit.prevent="submit">
    <div class="text-lg text-center pb-2">
      Sign in
    </div>
    <BaseInputText
      v-model:value="input.identifier"
      type="text"
      placeholder="username or email"
    />
    <BaseInputText
      v-model:value="input.password"
      type="password"
      placeholder="password"
    />
    <BaseButton type="submit" :disabled="isDisabled">
      log in
    </BaseButton>
  </form>
</template>

<script setup lang="ts">
import { useUserStore } from '~/store/useUserStore'

const userStore = useUserStore()
const input = reactive({
  identifier: '',
  password: '',
})
const isDisabled = computed(() => (!input.identifier || !input.password))
const submit = async () => {
  if (!isDisabled) {
    await userStore.login(input)
  }
}
</script>
