<script setup lang='ts'>
import { ref } from 'vue'

import './menu.scss'

import ArrowDownSvg from '~/components/icons/ArrowDownSvg.vue'
import DiplomaSvg from '~/components/icons/DiplomadoSvg.vue'
import GallerySvg from '~/components/icons/GallerySvg.vue'
import HomeSvg from '~/components/icons/HomeSvg.vue'
import HospitalSvg from '~/components/icons/HospitalSvg.vue'

const isClicked = ref(false)

const itemClicked = () => {
  isClicked.value = true
  setTimeout(() => {
    isClicked.value = false
  }, 100)
}

const supportLinks = [
  {
    title: 'education',
    link: '/drpuerta',
    icon: HospitalSvg,
    iconAlt: 'Dr. Puerta universidad',
  },
  {
    title: 'studies',
    link: '/estudios',
    icon: DiplomaSvg,
    iconAlt: 'Dr. Puerta diplomado',
  },
]

const homeLinks = [
  {
    title: 'home',
    link: '/',
    icon: HomeSvg,
    iconAlt: 'Dr. Puerta inicio',
  },
  {
    title: 'gallery',
    link: '/galeria',
    icon: GallerySvg,
    iconAlt: 'Dr. Puerta galeria',
  },
]

</script>

<template>

  <nav class="menu">

    <ul class="menu-items">
      
      <NuxtLink to="/">
        <li class="menu-item">
          <h3 class="title">{{ $t('home') }}</h3>
          <ArrowDownSvg class="icon arrow-icon" />

          <ul :class="['sub-items', { 'clicked': isClicked }]" @click="itemClicked">
          <li v-for="(item, index) in homeLinks" :key="index" class="sub-item">
            <NuxtLink class="item" :to="item.link">
              <component :is="item.icon" class="icon" :alt="item.iconAlt" />
              <p>{{ $t(item.title) }}</p>
            </NuxtLink>
          </li>
        </ul>
        </li>
      </NuxtLink>

      <li class="menu-item">
        <h3 class="title">{{ $t('drPuerta') }}</h3>
        <ArrowDownSvg class="icon arrow-icon" />

        <ul :class="['sub-items', { 'clicked': isClicked }]" @click="itemClicked">
          <li v-for="(item, index) in supportLinks" :key="index" class="sub-item">
            <NuxtLink class="item" :to="item.link">
              <component :is="item.icon" class="icon" :alt="item.iconAlt" />
              <p>{{ $t(item.title) }}</p>
            </NuxtLink>
          </li>
        </ul>
      </li>

    </ul>
  </nav>

</template>
