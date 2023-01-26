<template>
  <NuxtLink
    :to="props.link"
    :class="$style.post"
    :external="targetBlank"
    :target="targetBlank ? '_blank' : '_self'"
  >
    <slot />
    <time :class="$style.date" :datetime="props.date"> / {{ props.date }}</time>
  </NuxtLink>
</template>

<script lang="ts" setup>
const props = defineProps({
  link: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  targetBlank: Boolean,
});
</script>

<style module>
.post {
  display: inline-block;
  padding-bottom: 8px;
}
.date {
  font-size: 0.75em;
}
</style>
