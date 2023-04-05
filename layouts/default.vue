<template>
  <header class="shadow">
    <LayoutContainer>
      <div class="flex justify-between items-center py-4">
        <nuxt-link to="/" class="text-2xl">
          Strapi & nuxt
        </nuxt-link>
      </div>
    </LayoutContainer>
  </header>
  <main class="grow">
    <nuxt-page />
  </main>
  <footer>
    <LayoutContainer>
      <div class="text-center py-2 text-gray-500">
        <p class="text-sm">Copyright © 2023 - Strapi & nuxt</p>
      </div>
    </LayoutContainer>
  </footer>
</template>
