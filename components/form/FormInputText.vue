<template>
  <div class="input">
    <input
      :value="value"
      :type="type"
      :placeholder="placeholder"
      :required="required"
      class="input_input"
      @input="$emit('update:value', $event.target.value)"
    >
  </div>
</template>

<script setup lang='ts'>
type HTMLInputTypeAttribute = 'number' | 'search' | 'time' | 'text' | 'checkbox' | 'color' | 'date' | 'datetime-local' | 'email' | 'hidden' | 'password' | 'range'

defineEmits(['update:value'])
withDefaults(
  defineProps<{
    type?: HTMLInputTypeAttribute,
    placeholder?: string
    required?: boolean
    value: string | number
  }>(),
  {
    type: 'text',
    placeholder: '',
  },
)
</script>

<style scoped lang="scss">
.input {
  @apply inline-flex text-sm;

  &_input {
    @apply
      py-2 px-3
      border-2 border-gray-400 focus:border-lime-500
      rounded
      transition-colors;
  }
}
</style>
