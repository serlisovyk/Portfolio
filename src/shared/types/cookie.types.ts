export type CookieSameSite = 'Strict' | 'Lax' | 'None'

export interface SetCookieOptions {
  path?: string
  maxAge?: number
  sameSite?: CookieSameSite
  secure?: boolean
  expires?: Date
}

export interface DefaultCookieOptions {
  path: string
  sameSite: CookieSameSite
}
