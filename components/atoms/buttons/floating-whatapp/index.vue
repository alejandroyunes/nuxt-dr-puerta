<script setup lang="ts">
import './floating-whatapp.scss'
import WhatsappSvg from '~/components/icons/social/WhatsAppSvg.vue'

const handleClick = () => {
}
</script>

<template>
  <div class="floating-whatapp">
      <NuxtLink to="https://api.whatsapp.com/send/?phone=573188981046&text&type=phone_number&app_absent=0" target="_blank" class="floating-whatapp-content">  
        <WhatsappSvg />
      </NuxtLink>
  </div>
</template>