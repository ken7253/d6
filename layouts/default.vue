<template>
  <div :class="$style.root">
    <header :class="$style.header">
      <div :class="$style['header-inner']">
        <NuxtLink :class="$style.title" to="/">dairoku studio</NuxtLink>
          <button :class="$style['dark-mode']" role="checkbox" :aria-checked="darkMode" @click="toggleDarkMode">
            <span :class="$style['speaker-only']">ダークモード</span>
            <icon-moon :class="$style.icon" v-if="darkMode"></icon-moon>
            <icon-sun :class="$style.icon" v-if="!darkMode"></icon-sun>
          </button>
      </div>
    </header>
    <main>
      <div v-if="!isTop" :class="$style['page-title']">
        <h1>{{route.meta.title}}</h1>
      </div>
      <div :class="$style.content">
        <slot :class="$style['content-inner']"></slot>
      </div>
    </main>
    <footer :class="$style.footer">
      <div :class="$style['footer-inner']">
        <small>© ken7253</small>
      </div>
    </footer>
  </div>
</template>

<script lang="ts" setup>
import { useRoute } from 'vue-router';
import { IconMoon, IconSun } from '~~/.nuxt/components';

const route = useRoute();
const darkMode = ref(false);
const isTop = route.path === '/';

useHead({
  title: `${route.meta.title}${isTop ? '' : ' - '}dairoku studio`
});

const toggleDarkMode = () => {
  darkMode.value = !darkMode.value;
  updateMeta();
}

const updateMeta = () => {
  useHead({
    meta: [
      { name: "color-scheme", content: darkMode.value ? "dark" : "light" },
    ],
    bodyAttrs: {
      class: darkMode.value ? "dark" : "light",
    },
  });
};

onMounted(() => {
  darkMode.value = matchMedia("(prefers-color-scheme: dark)").matches;
  watchEffect(() => updateMeta());
});
</script>

<style module>
.root {
  background-color: var(--c-lighter);
}
.header {
  position: fixed;
  height: 70px;
  padding: 4px;
  width: 100%;
  background-color: var(--c-base-light);
  color: var(--c-base-dark);
}
.header-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  max-width: var(--content-max-size);
  margin: auto;
  color: inherit;
}
.title {
  line-height: 1;
  text-decoration: none;
  color: inherit;
}
.dark-mode {
  appearance: none;
  background-color: transparent;
  border: none;
  color: inherit;
}
.page-title {
  background-color: var(--c-base-lighter);
}
.page-title h1 {
  padding: 50px 0;
  max-width: var(--content-max-size);
  margin: auto;
}
main {
  padding-top: 70px;
}
.content {
  min-height: 100vh;
  min-height: 100dvh;
  max-width: var(--content-max-size);
  margin: 25px auto;
}
.content-inner {
  padding: 40px 0;
}
.footer {
  display: block;
  width: 100%;
  padding: 4px;
  background-color: var(--c-base-light);
  color: var(--c-base-dark);
}
.footer-inner {
  max-width: var(--content-max-size);
  margin: auto;
  color: inherit;
  text-align: center;
}
.icon {
  width: 45px;
  height: 45px;
  padding: 10px;
  transition: transform var(--transition-time) ease;
}
.icon:hover {
  transform: scale(1.1);
  transition: transform var(--transition-time) ease;
}
.speaker-only {
  opacity: 0;
  position: absolute;
  z-index: -1;
}
</style>
