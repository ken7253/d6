<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script lang="ts" setup>
import { useHead } from '#imports';

useHead({
  titleTemplate: (titleChunk: string) => {
    return titleChunk ? `${titleChunk} - dairoku studio` : `dairoku studio`;
  },
})
</script>