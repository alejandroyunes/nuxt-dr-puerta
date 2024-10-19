<script lang="ts" setup>
import './billboard-1.scss'
import Buttons from '~/components/atoms/buttons/default/index.vue'
import ContactModal from '~/components/organisms/modals/contact/index.vue'

const isModalOpen = ref(false)

const toggleModal = () => {
  isModalOpen.value = !isModalOpen.value
}

</script>

<template>
  <section class="billboard-1">

    <div class="details">
      <div class="details-content">
        <h1 class="title">{{ $t('surgery') }}<br/> {{ $t('surgeryTitle') }}</h1>
        <p class="description">{{ $t('surgeryDescription') }}</p>
        <Buttons
          class="button-cta"
          :text="$t('weContactYou')" 
          :active="true" 
          @click="toggleModal"
        />
      </div>
    </div>

    <NuxtPicture
      src="/images/woman-medium.webp"
      :alt="$t('billboard1Alt')"
      densities="x1"
      class="image"
      sizes="xs:400px md:400px xl:100vw" 
      format="webp"
    />

    <ContactModal v-if="isModalOpen" :toggleModal="toggleModal"/>

  </section>
</template>
