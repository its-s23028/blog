import { createClient } from 'microcms-js-sdk'

export const client = createClient({
  serviseDomain: process.env.SERVICE_DOMAIN,
  apiky: process.env.API_KEY
})
