<script lang="ts" setup>
import './subtitle-description.scss'

type Props = {
  title: string
  description?: string
  marginTop?: boolean
}

const { title, description, marginTop } = defineProps<Props>()

</script>

<template>
  <section class="subtitle-description">

    <h2 class="subtitle" :class="{ 'extra-top-space': marginTop }">{{ title }}</h2>

    <p class="description">{{ description }}</p>

  </section>
</template>
