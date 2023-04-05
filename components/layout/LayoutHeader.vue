<template>
  <header class="shadow">
    <LayoutContainer>
      <div class="flex justify-between items-center py-4">
        <nuxt-link to="/" class="text-2xl">
          Strapi & nuxt
        </nuxt-link>
        <nuxt-link to="/user">
          <svg-icon name="user" class="w-6 h-6" />
        </nuxt-link>
      </div>
    </LayoutContainer>
  </header>
</template>

<script lang="ts" setup>
import { LayoutContainer } from '#components'
</script>
