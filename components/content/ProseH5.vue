<template>
  <h5 :class="$style.heading"><slot /></h5>
</template>

<style module>
.heading {
  color: var(--c-base-dark);
}
</style>