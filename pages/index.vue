<template>
  <div>
    <h2>pages</h2>
    <ul :class="$style.link">
      <li :class="$style.item"><NuxtLink to="/works/">works</NuxtLink></li>
      <li :class="$style.item"><NuxtLink to="/about/">about</NuxtLink></li>
      <li :class="$style.item"><NuxtLink to="/post/">post</NuxtLink></li>
    </ul>
    <zenn-article></zenn-article>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  title: ''
})
</script>

<style module>
.link {
  display: flex;
  list-style-type: none;
}
.item:not(:first-child)::before {
  display: inline-block;
  content: "/";
  transform: translateY(3px);
  padding: 0 3px;
}
</style>