<script setup lang='ts'>
import { ref } from 'vue'

import './menu.scss'
import GraphicDesignSvg from '~/components/icons/menu/GraphicDesign.vue'
import ArrowDownSvg from '~/components/icons/ArrowDownSvg.vue'
import WebDesignSvg from '~/components/icons/menu/WebDesignSvg.vue'

import UniversitySvg from '~/components/icons/UnivercitySvg.vue'
import DiplomaSvg from '~/components/icons/DiplomadoSvg.vue'

const isClicked = ref(false)

const itemClicked = () => {
  isClicked.value = true
  setTimeout(() => {
    isClicked.value = false
  }, 100)
}

const supportLinks = [
{
    title: 'Dr. Puerta',
    link: '/dr-puerta',
    icon: UniversitySvg,
    iconAlt: 'Diseño web',
  },
  {
    title: 'footerLink3',
    link: '/estudios',
    icon: DiplomaSvg,
    iconAlt: 'Diseño gráfico'
  },
]

</script>

<template>

  <nav class="menu">

    <ul class="items">
      
      <NuxtLink to="/">
        <li class="item">
          <h3 class="title">Inicio</h3>
          <ArrowDownSvg class="icon arrow-icon" />
        </li>
      </NuxtLink>

      <li class="item">
        <h3 class="title">Dr. Puerta</h3>
        <ArrowDownSvg class="icon arrow-icon" />

        <ul :class="['sub-items', { 'clicked': isClicked }]" @click="itemClicked">
          <li v-for="(item, index) in supportLinks" :key="index" class="sub-item">
            <NuxtLink class="link" :to="item.link">
              <component :is="item.icon" class="icon" :alt="item.iconAlt" />
              <p>{{ $t(item.title) }}</p>
            </NuxtLink>
          </li>
        </ul>
      </li>

    </ul>
  </nav>

</template>
