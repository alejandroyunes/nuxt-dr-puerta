<script setup lang="ts">
import Title from '~/components/atoms/title-description/index.vue'
import Investigation from '~/components/organisms/investigation/index.vue'

usePageSeo({
  title: 'estudiosMetaTitle',
  description: 'estudiosMetaDescription',
  siteName: 'estudiosMetaName',
})

</script>

<template>
  <Title
    title="studies"
    description="studiesTitleDescription" />

  <Investigation />
</template>
