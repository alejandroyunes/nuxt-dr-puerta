<script setup lang="ts">
import './assets/error.scss'
import type { NuxtError } from '#app'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
import Button from '@/components/atoms/buttons/fill/index.vue'

const props = defineProps({
  error: Object as () => NuxtError
})

const goBackHome = t('goBackHome')
const pageNotFound = t('pageNotFound')
const errorMessage = t('errorMessage')

</script>

<template>
  <div class="error-page">
    
    <h1 v-if="props.error" class="error-page-status">{{ props.error?.statusCode || 404 }}</h1>
    <p v-if="props.error?.statusCode === 404" class="error-page-message">{{ pageNotFound }}</p>
    <p v-else class="error-page-message">{{ errorMessage }}</p>

    <Button :text="goBackHome" link="/" />

  </div>
</template>
