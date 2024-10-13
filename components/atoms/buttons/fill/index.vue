<script setup lang="ts">
import './fill.scss'

type ButtonProps = {
  text: string
  link?: string
  externalLink?: string
  onClick?: () => void
  disabled?: boolean
}

const router = useRouter()

const { text, link, externalLink, onClick, disabled } = defineProps<ButtonProps>()

const handleClick = () => {
  if (link && !disabled) {
    router.push(link)
  }

  if (externalLink && !disabled) {
    window.open(externalLink, '_blank')
  }

  if (onClick && !disabled) {
    onClick()
  }
}
</script>

<template>
  <button class="fill-button" :class="{ 'btn-disabled': disabled }" type="button" @click="handleClick">
    <span>{{ text }}</span>
  </button>
</template>