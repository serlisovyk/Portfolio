import { IS_CLIENT } from '@/shared/constants'

export function setCookie(cookie: string) {
  if (!IS_CLIENT) return

  document.cookie = cookie
}
