<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script lang="ts" setup>
import { useHead, useRoute } from "#imports";

const { host } = new URL(import.meta.url);
const route = useRoute();

useHead({
  meta: [
    {
      property: "og:image",
      content: `${host}/site-icon.jpg`,
    },
    { property: "og:type", content: "website" },
    { property: "og:site_name", content: "dairoku-studio.com" },
    { property: "og:url", content: `${host}${route.fullPath}` },
    { property: "og:title", content: "dairoku-studio" },
    { property: "twitter:card", content: "summary" },
    { property: "twitter:site", content: "@ken7253_" },
  ],
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} - dairoku studio` : `dairoku studio`;
  },
});
</script>
