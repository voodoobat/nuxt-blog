module.exports = {
  root: true,
  ignorePatterns: ['graphql/*'],
  extends: ['@nuxtjs/eslint-config-typescript'],
  rules: {
    'vue/no-multiple-template-root': 0,
    'vue/no-v-html': 0,
    'comma-dangle': ['error', 'always-multiline'],
  }
}
