<template>
  <div>
    <works-list />
  </div>
</template>

<script lang="ts" setup>
import {useHead} from '#imports';

useHead({
  title: 'works',
  description: '作ったものとかの一覧ページ'
});
</script>