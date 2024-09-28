<script setup lang="ts">
import './icon-cards.scss'	

import Button from '~/components/atoms/buttons/default/index.vue'

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

    <div class="cards-container">

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

    </div>

    <Button :text="$t('studies')" class="studies-cta" :link="'/studies'" />

  </section>

</template>