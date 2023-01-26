<template>
  <div :class="$style.image">
    <img :src="src" :alt="alt" :width="width" :height="height" loading="lazy" decoding="async" />
  </div>
</template>

<script setup lang="ts">
defineProps({
  src: {
    type: String,
    default: '',
  },
  alt: {
    type: String,
    default: '',
  },
  width: {
    type: [String, Number],
    default: undefined,
  },
  height: {
    type: [String, Number],
    default: undefined,
  },
});
</script>

<style module>
.image {
  background-color: var(--c-base-dark);
}
img {
  border: solid 3px var(--c-base-dark);
  display: block;
  max-width: 100%;
  height: auto;
}
</style>
