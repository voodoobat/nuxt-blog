import dotenv from 'dotenv'
import type { CodegenConfig } from '@graphql-codegen/cli'

dotenv.config({ path: '.env' })

const config: CodegenConfig = {
  overwrite: true,
  schema: process.env.GRAPHQL_SCHEME || './schema.graphql',
  generates: {
    'generated/schema.d.ts': {
      plugins: ['typescript'],
    },
  },
}

export default config
