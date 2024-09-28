<script setup lang="ts">

import SunSvg from '~/components/icons/header/SunSvg.vue'
import MoonSvg from '~/components/icons/header/MoonSvg.vue'

const themeStore = useThemeStore()

let theme = themeStore.getTheme

const handleTheme = () => {
  theme.theme = theme.theme === 'light' ? 'dark' : 'light'
  document.documentElement.setAttribute("data-color-scheme", theme.theme)
}

</script>

<template>
  <div @click="handleTheme()">
    <MoonSvg v-if="theme.theme === 'light'" class="icon sun" />
    <SunSvg v-else class="icon moon" />
  </div>
</template>
