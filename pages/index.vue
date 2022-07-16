<template>
  <div>
    <p>
      おそらくフロントエンドエンジニア<br>
      技術記事以外のブログや作ったものの置き場として利用しています。<br>
    </p>
    <h2>pages</h2>
    <ul :class="$style.link">
      <li :class="$style.item">
        <NuxtLink to="/works/">works</NuxtLink>
      </li>
      <li :class="$style.item">
        <NuxtLink to="/about/">about</NuxtLink>
      </li>
      <li :class="$style.item">
        <NuxtLink to="/post/">post</NuxtLink>
      </li>
    </ul>
    <zenn-article />
    <h2>普通のブログ</h2>
    <AllPost :max="5" />
    <NuxtLink
      to="/post/"
      :class="$style['post-link']"
    >
      すべての記事を見る
    </NuxtLink>
  </div>
</template>

<script lang="ts" setup>
import { useHead } from "#imports";

useHead({
  title: '',
  meta: [
    { name: 'description', content: '技術記事以外のブログや作ったものの置き場として利用しています。' }
  ]
})
</script>

<style module>
.link {
  display: flex;
  list-style-type: none;
}
.item:not(:first-child)::before {
  display: inline-block;
  content: "/";
  transform: translateY(3px);
  padding: 0 3px;
}
.post-link {
  padding-top: .75em;
  display: inline-block;
}
</style>
