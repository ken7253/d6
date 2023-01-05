<template>
  <div>
    <works-list />
  </div>
</template>

<script lang="ts" setup>
import { useHead } from '#imports';

useHead({
  title: 'works',
  meta: [{ name: 'description', content: '作ったものとかの一覧ページ' }],
});
</script>
