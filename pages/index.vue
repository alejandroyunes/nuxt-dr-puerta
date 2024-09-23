<script setup lang="ts">
import Billboard from '~/components/organisms/billboards/billboard-1/index.vue'
import SubTitle from '~/components/atoms/subtitle-description/index.vue'
import IconCards from '~/components/organisms/cards/icon-cards/index.vue'
import IconCards2 from '~/components/organisms/cards/icon-cards-2/index.vue'
import Billboard3 from '~/components/organisms/billboards/billboard-3/index.vue'
import Billboard2 from '~/components/organisms/billboards/billboard-2/index.vue'

// Icons
import CollegeSvg from '~/components/icons/CollegeSvg.vue'
import UniversitySvg from '~/components/icons/UnivercitySvg.vue'
import DiplomaSvg from '~/components/icons/DiplomadoSvg.vue'
import GraduationSvg from '~/components/icons/GraduateSvg.vue'
import HandPlusSvg from '~/components/icons/HandPlusSvg.vue'
import WorldSnakeSvg from '~/components/icons/WorldSnakeSvg.vue'
import MedicalSvg from '~/components/icons/MedicalSvg.vue'

useSeoMeta({
  title: 'Servicio Web Profesional en Colombia',
  description: 'Ofrecemos hosting gratis el primer año con un diseño web único.',
  ogSiteName: 'Paginas Profesionales',
  ogTitle: 'Servicio Web Profesional en Colombia',
  ogDescription: 'Ofrecemos hosting gratis el primer año con un diseño web único. Aprovecha esta oferta antes de que se termine.',
  ogImage: '/meta/inicio-web-profesional.webp',
  ogUrl: 'https://paginasprofesionales.co',
  ogLocale: 'es_CO',
  twitterTitle: 'Servicio Web Profesional en Colombia',
  twitterDescription: 'Ofrecemos hosting gratis el primer año con un diseño web único. Aprovecha esta oferta antes de que se termine.',
  twitterImage: '/meta/inicio-web-profesional.webp',
  twitterCard: 'summary_large_image',
})

const iconCards = [
  {
    title: 'iconCardsTitle',
    icon: CollegeSvg,
    description: 'iconCardsDescription',
    iconAlt: 'iconCardsAlt',
  },
  {
    title: 'iconCardsTitle2',
    icon: GraduationSvg,
    description: 'iconCardsDescription2',
    iconAlt: 'iconCardsAlt2',
  },
  {
    title: 'Diplomado',
    icon: DiplomaSvg,
    description: 'iconCardsDescription3',
    iconAlt: 'iconCardsAlt3',
  },
  {
    title: 'iconCardsTitle4',
    icon: UniversitySvg,
    description: 'iconCardsDescription4',
    iconAlt: 'iconCardsAlt4',
  }
]

const iconCards2 = [
  {
    title: 'iconCards2Title',
    btnText: 'iconCards2Button',
    icon: HandPlusSvg,
    iconAlt: 'iconCards2Alt',
    link: '/dr-puerta'
  },
  {
    title: 'iconCards2Title2',
    btnText: 'iconCards2Button2',
    icon: WorldSnakeSvg,
    iconAlt: 'iconCards2Alt2',
    link: '/contacto'
  },
  {
    title: 'iconCards2Title3',
    btnText: 'iconCards2Button3',
    icon: MedicalSvg,
    iconAlt: 'iconCards2Alt3',
    link: '/estudios'
  },
]

</script>

<template>
  <Billboard />

  <SubTitle marginTop :title="$t('estudios')"
    :description="$t('estudiosDescription')" />
  
    <IconCards :data="iconCards" />

    <Billboard2 
      :data="{title: 'billboard2Title', subtitle: 'billboard2Subtitle'}" />

    <Billboard3 />

    <IconCards2 :data="iconCards2" />

</template>
