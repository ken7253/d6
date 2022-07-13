<template>
  <div>
    <h2 :class="$style.title">作ったものとか</h2>
    <p v-if="!works">データを取得できませんでした</p>
    <div :class="$style.category" v-for="(work, name) in works" :key="name">
      <h3 :class="$style['title-cat']">{{ name }}</h3>
        <div :class="$style.item" v-for="(item, index) in works[name]" :key="index">
          <h4 :class="$style['item-name']">
            <a :href="item.link" target="_blank" rel="noopener noreferrer">{{item.title}}</a>
          </h4>
          <p>{{item.description}}</p>
        </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { works } from "public/data/works.json";
</script>

<style module>
.title {
  padding-bottom: .75em;
}
.title-cat {
  padding-bottom: .5em;
}
.category {
  padding: .25em 0;
}
.item {
  padding-bottom: .25rem;
}
.item-name {
  list-style-type: none;
  text-underline-offset: 4px;
  padding-bottom: 4px;
}
</style>
