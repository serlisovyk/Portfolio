import { envSchema } from './schemas'

const env = envSchema.parse({
  NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL,
})

export const SITE_URL_ENV = env.NEXT_PUBLIC_SITE_URL
