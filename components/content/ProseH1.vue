<template>
  <h1 :class="$style.heading">
    <slot />
  </h1>
</template>

<style module>
.heading::before {
  content: "#";
  padding-right: 1em;
}
</style>