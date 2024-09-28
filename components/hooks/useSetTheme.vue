<script setup lang="ts">

import SunSvg from '~/components/icons/header/SunSvg.vue'
import MoonSvg from '~/components/icons/header/MoonSvg.vue'

import { setDarkMode } from '~/utils/utils'
const isDarkMode = ref(false)

const handleTheme = () => {
  if(localStorage.getItem('theme') === 'dark') {
    isDarkMode.value = false
    setDarkMode(isDarkMode.value)
  } else {
    isDarkMode.value = true
    setDarkMode(isDarkMode.value)
  }
}

</script>

<template>
  <div @click="handleTheme()">
    <MoonSvg v-if="!isDarkMode" class="icon sun" aria-label="Cambiar tema del sitio web" />
    <SunSvg v-else class="icon moon" aria-label="Cambiar tema del sitio web" />
  </div>
</template>

