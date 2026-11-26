<script setup lang="ts">
import Title from '~/components/atoms/title-description/index.vue'
import Curriculum from '~/components/organisms/curriculum/index.vue'

usePageSeo({
  title: 'drPuertaMetaTitle',
  description: 'drPuertaMetaDescription',
  siteName: 'drPuertaMetaName',
})

</script>

<template>
  <Title
    title="drPuertaFull"
    description="drPuertaDescription" />

  <Curriculum />

</template>
