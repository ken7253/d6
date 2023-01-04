<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script lang="ts" setup>
import { useHead, useRoute } from "#imports";

const route = useRoute();
const DOMAIN_NAME = "https://dairoku-studio.com";

useHead({
  meta: [
    {
      property: "og:image",
      content: "https://dairoku-studio.com/site-img.jpg",
    },
    { property: "og:type", content: "website" },
    { property: "og:site_name", content: "dairoku-studio.com" },
    { property: "og:url", content: `${DOMAIN_NAME}${route.fullPath}` },
    { property: "og:title", content: "dairoku-studio" },
    { property: "twitter:card", content: "summary" },
    { property: "twitter:site", content: "@ken7253_" },
  ],
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} - dairoku studio` : `dairoku studio`;
  },
});
</script>
