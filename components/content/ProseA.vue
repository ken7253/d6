<script setup lang="ts">
defineProps({
  href: {
    type: String,
    default: ''
  },
  blank: {
    type: Boolean,
    default: false
  }
})
</script>

<template>
  <NuxtLink :href="href" :class="$style.link">
    <slot />
  </NuxtLink>
</template>

<style module>
.link {
  padding: 0 .25em;
  text-decoration: none;
}
.link:hover {
  text-decoration: underline;
}
</style>