export default defineNuxtPlugin((nuxtApp) => {
  const router = useRouter()

  nuxtApp.hook('app:mounted', () => {
    const loadGtm = () => {
      const gtm = useGtm()

      if (!gtm) {
        throw new Error('Google Tag Manager plugin was not initialized')
      }

      gtm.enable()

      const route = router.currentRoute.value
      gtm.trackView(String(route.name ?? route.path), route.fullPath)
    }

    const scheduleGtm = () => {
      const requestIdleCallback = window.requestIdleCallback

      if (typeof requestIdleCallback === 'function') {
        requestIdleCallback(loadGtm, { timeout: 3000 })
      } else {
        window.setTimeout(loadGtm, 2000)
      }
    }

    if (document.readyState === 'complete') {
      scheduleGtm()
    } else {
      window.addEventListener('load', scheduleGtm, { once: true })
    }
  })
})
