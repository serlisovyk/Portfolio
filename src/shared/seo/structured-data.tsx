import {
  absoluteUrl,
  CURRENT_COMPANY,
  getAvailableLanguageTags,
  getLanguageTag,
  getLocaleSeo,
  PERSON_EMAIL,
  PERSON_JOB_TITLE,
  PERSON_LOCATION,
  PERSON_NAME,
  SITE_NAME,
  SITE_URL,
  SOCIAL_LINKS,
} from './seo.config'

interface StructuredDataProps {
  locale: string
  canonicalPath: string
}

interface JsonLdEntry {
  id: string
  data: Record<string, unknown>
}

export default function StructuredData({
  locale,
  canonicalPath,
}: StructuredDataProps) {
  const canonicalUrl = absoluteUrl(canonicalPath)
  const seoContent = getLocaleSeo(locale)
  const languageTag = getLanguageTag(locale)
  const availableLanguages = getAvailableLanguageTags()

  const personId = `${SITE_URL}/#person`
  const websiteId = `${SITE_URL}/#website`
  const breadcrumbId = `${SITE_URL}/#breadcrumb`

  const structuredData: JsonLdEntry[] = [
    {
      id: 'person',
      data: {
        '@context': 'https://schema.org',
        '@type': 'Person',
        '@id': personId,
        name: PERSON_NAME,
        jobTitle: PERSON_JOB_TITLE,
        url: SITE_URL,
        image: absoluteUrl('/profile.jpg'),
        email: `mailto:${PERSON_EMAIL}`,
        sameAs: SOCIAL_LINKS,
        worksFor: {
          '@type': 'Organization',
          name: CURRENT_COMPANY.name,
          url: CURRENT_COMPANY.website,
        },
        address: {
          '@type': 'PostalAddress',
          addressLocality: PERSON_LOCATION.city,
          addressRegion: PERSON_LOCATION.region,
          addressCountry: PERSON_LOCATION.country,
        },
        contactPoint: [
          {
            '@type': 'ContactPoint',
            contactType: 'portfolio',
            email: PERSON_EMAIL,
            availableLanguage: availableLanguages,
          },
        ],
        knowsAbout: seoContent.keywords,
      },
    },
    {
      id: 'website',
      data: {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        '@id': websiteId,
        url: SITE_URL,
        name: SITE_NAME,
        inLanguage: languageTag,
        description: seoContent.description,
        publisher: {
          '@id': personId,
        },
      },
    },
    {
      id: 'webpage',
      data: {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        '@id': `${canonicalUrl}#webpage`,
        url: canonicalUrl,
        inLanguage: languageTag,
        name: seoContent.title,
        description: seoContent.description,
        isPartOf: {
          '@id': websiteId,
        },
        breadcrumb: {
          '@id': breadcrumbId,
        },
        primaryImageOfPage: {
          '@type': 'ImageObject',
          url: absoluteUrl('/profile.jpg'),
        },
        about: {
          '@id': personId,
        },
      },
    },
    {
      id: 'breadcrumb',
      data: {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        '@id': breadcrumbId,
        name: `${SITE_NAME} navigation`,
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: seoContent.sections.skills,
            item: `${canonicalUrl}#skills`,
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: seoContent.sections.experience,
            item: `${canonicalUrl}#experience`,
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: seoContent.sections.projects,
            item: `${canonicalUrl}#projects`,
          },
          {
            '@type': 'ListItem',
            position: 4,
            name: seoContent.sections.contact,
            item: `${canonicalUrl}#contact`,
          },
        ],
      },
    },
  ]

  return (
    <>
      {structuredData.map((entry) => (
        <script
          key={entry.id}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(entry.data) }}
        />
      ))}
    </>
  )
}
