<template>
  <div :class="$style.image">
    <img
      :src="src"
      :alt="alt"
      :width="width"
      :height="height"
      loading="lazy"
      decoding="async"
    />
  </div>
</template>

<script setup lang="ts">
defineProps({
  src: {
    type: String,
    default: "",
  },
  alt: {
    type: String,
    default: "",
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
  border: solid 2px var(--c-dark);
  border-radius: 5px;
}
.image > img {
  display: block;
  border-radius: 5px;
}
</style>
