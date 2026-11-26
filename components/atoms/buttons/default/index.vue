<script setup lang="ts">

type ButtonProps = {
  text: string
  link?: string
  externalLink?: string
  onClick?: () => void
  primaryHover?: boolean
}

const router = useRouter()
const localePath = useLocalePath()

const { text, link, externalLink, onClick, primaryHover } = defineProps<ButtonProps>()

const handleClick = () => {
  if (link) {
    router.push(localePath(link))
  }

  if (externalLink) {
    window.open(externalLink, '_blank')
  }

  if (onClick) {
    onClick()
  }
}
</script>

<template>
  <button
    class="btn-default"
    :class="{ 'btn-default-primary-hover': primaryHover }"
    type="button"
    @click="handleClick"
  >
    <span>{{ text }}</span>
    
  </button>
</template>