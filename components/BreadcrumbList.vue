<script lang="ts" setup>
import { useRoute } from '#app';

const route = useRoute();
const pathList = route.fullPath.split('/').filter((v) => v !== '');
const reduceJoin = (data: string[], targetIndex: number) => {
  const cp = [...data];
  return cp.slice(0, targetIndex + 1).join('/');
};
</script>
<template>
  <div :class="$style.container">
    <ul :class="$style.breadcrumb">
      <li>
        <NuxtLink href="/">Home</NuxtLink>
      </li>
      <li
        v-for="(path, index) in pathList"
        :key="reduceJoin(pathList, index)"
        :class="$style.lower"
      >
        <NuxtLink :href="'/' + reduceJoin(pathList, index)">{{ path }}</NuxtLink>
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
}
.lower::before {
  content: '>';
  padding: 0 4px;
  font-size: 0.5em;
}
</style>
