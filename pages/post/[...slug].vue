<template>
  <div>
    <ContentDoc />
  </div>
</template>

<script lang="ts" setup>
import { useHead } from "#app";

useHead({
  meta: [{ property: "og:type", content: "article" }],
});
</script>
