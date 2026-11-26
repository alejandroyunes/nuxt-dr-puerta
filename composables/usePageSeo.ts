const siteUrl = 'https://drpuerta.com'

type PageSeoOptions = {
  title: string
  description: string
  siteName: string
}

export const usePageSeo = ({ title, description, siteName }: PageSeoOptions) => {
  const { t } = useI18n()
  const route = useRoute()
  const translatedTitle = computed(() => t(title))
  const translatedDescription = computed(() => t(description))
  const pageUrl = computed(() => new URL(route.path, siteUrl).href)
  const imageUrl = new URL('/meta/default.webp', siteUrl).href

  useSeoMeta({
    title: translatedTitle,
    description: translatedDescription,
    ogType: 'website',
    ogSiteName: computed(() => t(siteName)),
    ogTitle: translatedTitle,
    ogDescription: translatedDescription,
    ogImage: imageUrl,
    ogImageAlt: translatedTitle,
    ogUrl: pageUrl,
    ogLocale: computed(() => t('siteLocale')),
    twitterTitle: translatedTitle,
    twitterDescription: translatedDescription,
    twitterImage: imageUrl,
    twitterCard: 'summary_large_image',
  })
}
