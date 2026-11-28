<script setup>
  import { ref } from 'vue'
  import InstagramSvg from '~/components/icons/social/InstagramSvg.vue'
  import WhatsAppSvg from '~/components/icons/social/WhatsAppSvg.vue'

  const currentYear = ref(new Date().getFullYear())

  const socialLinks = [
    {
      icon: InstagramSvg,
      to: 'https://www.instagram.com/cirugiafacial_jorgepuerta/',
      label: 'footerInstagramLink',
    },
    {
      icon: WhatsAppSvg,
      to: 'https://api.whatsapp.com/send/?phone=573188981046&text&type=phone_number&app_absent=0',
      label: 'footerWhatsappLink',
    },
  ]
</script>

<template>
  <footer class="footer">

    <div class="footer-content">
      <div class="footer-item">
        <h3 class="">{{ $t('drPuertaFull') }}</h3>
        
        <p>{{ $t('drPuertaDescription') }}</p>

        <div class="social-links">
          <NuxtLink v-for="link in socialLinks" :to="link.to" :aria-label="$t(link.label)" target="_blank">
            <component :is="link.icon" />
          </NuxtLink> 
        </div>
      </div>

      <div class="footer-item">
        <h3 class="">{{ $t('footerLinks') }}</h3>
          <ul>
            <li><NuxtLinkLocale to="/">{{ $t('home') }}</NuxtLinkLocale></li>
            <li><NuxtLinkLocale to="/drpuerta">{{ $t('drPuerta') }}</NuxtLinkLocale></li>
            <li><NuxtLinkLocale to="/estudios">{{ $t('studies') }}</NuxtLinkLocale></li>
            <li><NuxtLinkLocale to="/galeria">{{ $t('gallery') }}</NuxtLinkLocale></li>
            <li><NuxtLinkLocale to="/contacto">{{ $t('contact') }}</NuxtLinkLocale></li>
        </ul>
      </div>
      
      <div class="footer-item">
        <h3 class="">{{ $t('contactUs') }}</h3>
        <ul>
          <li>+6 04 268 5436</li>
          <li> 318 898 1046.</li>
          <li>Cl. 4 Sur #43a-195 {{ $t('footerOffice') }} 165</li>
          <li>Medellín - Colombia.</li>
        </ul>
      </div>
    </div>

    <p class="copyright">&copy; {{ currentYear }} {{ $t('drPuertaFull') }}</p>
  </footer>
</template>
