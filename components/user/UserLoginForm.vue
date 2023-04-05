<template>
  <form class="grid grid-cols-1 gap-3" @submit.prevent="submit">
    <div class="text-lg text-center pb-2">
      Sign in
    </div>
    <FormInputText v-model:value="input.username" placeholder="username" />
    <FormInputText v-model:value="input.password" placeholder="password" />
    <FormButton type="submit" :disabled="isDisabled">
      log in
    </FormButton>
  </form>
</template>

<script setup lang="ts">
const input = reactive({
  username: '',
  password: '',
})

const isDisabled = computed(() => (!input.username || !input.password))
const submit = console.log
</script>
