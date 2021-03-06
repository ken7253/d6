<template>
  <div :class="$style.root">
    <header :class="$style.header">
      <div :class="$style['header-inner']">
        <NuxtLink
          :class="$style.title"
          to="/"
        >
          <h1 v-if="$route.path === '/'">
            dairoku studio
          </h1>
          <span v-else>dairoku studio</span>
        </NuxtLink>
        <div :class="$style.menu">
          <NuxtLink to="/works/">
            works
          </NuxtLink>
          <NuxtLink to="/about/">
            about
          </NuxtLink>
          <NuxtLink to="/post/">
            post
          </NuxtLink>
          <button
            :class="$style['dark-mode']"
            :aria-checked="colorMode.value === 'dark'"
            role="checkbox"
            @click="toggleDarkMode"
          >
            <span :class="$style['speaker-only']">ダークモード</span>
            <icon-sun
              v-if="colorMode.value === 'light'"
              :class="$style.icon"
            />
            <icon-moon
              v-else
              :class="$style.icon"
            />
          </button>
        </div>
      </div>
    </header>
    <main>
      <div
        v-if="!(ignoreH1.includes($route.name))"
        :class="$style['page-title']"
      >
        <h1>{{ $route.name }}</h1>
      </div>
      <div :class="$style.content">
        <slot :class="$style['content-inner']" />
      </div>
    </main>
    <footer :class="$style.footer">
      <div :class="$style['footer-inner']">
        <NuxtLink
          :class="$style['footer-icon']"
          to="https://github.com/ken7253"
          target="_blank"
          external
        >
          <IconGithub
            :class="$style.icon"
            title="Github"
          />
        </NuxtLink>
        <NuxtLink
          :class="$style['footer-icon']"
          to="https://twitter.com/ken7253_"
          target="_blank"
          external
        >
          <IconTwitter
            :class="$style.icon"
            title="Twitter"
          />
        </NuxtLink>
        <small :class="$style.copyright">© ken7253</small>
      </div>
    </footer>
  </div>
</template>

<script lang="ts" setup>
import type { RouteRecordName } from 'vue-router';
import { IconMoon, IconSun, IconGithub, IconTwitter } from '~~/.nuxt/components';
import { useColorMode } from '#imports';

const colorMode = useColorMode();
const ignoreH1:(RouteRecordName | null | undefined )[] = ['index', 'post-slug'];

const toggleDarkMode = () => {
  colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark';
}
</script>

<style module>
.root {
  background-color: var(--c-lighter);
}
.header {
  position: fixed;
  top: 0;
  height: 70px;
  width: 100%;
  color: var(--c-base-dark);
  backdrop-filter: blur(3px);
  z-index: 1000;
}
.header::before {
  content: "";
  position: fixed;
  height: inherit;
  width: inherit;
  top: inherit;
  background-color: var(--c-base-light);
  z-index: -1;
  opacity: .5;
}
.header-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  max-width: min(calc(100% - 40px), var(--content-max-size));
  margin: auto;
  color: inherit;
}
.title {
  line-height: 1;
  text-decoration: none;
  color: inherit;
}
.title > * {
  font-size: 1rem;
  font-weight: 500;
  color: inherit;
  letter-spacing: inherit;
  line-height: inherit;
  margin-block: inherit;
  margin-inline: inherit;
}
.menu {
  display: flex;
  align-items: center;
  gap: 16px;
}
.menu > * {
  line-height: 1;
  text-decoration: none;
}
.menu > a[aria-current="page"] {
  color: var(--c-darkest);
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
  max-width: min(calc(100% - 40px), var(--content-max-size));
  margin: auto;
}
main {
  padding-top: 70px;
}
.content {
  min-height: 100vh;
  min-height: 100dvh;
  max-width: min(calc(100% - 40px), var(--content-max-size));
  margin: 25px auto;
}
.content-inner {
  padding: 40px 0;
}
.footer {
  position: relative;
  display: block;
  height: fit-content;
  width: 100%;
  color: var(--c-base-dark);
  background-color: var(--c-base-light);
}
.footer-inner {
  display: flex;
  align-items: center;
  max-width: var(--content-max-size);
  margin: auto;
  color: inherit;
  text-align: center;
}
.footer-icon {
  height: 45px;
}
.copyright {
  margin-left: auto;
  margin-right: 0;
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
