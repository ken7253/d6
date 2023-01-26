<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script lang="ts" setup>
import { useHead } from '#imports';

useHead({
  meta: [
    { property: 'og:type', content: 'website' },
    { property: 'og:site_name', content: 'dairoku-studio.com' },
    { property: 'og:title', content: 'dairoku-studio' },
    {
      property: 'og:image',
      content: `https://dairoku-studio.com/ogp-thumbnail.png`,
    },
    { property: 'twitter:card', content: 'summary' },
    { property: 'twitter:site', content: '@ken7253_' },
  ],
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} - dairoku studio` : `dairoku studio`;
  },
});
</script>
