<template>
  <blockquote :class="$style.bq">
    <slot />
  </blockquote>
</template>

<style module>
.bq {
  margin: 1em 0;
  padding: 10px 0 10px 20px;
  background-color: var(--c-light);
  border-left: solid 5px var(--c-lightest);
  border-radius: 5px;
}
.bq > * {
  margin: 0;
  opacity: 0.7;
}
</style>
