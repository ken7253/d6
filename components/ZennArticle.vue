<template>
  <div>
    <h2 :class="$style.heading">記事一覧</h2>
    <p v-if="articles.length === 0">記事の取得に失敗しました</p>
    <ul v-else :class="$style.artical">
      <li :class="$style.item" v-for="article in articles" :key="article.guid">
        <NuxtLink :class="$style.anchor" :href="article.link" target="_blank">
          {{article.title}} / 
          <time :datetime="article.pubDate">{{article.pubDate.split(' ')[0]}}</time>
        </NuxtLink>
      </li>
    </ul>
    <div :class="$style['read-more']">
      <NuxtLink :class="$style.anchor" href="https://zenn.dev/ken7253" target="_blank">すべての記事を見る</NuxtLink>
    </div>
  </div>
</template>

<script lang="ts" setup>
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
.heading {
  padding-bottom: .75em;
}
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
.item {
  padding-bottom: .5em;
}
</style>