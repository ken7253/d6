<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script lang="ts" setup>
import { useHead } from '#imports';

const { host, protocol } = new URL(import.meta.url);

useHead({
  meta: [
    { property: 'og:type', content: 'website' },
    { property: 'og:site_name', content: 'dairoku-studio.com' },
    { property: 'og:title', content: 'dairoku-studio' },
    //{ property: 'og:url', content: `${protocol}//${host}${path}` },
    {
      property: 'og:image',
      content: `${protocol}//${host}/og-image.png`,
    },
    { property: 'twitter:card', content: 'summary' },
    { property: 'twitter:site', content: '@ken7253_' },
  ],
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} - dairoku studio` : `dairoku studio`;
  },
});
</script>
