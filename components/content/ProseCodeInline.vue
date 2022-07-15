<template>
  <code :class="$style['inline-code']">
    <slot />
  </code>
</template>

<style module>
.inline-code {
  font-size: .9em;
  margin: 0 5px;
  padding: 2px 10px;
  background-color: var(--c-light);
  border-radius: 5px;
  letter-spacing: -.03em;
  box-shadow: 0 0 5px var(--c-light);
}
</style>