<template>
  <h4 :id="id" :class="$style.heading">
    <NuxtLink :href="`#${id}`" :class="$style.link">
      <slot />
    </NuxtLink>
  </h4>
</template>

<script setup lang="ts">
defineProps<{ id: string }>();
</script>

<style module>
.heading::before {
  content: '####';
  padding-right: 1em;
}
.link {
  text-decoration: none;
}
.link:hover {
  text-decoration: underline;
}
</style>
