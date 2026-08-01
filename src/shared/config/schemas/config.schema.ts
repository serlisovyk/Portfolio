import { z } from 'zod'
import { normalizeSiteUrl } from '../utils'

export const envSchema = z.object({
  NEXT_PUBLIC_SITE_URL: z
    .url('NEXT_PUBLIC_SITE_URL must be a valid URL')
    .transform(normalizeSiteUrl),
})
