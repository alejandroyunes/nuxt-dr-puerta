<script setup lang="ts">
import { useI18n } from 'vue-i18n'

import Title from '~/components/atoms/title-description/index.vue'
import Billboard4 from '~/components/organisms/billboards/billboard-4/index.vue'

const { t } = useI18n()

useSeoMeta({
  title: t('galleryMetaTitle'),
  description: t('galleryMetaDescription'),
  ogSiteName: t('galleryMetaName'),
  ogTitle: t('galleryMetaTitle'),
  ogDescription: t('galleryMetaDescription'),
  ogImage: '/meta/default.webp',
  ogUrl: t('galleryMetaUrl'),
  ogLocale: t('siteLocale'),
  twitterTitle: t('galleryMetaTitle'),
  twitterDescription: t('galleryMetaDescription'),
  twitterImage: '/meta/default.webp',
  twitterCard: 'summary_large_image',
})

const gallery = [
  {
    image: 'images/galeria/image-1.webp',
    alt: 'gallery1Alt',
  },
  {
    image: 'images/galeria/image-2.webp',
    alt: 'gallery2Alt',
  },
  {
    image: 'images/galeria/image-3.webp',
    alt: 'gallery3Alt',
  },
  {
    image: 'images/galeria/image-4.webp',
    alt: 'gallery4Alt',
  },
  {
    image: 'images/galeria/image-5.webp',
    alt: 'gallery5Alt',
  },
  {
    image: 'images/galeria/image-6.webp',
    alt: 'gallery6Alt',
  },
]

</script>

<template>
  <Title
    title="gallery"
    description="galleryDescription" />

  <Billboard4 :gallery="gallery" />

</template>
