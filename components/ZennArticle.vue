<template>
  <div>
    <h2>記事一覧</h2>
    <p v-if="articles.length === 0">
      記事の取得に失敗しました
    </p>
    <ul
      v-else
      :class="$style.artical"
    >
      <li
        v-for="article in articles"
        :key="article.guid"
        :class="$style.item"
      >
        <ArticleLink
          :link="article.link"
          :date="article.pubDate.split(' ')[0]"
          target-blank
        >
          {{ article.title }}
        </ArticleLink>
      </li>
    </ul>
    <div :class="$style['read-more']">
      <NuxtLink
        :class="$style.anchor"
        href="https://zenn.dev/ken7253"
        target="_blank"
      >
        すべての記事を見る
      </NuxtLink>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {ref} from '#imports';
const articles = ref([]);

const base = 'https://api.rss2json.com/v1/api.json';
const request = '?rss_url=https%3A%2F%2Fzenn.dev%2Fken7253%2Ffeed';

fetch(`${base}${request}`).then((resp) => {
  if (!resp.ok) return;
  resp.json().then((data) => {
    articles.value = data.items.slice(0, 5);
  })
});
</script>

<style module>
.artical {
  list-style-type: none;
}
.anchor {
  text-underline-offset: 4px;
  display: inline;
}
.read-more {
  padding-top: .75rem;
}
</style>