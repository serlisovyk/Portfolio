import { DEFAULT_COOKIE_OPTIONS, IS_CLIENT } from '@/shared/constants'
import { SetCookieOptions } from '@/shared/types'

export function setCookie(
  name: string,
  value: string,
  options: SetCookieOptions = {},
) {
  if (!IS_CLIENT) return

  document.cookie = serializeCookie(name, value, {
    ...DEFAULT_COOKIE_OPTIONS,
    ...options,
  })
}

export function getCookie(name: string) {
  if (!IS_CLIENT) return undefined

  const encodedName = `${encodeURIComponent(name)}=`

  const cookie = document.cookie
    .split('; ')
    .find((item) => item.startsWith(encodedName))

  if (!cookie) return undefined

  try {
    return decodeURIComponent(cookie.slice(encodedName.length))
  } catch {
    return undefined
  }
}

function serializeCookie(name: string, value: string, options: SetCookieOptions) {
  const { path, sameSite, maxAge, expires, secure } = options

  const segments = [`${encodeURIComponent(name)}=${encodeURIComponent(value)}`]

  if (path) {
    segments.push(`Path=${path}`)
  }

  if (sameSite) {
    segments.push(`SameSite=${sameSite}`)
  }

  if (typeof maxAge === 'number') {
    segments.push(`Max-Age=${maxAge}`)
  }

  if (expires) {
    segments.push(`Expires=${expires.toUTCString()}`)
  }

  if (secure) {
    segments.push('Secure')
  }

  return segments.join('; ')
}
