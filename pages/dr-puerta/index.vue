<script setup lang="ts">
import Title from '~/components/atoms/title-description/index.vue'
import Curriculum from '~/components/organisms/curriculum/index.vue'
useSeoMeta({
  title: 'Blog | Noticias, Análisis y Tendencias Sobre Tecnología y Desarrollo Web',
  description: 'Mantente al día con las últimas noticias sobre innovaciones en tecnología y desarrollo web.',
  ogSiteName: 'Paginas Profesionales',
  ogTitle: 'Blog | Noticias, Análisis y Tendencias Sobre Tecnología y Desarrollo Web',
  ogDescription: 'Mantente al día con las últimas noticias sobre innovaciones en tecnología y desarrollo web.',
  ogImage: '/meta/default.webp',
  ogUrl: 'https://paginasprofesionales.co/blog',
  ogLocale: 'es_CO',
  twitterTitle: 'Blog | Noticias, Análisis y Tendencias Sobre Tecnología y Desarrollo Web',
  twitterDescription: 'Mantente al día con las últimas noticias sobre innovaciones en tecnología y desarrollo web.',
  twitterImage: '/meta/default.webp',
  twitterCard: 'summary_large_image',
})

</script>

<template>
  <Title
    title="Dr. Jorge Puerta"
    description="footerDescription" />

  <Curriculum />

</template>
