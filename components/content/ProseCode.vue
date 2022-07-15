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
    <div :class="$style.inner">
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
  </div>
</template>

<style module>
.code {
  position: relative;
  border-radius: 5px;
  padding: 10px 20px;
  z-index: 0;
  overflow: hidden;
}
.code::before {
  position: absolute;
  content: "";
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: var(--c-static-dark);
  opacity: .9;
  z-index: -1;
}
.inner {
  overflow-x: auto;
  scrollbar-width: thin;
  scrollbar-color: var(--c-secondary) var(--c-lighter);
}
.inner::-webkit-scrollbar {
  height: 7px;
}
.inner::-webkit-scrollbar-track {
  background-color: var(--c-secondary);
  border-radius: 100vh;
}
.inner::-webkit-scrollbar-thumb {
  border-radius: 100vh;
  background-color: var(--c-lighter);
}
.lang {
  position: absolute;
  top: 0;
  right: 0;
  padding: 0 10px;
  background-color: var(--c-lightest);
  line-height: 1.5;
  font-size: .9em;
}
.lang::before {
  content: ".";
}
.filename + pre {
  margin-top: 20px;
}
.filename {
  position: absolute;
  top: 0;
  left: 0;
  padding: 0 10px;
  background-color: var(--c-lightest);
  line-height: 1.5;
  font-size: .9em;
}
</style>

<style>
pre {
  margin: 0;
}
pre code .line {
  display: block;
  min-height: 1rem;
  line-height: 1.6;
  font-size: .75rem;
  color: var(--c-static-light);
}
.highlight {
  background-color: #ae7c1426;
  border-left: solid 4px #ae7c1466;
}
</style>