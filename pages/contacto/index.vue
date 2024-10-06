<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import Contact from '~/components/organisms/contact/index.vue'

const { t } = useI18n()

useSeoMeta({
  title: t('contactoMetaTitle'),
  description: t('contactoMetaDescription'),
  ogSiteName: t('contactoMetaName'),
  ogTitle: t('contactoMetaTitle'),
  ogDescription: t('contactoMetaDescription'),
  ogImage: '/meta/default.webp',
  ogUrl: t('contactoMetaUrl'),
  ogLocale: t('siteLocale'),
  twitterTitle: t('contactoMetaTitle'),
  twitterDescription: t('contactoMetaDescription'),
  twitterImage: '/meta/default.webp',
  twitterCard: 'summary_large_image',
})

</script>

<template>
  <Contact />
</template>
