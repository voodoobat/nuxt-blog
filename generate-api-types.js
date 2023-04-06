const path = require('path')
const dotenv = require('dotenv')
const { generateApi } = require('swagger-typescript-api')

dotenv.config({ path: '.env' })

generateApi({
  name: 'schema.d.ts',
  output: path.resolve(process.cwd(), './generated'),
  url: process.env.API_SCHEME_URL,
})
