<script setup lang="ts">

import SunSvg from '~/components/icons/header/SunSvg.vue'
import MoonSvg from '~/components/icons/header/MoonSvg.vue'

import { setDarkMode } from '~/utils/utils'
const isDarkMode = ref(false)

const handleTheme = () => {
  isDarkMode.value = !isDarkMode.value
  setDarkMode(isDarkMode.value)
}

</script>

<template>
  <div @click="handleTheme()">
    <MoonSvg v-if="!isDarkMode" class="icon sun" aria-label="Cambiar tema del sitio web" />
    <SunSvg v-else class="icon moon" aria-label="Cambiar tema del sitio web" />
  </div>
</template>

