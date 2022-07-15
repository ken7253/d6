<template>
  <div>
    <h2>記事一覧</h2>
    <AllPost />
  </div>
</template>

<script lang="ts" setup>
import {definePageMeta} from '#imports';

definePageMeta({
  title: 'post'
});
</script>
