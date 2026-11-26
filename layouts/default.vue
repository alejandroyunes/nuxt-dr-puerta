<script setup lang="ts">
import Header from '~/components/organisms/header/index.vue'
import Footer from '~/components/organisms/footer/index.vue'
import Loading from '~/components/atoms/loading/loading-background/index.vue'
import FloatingWhatsapp from '~/components/atoms/buttons/floating-whatapp/index.vue'

const loading = ref(true)
const i18nHead = useLocaleHead({ addSeoAttributes: true })

useHead(() => ({
  htmlAttrs: {
    lang: i18nHead.value.htmlAttrs?.lang,
  },
  link: i18nHead.value.link,
  meta: i18nHead.value.meta,
}))

useSchemaOrg([
  defineWebSite({
    name: 'Dr. Puerta',
    url: 'https://drpuerta.com',
  }),
])

onMounted(() => {
  if (typeof window !== 'undefined') {
    const theme = localStorage.getItem('theme')

    if (theme === null) {
      localStorage.setItem('theme', 'light')
      document.documentElement.setAttribute("data-color-scheme", "light")
      loading.value = false
    } else {
      document.documentElement.setAttribute("data-color-scheme", theme === "light" ? "light" : "dark")
      loading.value = false
    }
  }
})

useHead({
  link: [
    {
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico'
    },
  ],
})

</script>

<template>
  <Loading v-if="loading" />

  <div>
    <Header />
    <article>
      <NuxtPage />
    </article>
    <Footer />

    <FloatingWhatsapp />
  </div>
</template>
