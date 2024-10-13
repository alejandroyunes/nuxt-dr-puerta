<script setup lang="ts">
import './billboard-4.scss'
import Button from '@/components/atoms/buttons/fill/index.vue'

defineProps<{
  gallery: {
    image: string
    alt: string
  }[]
}>()

</script>

<template>
  <section class="billboard-4">

    <div class="column" >
      <div class="image-container" v-for="item in gallery" :key="item.image">
        <NuxtPicture
          :src="item.image"
          :alt="item.alt"
          densities="x1"
          sizes="xs:100vw md:100vw xl:100vw"
          format="webp"
        />
      </div>
    </div>


    <Button :text="$t('viewInstagram')" externalLink="https://www.instagram.com/cirugiafacial_jorgepuerta/" />

  </section>
</template>