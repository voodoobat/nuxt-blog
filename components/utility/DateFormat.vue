<template>
  <time :datetime="datetime">
    {{ date }}
  </time>
</template>

<script lang="ts" setup>
import dayjs from 'dayjs'

const props = withDefaults(
  defineProps<{
    src: string
    format?: string
  }>(),
  {
    format: 'DD.MM.YYYY',
  },
)

const datetime = computed(() => dayjs(props.src).format('YYYY-MM-DD'))
const date = computed(() => dayjs(props.src).format(props.format))
</script>
