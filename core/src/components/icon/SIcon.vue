<script setup lang="ts">
import type { IconifyIcon } from '@iconify/vue/dist/offline'
import { Icon } from '@iconify/vue/dist/offline'
import type { DefineComponent } from 'vue'

defineProps<{
  icon: IconifyIcon | DefineComponent
}>()
</script>

<template>
  <Icon v-if="typeof icon['body'] === 'string'" :icon="(icon as IconifyIcon)" />
  <component :is="icon" v-else />
</template>

<style scoped>

</style>
