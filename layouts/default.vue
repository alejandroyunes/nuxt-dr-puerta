<script setup lang="ts">
import Header from '~/components/organisms/header/index.vue'
import Footer from '~/components/organisms/footer/index.vue'
import FloatingWhatsapp from '~/components/atoms/buttons/floating-whatapp/index.vue'

const i18nHead = useLocaleHead({ addSeoAttributes: true })

useHead(() => ({
  htmlAttrs: {
    lang: i18nHead.value.htmlAttrs?.lang,
  },
  script: [{
    key: 'initial-color-scheme',
    innerHTML: `(() => { const theme = localStorage.getItem('theme'); document.documentElement.setAttribute('data-color-scheme', theme === null || theme === 'light' ? 'light' : 'dark') })()`,
  }],
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
    } else {
      document.documentElement.setAttribute("data-color-scheme", theme === "light" ? "light" : "dark")
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
  <div>
    <Header />
    <main>
      <NuxtPage />
    </main>
    <Footer />

    <FloatingWhatsapp />
  </div>
</template>
