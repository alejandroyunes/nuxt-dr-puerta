<script setup lang="ts">
import './icon-cards.scss'
type IconTitleProps = {
  data: {
    icon: Component
    iconAlt: string
    title: string
    description: string
  }[]
}

const { data } = defineProps<IconTitleProps>()

</script>

<template>

  <section class="icon-cards">

    <div class="card" v-for="(item, index) in data" :key="index">

      <component class="image" :is="item.icon" :aria-label="item.iconAlt"/>

      <div class="details">
        <h3 class="title">
          {{ $t(item.title) }}
        </h3>

        <span class="description">
          {{ $t(item.description) }}
        </span>
      </div>

    </div>
    
  </section>

</template>