<script setup lang="ts">
import { useI18n } from 'vue-i18n'

import Title from '~/components/atoms/title-description/index.vue'
import Curriculum from '~/components/organisms/curriculum/index.vue'

const { t } = useI18n()

useSeoMeta({
  title: t('drPuertaMetaTitle'),
  description: t('drPuertaMetaDescription'),
  ogSiteName: t('drPuertaMetaName'),
  ogTitle: t('drPuertaMetaTitle'),
  ogDescription: t('drPuertaMetaDescription'),
  ogImage: '/meta/default.webp',
  ogUrl: t('drPuertaMetaUrl'),
  ogLocale: t('siteLocale'),
  twitterTitle: t('drPuertaMetaTitle'),
  twitterDescription: t('drPuertaMetaDescription'),
  twitterImage: '/meta/default.webp',
  twitterCard: 'summary_large_image',
})

</script>

<template>
  <Title
    title="drPuertaFull"
    description="drPuertaDescription" />

  <Curriculum />

</template>
