<template>
  <div>
    <h2>ken7253</h2>
    <p>
      フロントエンドエンジニア{{ currentCareer }}年目になりました。<br>
      ReactやらVueとかも書くけどHTML/JS標準仕様の勉強のほうが好き。<br>
      たまにデザインもやってたけど、もうPhotoshopの操作を忘れそう。
    </p>
    <h3>好きなこと</h3>
    <ul>
      <li>ドキュメントを書くこと</li>
      <li>マークアップ</li>
      <li>
        <NuxtLink
          to="https://developer.mozilla.org/ja/docs/Web"
          target="_blank"
          external
        >
          MDN
        </NuxtLink>を読むこと
      </li>
    </ul>
    <h3>苦手なこと</h3>
    <ul>
      <li>反復作業</li>
      <li>細かいチェック作業</li>
      <li>規則正しい生活</li>
    </ul>
    <h3>スキル等</h3>
    <h4>フロントエンド領域</h4>
    <p>
      最近はTypeScriptでしか書かないですが一応素のJSも書けます。<br>
      フレームワークはVue(2.x, 3.x)/React(18.x)/Litを使用したことがあります。<br>
      どちらかというと標準仕様のお話のほうが得意。<br>
    </p>
    <h4>バックエンド</h4>
    <p>
      Node.jsが少しだけ分かる程度です、サーバー側の処理というよりCLIツールとかパッケージを作ったりということがメイン<br>
      過去にnginxとかでサーバーを構築したことがあるのでnginxは何となく分かる。
    </p>
    <h4>デザイン</h4>
    <p>
      デザインできる人がいなかったらやる程度ですがある程度基礎的な知識はあります。<br>
      デザインの技法というよりかはそれに関連する技術（フォント・画像など）が好き。
    </p>
    <h3>連絡・ご依頼など</h3>
    <p>
      基本的にフロントエンド領域全般と少しだけデザインができます。<br>
      技術的なお手伝いは<NuxtLink to="/works/">
        works
      </NuxtLink>への掲載を前提としてご依頼お願いします。<br>
      また、デザイン関連の依頼はあまりお受けしていません。
    </p>
    <p>
      ご連絡はDiscord[ken7253#4915]か<NuxtLink
        to="https://twitter.com/ken7253_"
        target="_blank"
        external
      >
        Twitter
      </NuxtLink>からお願いします。<br>
      メールでも大丈夫ですが、見逃す可能性が高いのでDiscordでご連絡ください。
    </p>
  </div>
</template>

<script lang="ts" setup>
import {definePageMeta} from '#imports';

const currentCareer = new Date().getFullYear() - 2019;

definePageMeta({
  title: 'about',
})
</script>