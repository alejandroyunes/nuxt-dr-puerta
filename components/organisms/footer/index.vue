<script setup>
  import { ref } from 'vue'
  import './footer.scss'
  import InstagramSvg from '~/components/icons/social/InstagramSvg.vue'
  import WhatsAppSvg from '~/components/icons/social/WhatsAppSvg.vue'

  const currentYear = ref(new Date().getFullYear())

  const socialLinks = [
    {
      icon: InstagramSvg,
      to: 'https://www.instagram.com/cirugiafacial_jorgepuerta/',
      label: 'Visítanos en Instagram',
    },
    {
      icon: WhatsAppSvg,
      to: 'https://api.whatsapp.com/send/?phone=573188981046&text&type=phone_number&app_absent=0',
      label: 'Contáctanos por WhatsApp',
    },
  ]
</script>

<template>
  <footer class="footer">

    <div class="footer-content">
      <div class="item">
        <h3 class="">{{ $t('footerTitle') }}</h3>
        
        <p>{{ $t('footerDescription') }}</p>

        <div class="social-links">
          <NuxtLink v-for="link in socialLinks" :to="link.to" target="_blank">
            <component :is="link.icon" class="icon"/>
          </NuxtLink> 
        </div>
      </div>

      <div class="item">
        <h3 class="">{{ $t('footerLinks') }}</h3>
          <ul>
            <li><NuxtLink to="/">{{ $t('footerLink1') }}</NuxtLink></li>
            <li><NuxtLink to="/dr-puerta">{{ $t('footerLink2') }}</NuxtLink></li>
            <li><NuxtLink to="/estudios">{{ $t('footerLink3') }}</NuxtLink></li>
            <li><NuxtLink to="/contacto">{{ $t('footerLink4') }}</NuxtLink></li>
        </ul>
      </div>
      
      <div class="item">
        <h3 class="">{{ $t('footerContact') }}</h3>
        <ul>
          <li>+6 04 268 5436</li>
          <li> 318 898 1046.</li>
          <li>Cl. 4 Sur #43a-195 {{ $t('footerOffice') }} 165</li>
          <li>Medellín - Colombia.</li>
        </ul>
      </div>
    </div>

    <p class="copyright">&copy; {{ currentYear }} {{ $t('footerCopyright') }}</p>
  </footer>
</template>
