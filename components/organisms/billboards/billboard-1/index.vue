<script lang="ts" setup>
import { defineAsyncComponent } from 'vue'
import Buttons from '~/components/atoms/buttons/default/index.vue'

const ContactModal = defineAsyncComponent(() => import('~/components/organisms/modals/contact/index.vue'))
const isModalOpen = ref(false)

const openModal = () => {
  isModalOpen.value = true
}

const closeModal = () => {
  isModalOpen.value = false
}

</script>

<template>
  <section class="billboard-1">

    <div class="details">
      <div class="details-content">
        <p class="eyebrow">{{ $t('heroEyebrow') }}</p>
        <h1 class="title">{{ $t('surgery') }}<br/> {{ $t('surgeryTitle') }}</h1>
        <p class="description">{{ $t('surgeryDescription') }}</p>
        <div class="hero-actions">
          <Buttons
            class="button-cta"
            :text="$t('weContactYou')" 
            :active="true" 
            @click="openModal"
          />
          <NuxtLinkLocale to="/galeria" class="gallery-link">{{ $t('viewGallery') }}</NuxtLinkLocale>
        </div>
        <div class="trust-row" aria-label="Experience summary">
          <div><strong>23+</strong><span>{{ $t('heroExperience') }}</span></div>
          <div><strong>5000+</strong><span>{{ $t('heroSurgeries') }}</span></div>
        </div>
      </div>
    </div>

    <NuxtPicture
      src="/images/woman-medium.webp"
      :alt="$t('billboard1Alt')"
      width="400"
      height="606"
      loading="eager"
      :preload="{ fetchPriority: 'high' }"
      :img-attrs="{ fetchpriority: 'high' }"
      densities="x1"
      class="image"
      sizes="xs:400px md:400px xl:100vw" 
      format="webp"
    />

    <component :is="ContactModal" v-if="isModalOpen" :toggleModal="closeModal" />

  </section>
</template>
