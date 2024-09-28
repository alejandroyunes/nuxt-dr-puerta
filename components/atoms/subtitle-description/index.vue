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

    <h2 class="subtitle" :class="{ 'extra-top-space': marginTop }">{{ $t(title ?? '') }}</h2>

    <p class="description">{{ $t(description ?? '') }}</p>

  </section>
</template>
