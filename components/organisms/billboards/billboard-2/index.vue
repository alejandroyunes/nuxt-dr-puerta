<script setup lang="ts">
import './billboard-2.scss'

type Props = {
  data: {
    title: string
    subtitle: string
  }
}

const { data } = defineProps<Props>()

</script>

<template>
  <section class="billboard-2">
    <div class="bg">
      <h1 class="title">{{ $t(data.title) }}</h1>
      <p class="description">{{ $t(data.subtitle) }}</p>
    </div>
  </section>
</template>