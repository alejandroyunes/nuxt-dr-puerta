<script lang="ts" setup>
import './title-description.scss'

type Props = {
  title: string
  description?: string
}

const { title, description } = defineProps<Props>()

</script>

<template>
  <section class="title-description">
    <h1 class="title">{{ $t(title ?? '') }}</h1>
    <p class="description">{{ $t(description ?? '') }}</p>
  </section>
</template>
