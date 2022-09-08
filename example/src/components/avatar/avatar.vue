<script setup lang="ts">
  import { ref } from 'vue'
  import { SAvatar } from 'scope'

  const size = ref(["small","nano","mini","medium","large"])
</script>

<template>
  <div>
    <s-avatar v-for="i in 5" :size="size[i-1]" name="Elone Hoo" />
  </div>
</template>
