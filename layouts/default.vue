<template>
  <div :class="$style.root">
    <AppHeader />
    <BreadcrumbList v-if="$route.fullPath !== '/'" />
    <main>
      <div v-if="!ignoreH1.includes($route.name)" :class="$style['page-title']">
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
          <IconGithub :class="$style.icon" title="Github" />
        </NuxtLink>
        <NuxtLink
          :class="$style['footer-icon']"
          to="https://twitter.com/ken7253_"
          target="_blank"
          external
        >
          <IconTwitter :class="$style.icon" title="Twitter" />
        </NuxtLink>
        <small :class="$style.copyright">© ken7253</small>
      </div>
    </footer>
  </div>
</template>

<script lang="ts" setup>
import type { RouteRecordName } from 'vue-router';
import IconGithub from '~/components/icon/IconGithub.vue';
import IconTwitter from '~/components/icon/IconTwitter.vue';
import AppHeader from '~~/components/AppHeader.vue';
import BreadcrumbList from '~~/components/BreadcrumbList.vue';

const ignoreH1: (RouteRecordName | null | undefined)[] = ['index', 'post-slug'];
</script>
<style global>
body {
  margin: var(--l-header-height) 0 0 0;
  padding: 0;
}
</style>
<style module>
.root {
  background-color: var(--c-lighter);
}
.page-title {
  background-color: var(--c-base-lighter);
}
.page-title h1 {
  padding: 50px 0;
  max-width: min(calc(100% - 40px), var(--content-max-size));
  margin: auto;
}
.content {
  min-height: 100vh;
  min-height: 100dvh;
  max-width: min(calc(100% - 40px), var(--content-max-size));
  margin: 0 auto;
  padding: 25px 0;
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
</style>
