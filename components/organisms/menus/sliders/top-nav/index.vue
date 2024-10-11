<script lang="ts" setup>
import './top-nav.scss'

import UseSetTheme from '~/components/hooks/useSetTheme.vue'

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
    title: 'home',
    link: '/',
    icon: HomeSvg,
    iconAlt: 'Diseño web',
  },
  {
    title: 'drPuerta',
    link: '/drpuerta',
    icon: UniversitySvg,
    iconAlt: 'Diseño web',
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
          alt="Logo Dr. Puerta"
          densities="x1"
          loading="lazy"
          sizes="xs:140px sm:140px md:168px lg:168px xl:168px xxl:168px xxxl:168px"
          format="webp"
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

          <UseSetTheme class="top-nav-icons" />
        </ul>

      </div>

    </div>

  </div>

  <div v-if="isOpen" @click="toggle" class="content-bg" />
</template>