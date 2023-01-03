<template>
  <header :class="$style.header">
    <div :class="$style['header-inner']">
      <NuxtLink :class="$style.title" to="/">
        <h1 v-if="$route.path === '/'">dairoku studio</h1>
        <span v-else>dairoku studio</span>
      </NuxtLink>
      <div :class="$style.menu">
        <NuxtLink to="/works/"> works </NuxtLink>
        <NuxtLink to="/about/"> about </NuxtLink>
        <NuxtLink to="/post/"> post </NuxtLink>
        <button
          :class="$style['dark-mode']"
          :aria-checked="colorMode.value === 'dark'"
          role="checkbox"
          @click="toggleDarkMode"
        >
          <span :class="$style['speaker-only']">ダークモード</span>
          <icon-sun v-if="colorMode.value === 'light'" :class="$style.icon" />
          <icon-moon v-else :class="$style.icon" />
        </button>
      </div>
    </div>
  </header>
</template>

<script lang="ts" setup>
import IconMoon from "~/components/icon/IconMoon.vue";
import IconSun from "~/components/icon/IconSun.vue";
import { useColorMode } from "#imports";

const colorMode = useColorMode();

const toggleDarkMode = () => {
  colorMode.preference = colorMode.value === "dark" ? "light" : "dark";
};
</script>

<style module>
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
  opacity: 0.5;
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
