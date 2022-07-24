<template>
  <div>
    <ContentDoc>
      記事データの取得に失敗しました。
      <NuxtLink to="/" :class="$style.top">
        TOPに戻る
      </NuxtLink>
    </ContentDoc>
  </div>
</template>

<style module>
.top {
  display: block;
}
</style>