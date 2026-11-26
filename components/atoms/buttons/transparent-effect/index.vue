<script setup lang="ts">
import './transparent.scss'

type ButtonProps = {
  text: string
  link?: string
  onClick?: () => void
}

const router = useRouter()
const localePath = useLocalePath()

const { text, link, onClick } = defineProps<ButtonProps>()

const handleClick = () => {
  if (link) {
    router.push(localePath(link))
  }

  if (onClick) {
    onClick()
  }
}
</script>

<template>
  <div class="btn-transparent btn-transparent-effect" type="button" @click="handleClick">
    <span class="btn-text">{{ text }}</span>
  </div>
</template>
