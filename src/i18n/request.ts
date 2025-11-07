import { getRequestConfig, GetRequestConfigParams } from 'next-intl/server'
import { hasLocale } from 'next-intl'
import { routing } from './routing'

async function requestConfig({ requestLocale }: GetRequestConfigParams) {
  const requested = await requestLocale

  const locale = hasLocale(routing.locales, requested)
    ? requested
    : routing.defaultLocale

  return {
    locale,
    messages: (await import(`./messages/${locale}.json`)).default,
  }
}

export default getRequestConfig(requestConfig)
