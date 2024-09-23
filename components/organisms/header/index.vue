<script lang="ts" setup>
import './header.scss'
const { locale, setLocale } = useI18n()
import { ref } from 'vue'
import { setDarkMode } from '~/utils/utils'

import SliderTopNav from '~/components/organisms/menus/sliders/top-nav/index.vue'
import Dropdown from '~/components/organisms/menus/dropdown/desktop/index.vue'
import SunSvg from '~/components/icons/header/SunSvg.vue'
import MoonSvg from '~/components/icons/header/MoonSvg.vue'
import Button from '~/components/atoms/buttons/default/index.vue'

import HamburgerVerticalSvg from '~/components/icons/header/HamburgerSvg.vue'
import LocationSvg from '~/components/icons/LocationSvg.vue'
import TelephoneSvg from '~/components/icons/TelephoneSvg.vue'

const isSliderTopNavOpen = ref<boolean | undefined>(undefined)
const isDarkMode = ref(false)

onMounted(() => {
  const theme = localStorage.getItem('theme')

  if (theme === 'dark') {
    isDarkMode.value = true
  }
})

const handleTheme = () => {
  isDarkMode.value = !isDarkMode.value
  setDarkMode(isDarkMode.value)
}

const toggleSliderTopNav = () => {
  isSliderTopNavOpen.value = !isSliderTopNavOpen.value
}

</script>

<template>

  <header class="header">

    <div class="contact-top">
      <div class="column desktop-only">
        <LocationSvg class="icon" />
        <p>Cl. 4 Sur #43a-195 - {{ $t('footerOffice') }} 165 – Medellín Colombia</p>
      </div>

      <div class="column">
        <TelephoneSvg class="icon" />
        <p>{{ $t('footerTel') }}: <a href="tel:+6042685436">+6 04 268 5436</a> – Cel: <a href="3188981046">318 898 1046</a></p>
      </div>
    </div>

    <div class="container">
      <NuxtLink to="/" class="logo">
        <NuxtPicture
          src="/logo.webp"
          alt="Logo de páginas profesionales"
          densities="x1"
        />
      </NuxtLink>

      <div class="details">

        <div class="language-switcher">
          <button :class="{ 'active': locale === 'en' }" @click="setLocale('en')">en</button>
          <button :class="{ 'active': locale === 'es' }" @click="setLocale('es')">es</button>
        </div>

        <div class="dark-mode-icons" @click="handleTheme()">
          <MoonSvg v-if="!isDarkMode" class="icon sun" aria-label="Cambiar tema del sitio web" />
          <SunSvg v-else class="icon moon" aria-label="Cambiar tema del sitio web" />
        </div>

        <Dropdown class="desktop-only" />

        <NuxtLink to="/contacto">
          <Button :text="$t('footerLink4')" class="contact-button desktop-only" aria-label="Ir a la sección de contacto" />
        </NuxtLink>

        <div class="hamburger-menu mobile-only" @click="toggleSliderTopNav">
          <HamburgerVerticalSvg class="icon" aria-label="Abrir menú de navegación" />
        </div>

        <SliderTopNav :toggle="toggleSliderTopNav" :isOpen="isSliderTopNavOpen" />
      </div>
    </div>
    
  </header>


</template>