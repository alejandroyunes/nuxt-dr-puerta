<script lang="ts" setup>
import './header.scss'
import { ref, inject } from 'vue'
import { useI18n } from 'vue-i18n'
import UseSetTheme from '~/components/hooks/useSetTheme.vue'
import SliderTopNav from '~/components/organisms/menus/sliders/top-nav/index.vue'
import Dropdown from '~/components/organisms/menus/dropdown/desktop/index.vue'

import Button from '~/components/atoms/buttons/default/index.vue'

import HamburgerSvg from '~/components/icons/header/HamburgerSvg.vue'
import LocationSvg from '~/components/icons/LocationSvg.vue'
import TelephoneSvg from '~/components/icons/TelephoneSvg.vue'

const isSliderTopNavOpen = ref<boolean | undefined>(undefined)


const toggleSliderTopNav = () => {
  isSliderTopNavOpen.value = !isSliderTopNavOpen.value
}

const { locale } = useI18n({ useScope: 'global' })
const config = inject(Symbol.for('FormKitConfig')) as { locale: string } | undefined

const setLanguage = (language: string) => {
  locale.value = language

  if (config !== undefined) {
    config.locale = language
  }
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
        <p><span>{{ $t('footerTel') }}:</span> +6 04 268 5436 – Cel: 318 898 1046</p>
      </div>
    </div>

    <div class="container">
      <NuxtLink to="/" class="logo">
        <NuxtPicture
          src="/logo.webp"
          alt="Logo Dr. Puerta"
          class="logo"
          sizes="xs:140px md:168px xl:168px"
          format="webp"
        />
      </NuxtLink>

      <div class="details">

        <div class="language-switcher">
          <button :class="{ 'active': locale === 'en' }" @click="setLanguage('en')">en</button>
          <button :class="{ 'active': locale === 'es' }" @click="setLanguage('es')">es</button>
        </div>

        <UseSetTheme class="dark-mode-icons" />

        <Dropdown class="desktop-only" />

        <NuxtLink to="/contacto">
          <Button :text="$t('contact')" class="contact-button desktop-only" primaryHover aria-label="Ir a la sección de contacto" />
        </NuxtLink>

        <div class="hamburger-menu mobile-only" @click="toggleSliderTopNav">
          <HamburgerSvg class="icon" aria-label="Abrir menú de navegación" />
        </div>

        <SliderTopNav :toggle="toggleSliderTopNav" :isOpen="isSliderTopNavOpen" />
      </div>
    </div>
    
  </header>


</template>