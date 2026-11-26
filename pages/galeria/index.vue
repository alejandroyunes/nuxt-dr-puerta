<script setup lang="ts">
import Title from '~/components/atoms/title-description/index.vue'
import Billboard4 from '~/components/organisms/billboards/billboard-4/index.vue'

usePageSeo({
  title: 'galleryMetaTitle',
  description: 'galleryMetaDescription',
  siteName: 'galleryMetaName',
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
