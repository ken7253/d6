<template>
  <div>
    <h2>記事一覧</h2>
    <AllPost />
  </div>
</template>

<script lang="ts" setup>
import { useHead } from '#imports';

useHead({
  title: 'post',
  meta: [
    { name: 'description', content: '技術記事以外の普通のブログ一覧ページ' },
    { property: 'og:title', content: 'ブログ一覧ページ' },
    { property: 'og:type', content: 'blog' },
  ],
});
</script>
