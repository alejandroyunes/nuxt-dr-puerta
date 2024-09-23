<script setup lang="ts">
import './icon-cards-2.scss'
import ButtonTransparentEffect from '~/components/atoms/buttons/transparent-effect/index.vue'

type IconTitleProps = {
  data: {
    icon: Component
    iconAlt: string
    title: string
    btnText: string
    link: string
  }[]
}

const { data } = defineProps<IconTitleProps>()

</script>

<template>

  <section class="icon-cards-2">

    <div class="card" v-for="(item, index) in data" :key="index">

      <component class="card-icon" :is="item.icon" :aria-label="item.iconAlt"/>

      <div class="details">
        <div class="details-content">
          <h3 class="title">
            {{ $t(item.title) }}
          </h3>
        </div>
        <ButtonTransparentEffect :text="$t(item.btnText)" :link="item.link" />
      </div>

    </div>
    
  </section>

</template>