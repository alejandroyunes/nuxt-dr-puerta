<script setup lang="ts">
import './fill.scss'

type ButtonProps = {
  text: string
  link?: string
  onClick?: () => void
}

const router = useRouter()

const { text, link, onClick } = defineProps<ButtonProps>()

const handleClick = () => {
  if (link) {
    router.push(link)
  }

  if (onClick) {
    onClick()
  }
}
</script>

<template>
  <button class="fill-button" type="button" @click="handleClick">
    <span>{{ text }}</span>
  </button>
</template>