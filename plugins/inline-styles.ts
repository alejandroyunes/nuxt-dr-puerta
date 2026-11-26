import siteStyles from '~/assets/site.scss?inline'

export default defineNuxtPlugin(() => {
  useHead({
    style: [{ innerHTML: siteStyles }],
  })
})
