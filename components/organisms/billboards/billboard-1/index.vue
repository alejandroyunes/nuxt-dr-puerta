<script lang="ts" setup>
import './billboard-1.scss'
import Buttons from '~/components/atoms/buttons/default/index.vue'
import ModalPromo from '~/components/organisms/modals/modal-promo/index.vue'

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
          class="learn-more"
          :text="$t('contact')" 
          :active="true" 
          @click="toggleModal"
        />
      </div>
    </div>

    <NuxtPicture
      src="/images/woman.webp"
      :alt="$t('billboard1Alt')"
      densities="x1"
      class="image"
    />

    <ModalPromo v-if="isModalOpen" :toggleModal="toggleModal"/>
  </section>
</template>
