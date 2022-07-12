<template>
  <div>
    <h2 :class="$style.heading">記事一覧</h2>
    <ul :class="$style.artical">
      <li :class="$style.item" v-for="article in articles" :key="article.guid">
        <a :class="$style.anchor" :href="article.link" target="_blank" rel="noopener noreferrer">
          {{article.title}} / 
          <time :datetime="article.pubDate">{{article.pubDate.split(' ')[0]}}</time>
        </a>
      </li>
    </ul>
    <div :class="$style['read-more']">
      <a :class="$style.anchor" href="https://zenn.dev/ken7253" target="_blank" rel="noopener noreferrer">すべての記事を見る</a>
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
  padding-top: 2rem;
}
.item {
  padding-bottom: .5em;
}
</style>