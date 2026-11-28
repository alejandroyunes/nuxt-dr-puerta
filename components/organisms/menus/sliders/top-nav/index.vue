<script lang="ts" setup>

import UseSetTheme from '~/components/hooks/useSetTheme.vue'

//icons
import ExitSvg from '@/components/icons/ExitSvg.vue'
import DiplomaSvg from '~/components/icons/DiplomadoSvg.vue'
import WhatsAppSvg from '~/components/icons/social/WhatsAppSvg.vue'
import InstagramMobileMenuSvg from '~/components/icons/social/InstagramMobileMenuSvg.vue'
import HomeSvg from '~/components/icons/HomeSvg.vue'
import HospitalSvg from '~/components/icons/HospitalSvg.vue' 
import GallerySvg from '~/components/icons/GallerySvg.vue'
import ContactSvg from '~/components/icons/ContactSvg.vue'

const { toggle, isOpen } = defineProps<{
  toggle: () => void
  isOpen: boolean | undefined
}>()

const navLinks = [
  {
    title: 'home',
    link: '/',
    icon: HomeSvg,
    iconAlt: 'Diseño web',
  },
  {
    title: 'drPuerta',
    link: '/drpuerta',
    icon: HospitalSvg,
    iconAlt: 'Diseño web',
  },
  {
    title: 'gallery',
    link: '/galeria',
    icon: GallerySvg,
    iconAlt: 'Dr. Puerta galeria',
  },
  {
    title: 'studies',
    link: '/estudios',
    icon: DiplomaSvg,
    iconAlt: 'Diseño gráfico'
  },
  {
    title: 'contact',
    link: '/contacto',
    icon: ContactSvg,
    iconAlt: 'ícono de Contacto'
  },
]

const socialLinks = [
  { icon: InstagramMobileMenuSvg, to: 'https://www.instagram.com/cirugiafacial_jorgepuerta/', label: 'menuInstagramLink' },
  { icon: WhatsAppSvg, to: 'https://api.whatsapp.com/send/?phone=573188981046&text&type=phone_number&app_absent=0', label: 'menuWhatsappLink' },
]

</script>

<template>

  <div
    :class="[isOpen === undefined ?
     'display-none' : 'top-nav',
     isOpen ? 'top-slide-in' : 'top-slide-out']">
    
    <div class="top-nav-header">

      <NuxtLinkLocale @click="toggle" to="/" class="top-nav-logo">
        <NuxtPicture
          class="image"
          src="/logo.webp"
          alt="Logo Dr. Puerta"
          width="250"
          height="90"
          densities="x1"
          sizes="xs:140px md:168px xl:168px"
          format="webp"
        />
      </NuxtLinkLocale>

      <div @click="toggle" class="animation-exit">
        <ExitSvg class=" exit-icon" />
      </div>
    </div>

    <div class="top-nav-content">

      <nav class="top-nav-list">
        <ul>
          <li v-for="(link, index) in navLinks" :key="index">
            <NuxtLinkLocale :to="link.link" class="top-nav-item" @click="toggle()">
              <component :is="link.icon" :alt="link.iconAlt" />
              <p>{{ $t(link.title) }}</p>
            </NuxtLinkLocale>
          </li>
        </ul>
      </nav>

      <div class="top-nav-contact">

        <ul class="social-links">
          <li class="item" v-for="socialLink in socialLinks" :key="socialLink.to">
            <NuxtLink :to="socialLink.to" :aria-label="$t(socialLink.label)" target="_blank">
            <component :is="socialLink.icon" />
          </NuxtLink>
          </li>

          <UseSetTheme class="top-nav-icons" />
        </ul>

      </div>

    </div>

  </div>

  <div v-if="isOpen" @click="toggle" class="content-bg" />
</template>