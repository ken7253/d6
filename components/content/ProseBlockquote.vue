<template>
  <blockquote :class="$style.bq">
    <slot />
  </blockquote>
</template>

<style module>
.bq {
  margin: 0;
  padding: 0.5rem 1.25rem;
  background-color: var(--c-light);
  border-left: solid 5px var(--c-static-secondary);
  border-radius: 5px;
}
.bq > * {
  line-height: 1.8;
  opacity: 0.8;
}
</style>
