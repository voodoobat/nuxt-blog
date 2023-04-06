<template>
  <form class="grid grid-cols-1 gap-3 w-2/3 sm:w-1/2 md:w-1/4" @submit.prevent="() => !isDisabled && submit()">
    <div class="text-lg text-center pb-2">
      Sign in
    </div>
    <BaseErrorMessage :message="errorMessage" /><!-- todo: fix type error -->
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

const errorMessage = ref('')
const input = reactive({
  identifier: '',
  password: '',
})

const isDisabled = computed(() => (!input.identifier || !input.password))
const submit = async () => {
  const error = await userStore.login(input)

  if (error) {
    errorMessage.value = 'Invalid username or password :('
  }
}
</script>
