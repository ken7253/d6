<template>
  <div>
    <header :class="$style.header">
      <p>D6</p>
      <input
        type="checkbox"
        v-model="darkMode"
      />
    </header>
    <main :class="$style.content">
      <slot></slot>
    </main>
    <footer :class="$style.footer">footer</footer>
  </div>
</template>

<script lang="ts" setup>
const darkMode = ref(false);

// const toggleDarkMode = () => {
//   theme.darkMode = !theme.darkMode;
//   updateMeta();
// };

const updateMeta = () => {
  useHead({
    meta: [
      { name: "color-scheme", content: darkMode.value ? "dark" : "light" },
    ],
    bodyAttrs: {
      class: darkMode.value ? "dark" : "light",
    }
  });
}

onMounted(() => {
  darkMode.value = matchMedia("(prefers-color-scheme: dark)").matches;
  watchEffect(() => updateMeta());
});
</script>

<style module>
.header {
  position: fixed;
  height: 70px;
  padding: 4px;
  width: 100%;
}
.content {
  padding-top: 70px;
  min-height: 100vh;
  min-height: 100dvh;
}
.footer {
  display: block;
  width: 100%;
}

:global html {
  --c-static-dark: #333;
  --c-static-darker: #222;
  --c-static-darkest: #111;
  --c-static-light: #ddd;
  --c-static-lighter: #eee;
  --c-static-lightest: #fff;
}
:global body.light {
  color-scheme: light;
  --c-dark: var(--c-static-dark);
  --c-darker: var(--c-static-darker);
  --c-darkest: var(--c-static-darkest);
  --c-light: var(--c-static-light);
  --c-lighter: var(--c-static-lighter);
  --c-lightest: var(--c-static-lightest);
}
:global body.dark {
  color-scheme: dark;
  --c-dark: var(--c-static-light);
  --c-darker: var(--c-static-lighter);
  --c-darkest: var(--c-static-lightest);
  --c-light: var(--c-static-dark);
  --c-lighter: var(--c-static-darker);
  --c-lightest: var(--c-static-darkest);
}
</style>
