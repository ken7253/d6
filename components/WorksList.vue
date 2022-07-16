<template>
  <div :class="$style.root">
    <h2>作ったものとか</h2>
    <p v-if="!works">
      データを取得できませんでした
    </p>
    <table
      v-for="(work, name) in works"
      :key="name"
      :class="$style.table"
    >
      <caption :class="$style.caption">
        {{ name }}
      </caption>
      <tbody>
        <tr
          v-for="(item, index) in works[name]"
          :key="index"
          :class="$style.tr"
        >
          <th
            scope="row"
            :class="$style.th"
          >
            <NuxtLink
              :href="item.link"
              :target="item.link ? '_blank' : ''"
              external
            >
              {{ item.title }}
            </NuxtLink>
          </th>
          <td :class="$style.td">
            {{ item.description }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts" setup>
import { works } from "public/data/works.json";
</script>

<style module>
.root {
  --local-item-padding: clamp(5px, 2vw, 20px);
}
.table {
  width: 100%;
  margin-bottom: 20px;
}
.caption {
  margin: 0 2px;
  padding: 0 var(--local-item-padding);
  background-color: var(--c-light);
  text-align: start;
  font-weight: 600;
  font-size: 1.25rem;
}
.tr:nth-child(2n) {
  background-color: var(--c-light);
}
.tr:nth-child(2n-1) {
  background-color: var(--c-lightest);
}
.th {
  width: 30%;
  padding: 5px var(--local-item-padding);
  text-align: start;
  font-weight: 600;
}
.td {
  width: 70%;
  padding: 5px var(--local-item-padding);
  text-align: start;
}
</style>