<script lang="ts" setup>
import { computed } from 'vue';

const props = defineProps({
  current: {
    type: String,
    default: '/',
  },
});

const pathList = computed(() => props.current.split('/').filter((v) => v !== ''));
const reduceJoin = (list: string[], targetIndex: number) =>
  [...list].slice(0, targetIndex + 1).join('/');
</script>
<template>
  <div v-if="$props.current !== '/'" :class="$style.container">
    <ul :class="$style.breadcrumb">
      <li><NuxtLink to="/">home</NuxtLink></li>
      <li v-for="(path, index) in pathList" :key="path" :class="$style.path">
        <NuxtLink :to="'/' + reduceJoin(pathList, index)">{{ path }}</NuxtLink>
      </li>
    </ul>
  </div>
</template>
<style module>
.container {
  background-color: var(--c-light);
}
.breadcrumb {
  list-style: none;
  margin: auto;
  line-height: 1;
  padding: 8px 0 12px;
  display: flex;
  font-size: 0.75rem;
  max-width: min(calc(100% - 40px), var(--content-max-size));
  align-items: baseline;
}
.breadcrumb::before {
  content: '>';
  padding-right: 4px;
  font-size: 0.75em;
}
.path::before {
  content: '/';
  padding: 0 4px;
  font-size: 0.5em;
}
.path [aria-current='page'] {
  color: var(--c-darkest);
  text-decoration: none;
}
.path [aria-current='page']:hover {
  text-decoration: underline;
}
</style>
