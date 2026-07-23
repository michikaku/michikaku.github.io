import { defineConfig } from "astro/config";

// GitHub Pages の Organization サイト(michikaku.github.io)向け設定。
// ルート配信のため base は設定しない。独自ドメイン取得後は site をそのドメインに変更。
export default defineConfig({
  site: "https://michikaku.github.io",
  compressHTML: true,
});
