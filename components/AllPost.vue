<template>
  <ul :class="$style['post-list']">
    <li :class="$style.post" v-for="post in postData" :key="post.date">
      <ArticleLink :link="post._path" :date="post.date.split('T')[0]">{{ post.title }}</ArticleLink>
    </li>
  </ul>
</template>

<script lang="ts" setup>
import type { ParsedContent } from "@nuxt/content/dist/runtime/types";

const postData = ref<ParsedContent[]>([]);

queryContent('post').find().then((v) => {
  postData.value = v.reverse();
});
</script>

<style module>
.post {
  list-style-type: none;
}
</style>