<script lang="ts" setup>
import './top-nav.scss'

//icons
import ExitSvg from '@/components/icons/ExitSvg.vue'
import UniversitySvg from '~/components/icons/UnivercitySvg.vue'
import DiplomaSvg from '~/components/icons/DiplomadoSvg.vue'
import WhatsAppSvg from '~/components/icons/social/WhatsAppSvg.vue'
import InstagramSvg from '~/components/icons/social/InstagramSvg.vue'
import HomeSvg from '~/components/icons/HomeSvg.vue'

const { toggle, isOpen } = defineProps<{
  toggle: () => void
  isOpen: boolean | undefined
}>()

const navLinks = [
  {
    title: 'footerLink1',
    link: '/',
    icon: HomeSvg,
    iconAlt: 'Diseño web',
  },
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
  {
    title: 'footerLink4',
    link: '/contacto',
    icon: DiplomaSvg,
    iconAlt: 'ícono de Contacto'
  },
]

const socialLinks = [
  { icon: InstagramSvg, to: 'https://www.instagram.com/cirugiafacial_jorgepuerta/' },
  { icon: WhatsAppSvg, to: 'https://api.whatsapp.com/send/?phone=573188981046&text&type=phone_number&app_absent=0' },
]

</script>


<template>

  <div
    :class="[isOpen === undefined ?
     'display-none' : 'top-nav',
     isOpen ? 'top-slide-in' : 'top-slide-out']">
    
    <div class="top-nav-header">

      <NuxtLink @click="toggle" to="/" class="top-nav-logo">
        <NuxtPicture
          class="image"
          src="/logo.webp"
          alt="Logo de páginas profesionales"
          densities="x1"
        />
      </NuxtLink>

      <div @click="toggle" class="animation-exit">
        <ExitSvg class=" exit-icon" />
      </div>
    </div>

    <div class="top-nav-content">

      <nav class="top-nav-list">
        <ul>
          <li v-for="(link, index) in navLinks" :key="index">
            <NuxtLink :to="link.link" class="item" @click="toggle()">
              <component :is="link.icon" class="icon" :alt="link.iconAlt" />
              <p>{{ $t(link.title) }}</p>
            </NuxtLink>
          </li>
        </ul>
      </nav>

      <div class="top-nav-contact">

        <ul class="social-links">
          <li class="item" v-for="socialLink in socialLinks" :key="socialLink.to">
            <NuxtLink :to="socialLink.to" target="_blank">
            <component :is="socialLink.icon" />
          </NuxtLink>
          </li>
        </ul>
      </div>

    </div>

  </div>

  <div v-if="isOpen" @click="toggle" class="content-bg" />
</template>