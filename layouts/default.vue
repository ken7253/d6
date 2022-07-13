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
    <main :class="$style.content">
      <div :class="$style['content-inner']">
        <slot></slot>
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
import { IconMoon, IconSun } from '~~/.nuxt/components';

const darkMode = ref(false);

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

.content {
  padding-top: 70px;
  min-height: 100vh;
  min-height: 100dvh;
  max-width: var(--content-max-size);
  margin: 0 auto;
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
