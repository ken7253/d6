<template>
  <ContentDoc v-slot="{ doc }">
    <ContentRenderer :value="doc" />
    <div :class="$style['after-content']">
      <span
        >post at
        <time v-if="doc.date" :datetime="doc.date">{{ doc.date.split('T')[0] }}</time></span
      >
      <NuxtLink href="/post">記事一覧へ戻る</NuxtLink>
    </div>
  </ContentDoc>
</template>

<script lang="ts" setup>
import { useHead } from '#app';
useHead({
  meta: [{ property: 'og:type', content: 'article' }],
});
</script>

<style module>
.after-content {
  padding: 3rem 0;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}
</style>
