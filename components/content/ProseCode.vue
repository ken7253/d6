<script lang="ts">
import { defineComponent } from '#imports'
export default defineComponent({
  props: {
    code: {
      type: String,
      default: ''
    },
    language: {
      type: String,
      default: null
    },
    filename: {
      type: String,
      default: null
    },
    highlights: {
      type: Array as () => number[],
      default: () => []
    }
  }
})
</script>

<template>
  <div :class="$style.code">
    <span
      v-if="$props.language"
      :class="$style.lang"
    > {{ $props.language }} </span>
    <span
      v-if="$props.filename"
      :class="$style.filename"
    > {{ $props.filename }} </span>
    <slot />
  </div>
</template>

<style module>
.code {
  position: relative;
  background-color: var(--c-light);
  border-radius: 5px;
  padding: 5px 20px;
}
.lang {
  position: absolute;
  top: 0;
  right: 0;
  padding: 0 10px;
  border-radius: 0 5px 0 0;
  background-color: var(--c-lightest);
  line-height: 1.5;
  font-size: .9em;
}
.lang::before {
  content: ".";
}
.filename {
  position: absolute;
  top: 0;
  left: 0;
  padding: 0 10px;
  background-color: var(--c-lightest);
  border-radius: 5px 0 0 0;
  line-height: 1.5;
  font-size: .9em;
}
</style>

<style>
pre code .line {
  display: block;
  min-height: 1rem;
  line-height: 1.6;
  font-size: .75rem;
}
.highlight {
  background-color: #ae7c1426;
  border-left: solid 4px #ae7c1466;
}
</style>