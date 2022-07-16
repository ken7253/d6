<template>
  <div>
    <ul :class="$style['post-list']">
      <ContentList
        v-slot="{ list }"
        path="/post"
      >
        <li
          v-for="post in (props.max === -1 ? list.slice().reverse() : limitedContent)"
          :key="post.date"
          :class="$style.post"
        >
          <ArticleLink
            :link="post._path"
            :date="post.date.split('T')[0]"
          >
            {{ post.title }}
          </ArticleLink>
        </li>
      </ContentList>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import { queryContent } from '#imports';

const props = defineProps({
  max: {
    type: Number,
    default: -1,
  }
})

const limitedContent = await queryContent('post').sort({date: 1}).limit(props.max).find();
</script>

<style module>
.post-list {
  padding: 0;
}
.post {
  list-style-type: none;
}
</style>
