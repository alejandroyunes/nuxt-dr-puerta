<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import Title from '~/components/atoms/title-description/index.vue'
import Investigation from '~/components/organisms/investigation/index.vue'

const { t } = useI18n()

useSeoMeta({
  title: t('estudiosMetaTitle'),
  description: t('estudiosMetaDescription'),
  ogSiteName: t('estudiosMetaName'),
  ogTitle: t('estudiosMetaTitle'),
  ogDescription: t('estudiosMetaDescription'),
  ogImage: '/meta/default.webp',
  ogUrl: t('estudiosMetaUrl'),
  ogLocale: t('siteLocale'),
  twitterTitle: t('estudiosMetaTitle'),
  twitterDescription: t('estudiosMetaDescription'),
  twitterImage: '/meta/default.webp',
  twitterCard: 'summary_large_image',
})

</script>

<template>
  <Title
    title="studies"
    description="studiesTitleDescription" />

  <Investigation />
</template>
