<script setup lang="ts">
  import './contact.scss'
  import Title from '~/components/atoms/title-description/index.vue'
  import ContactForm from '~/components/organisms/form/contact/index.vue'
  //icons
  import LocationSvg from '~/components/icons/LocationSvg.vue'
  import TelephoneSvg from '~/components/icons/TelephoneSvg.vue'
  import WazeSvg from '~/components/icons/WazeSvg.vue'
  import GoogleSvg from '~/components/icons/GoogleSvg.vue'
</script>

<template>
  <div class="contact-wrapper">

    <div class="contact-info-wrapper">

      <div class="contact-info-content">
        <div class="column">
          <LocationSvg class="icon" />
          <p>Cl. 4 Sur #43a-195 - {{ $t('footerOffice') }} 165 – Medellín Colombia</p>
        </div>

        <div class="column">
          <TelephoneSvg class="icon" />
          <p>{{ $t('footerTel') }}: <a href="tel:+6042685436">+6 04 268 5436</a> – Cel: <a href="3188981046">318 898 1046</a></p>
        </div>
      </div>

      <div class="contact-info-content">

        <NuxtLink to="https://www.google.com/maps/place/The+Executive+Center/@6.2008251,-75.5781225,17z/data=!3m1!4b1!4m6!3m5!1s0x8e46827d9522146f:0x9cb4fb2387c83dc8!8m2!3d6.2008198!4d-75.5755476!16s%2Fg%2F11f30d2qqg?shorturl=1" target="_blank">
          <div class="column">
            <GoogleSvg class="icon" />
            <p>{{ $t('contactGoogle') }}</p>
          </div>
        </NuxtLink>


        <NuxtLink to="https://www.waze.com/ul?ll=@4.6387594%2C-75.6011931%2C15z?navigate=yes&zoom=17" target="_blank">
          <div class="column">
            <WazeSvg class="icon" />
            <p>{{ $t('contactWaze') }}</p>
          </div>
        </NuxtLink>
      </div>

      <div class="contact-info-content">
        <p>{{ $t('contactHowTo') }}</p>
        <p>{{ $t('contactHowToDescription') }}</p>
      </div>

    </div>

    <div>
      <Title
        martinTop
        title="contactTitle"
        description="contactDescription" />

      <ContactForm />
    </div>

  </div>
</template>
