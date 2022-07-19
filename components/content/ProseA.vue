<script setup lang="ts">
import { useFetch, ref } from '#imports';

interface LinkCard {
  title: string;
  description: string;
  image: string;
  icon: string;
  themeColor: string;
  url: URL;
}

const props =  defineProps({
  href: {
    type: String,
    default: ''
  },
  blank: {
    type: Boolean,
    default: true
  },
})

const cardData = ref<Partial<LinkCard>>();

useFetch(
  props.href,
  {
    key: props.href,
    headers: [
      ['Accept-Language', 'ja,en-US;q=0.9,en;q=0.8']
    ]
  }).then((siteData) => {
  if (typeof siteData.data.value !== 'string') return;
  const head = siteData.data.value.match(/<head>(.*)<\/head>/usi)?.at(1);

  if (!head) return;
  const url = new URL(props.href);
  const title = head.match(/<meta property="og:title" content="(.*)">/ui)?.at(1) || head.match(/<title>(.*)<title>/ui)?.at(1);
  const description = head.match(/<meta property="og:description" content="(.*)">/ui)?.at(1) || head.match(/<meta name="description" content="(.*)">/ui)?.at(1);
  const image = head.match(/<meta property="og:image" content="(.*)">/ui)?.at(1);
  const icon = url.origin + head.match(/href="(.*?[favicon.ico].*?)"/ui)?.at(1);
  const themeColor = head.match(/<meta name="theme-color" content="(.*)">/ui)?.at(1);

  cardData.value = {title, description, image, icon, themeColor, url};
});
</script>

<template>
  <div style="display: inline-block;">
    <NuxtLink
      v-if="cardData"
      :class="$style['card-link']"
      :to="href"
      :target="blank ? '_blank' : ''"
      :style="`border-color:${cardData.themeColor};`"
    >
      <img
        :class="$style['link-image']"
        :src="cardData.image"
        alt=""
        height="120"
      >
      <div :class="$style['link-text']">
        <dl>
          <dt :class="$style['link-title']">
            {{ cardData.title }}
          </dt>
          <dd :class="$style['link-desc']">
            {{ cardData.description }}
          </dd>
        </dl>
      </div>
      <span
        :class="$style['site-info']"
      >
        <img
          :src="cardData.icon"
          width="16"
          height="16"
          alt=""
        > {{ cardData.url?.hostname }}
      </span>
    </NuxtLink>
    <NuxtLink
      v-else
      :href="href"
      :class="$style.link"
      :target="blank ? '_blank' : ''"
    >
      <slot />
    </NuxtLink>
  </div>
</template>

<style module>
.link {
  padding: 0 .25em;
  text-decoration: none;
}
.link:hover {
  text-decoration: underline;
}
.card-link {
  text-decoration: none;
  display: grid;
  grid-template-rows: 1fr auto;
  grid-template-columns: auto 1fr;
  column-gap: 8px;
  align-items: center;
  height: 120px;
  border: solid 2px var(--c-light);
  background-color: var(--c-light);
  border-radius: 5px;
  overflow: hidden;
}
.link-image {
  grid-row: 1 / 3;
  grid-column: 1 / 2;
  height: 100%;
  aspect-ratio: 16 / 9;
  object-fit: cover;
}
.link-text {
  grid-column: 2 / 3;
  grid-row: 1 / 2;
  margin: auto;
  padding: 8px;
  max-width: 100%;
  overflow: hidden;
}
.link-text > dl {
  margin: 0;
}
.link-title {
  font-size: 1em;
  font-weight: 700;
  line-height: 1;
  padding-bottom: .75em;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.link-desc {
  margin: 0;
  font-size: .5em;
  line-height: 1.6;
  max-width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.site-info {
  display: flex;
  align-items: center;
  grid-row: 2 / 3;
  grid-column: 2 / 3;
  column-gap: 8px;
  height: fit-content;
  width: 100%;
  padding: 0 8px 8px;
  font-size: .75em;
}
.site-info > img {
  width: 1rem;
  height: 1rem;
}
</style>