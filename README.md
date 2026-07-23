# ミチカク — コーポレートサイト

DXコンサルティング会社のコーポレートサイト(Astro製・完全静的)。

## 開発

```bash
npm install
npm run dev      # http://localhost:4321/
npm run build    # dist/ に静的ファイルを出力
npm run preview  # ビルド結果の確認
```

## 公開

`main` ブランチに push すると GitHub Actions([.github/workflows/deploy.yml](.github/workflows/deploy.yml))が自動でビルドし、GitHub Pages に公開されます。

公開URL: https://michikaku.github.io/

## 公開前に変更する箇所

すべて [src/config.ts](src/config.ts) と [astro.config.mjs](astro.config.mjs) に集約しています。

| 項目 | 場所 |
| --- | --- |
| 名称 | `src/config.ts` の `brandEn` / `brandJa` |
| SNS連絡先 | `src/config.ts` の `linkedinUrl` / `facebookUrl`(facebookUrlを空にするとFacebookボタン非表示) |
| 本番ドメイン | `astro.config.mjs` の `site`(canonical / OGP の絶対URLに使用)。独自ドメインに移行する際は `base` も削除 |

## 構成

```
src/
  config.ts            # 社名・連絡先などの設定値(ここだけ変えれば全体に反映)
  layouts/Base.astro   # <head>(SEO / OGP / 構造化データ / フォント)+ フェードインscript
  pages/
    index.astro          # トップページ
    services.astro       # 支援内容
    local-business.astro # 地域企業向けDX支援
    company.astro        # 会社概要・代表プロフィール
    privacy.astro        # プライバシーポリシー
  components/          # セクション単位のコンポーネント(コピーは各ファイル冒頭のfrontmatterに集約)
  styles/global.css    # デザイントークン(色・フォント・余白)と共通ユーティリティ
public/
  ogp.png              # OGP画像(ogp-source.svg から生成)
```

## デザイン方針

- White Editorial × Playful Operations × Practical Trust
- 温かいオフホワイト(#F7F5EF)基調、墨色(#1E1E1A)の文字、薄いベージュの罫線(#DDD8CC)
- アクセント:ブルー(#4C7DFF)を主に、オレンジ(詰まり)・グリーン(チェック)・イエロー(付箋)を限定的に
- 大きな英字タイポグラフィ(Inter Tight)+ 読みやすい日本語(Noto Sans JP)
- 紙面・付箋・チェックリスト・方眼紙のモチーフ、やわらかい角丸
- 画像素材なし(モチーフはCSS/SVGで描画)— 表示速度優先
- 動きは CSS + IntersectionObserver 中心(prefers-reduced-motion 対応)

※ `global.css` の旧テーマ変数(--c-black 等)は新トークンへのエイリアスとして残しています。
色の変更は `:root` の新トークン(--c-base / --c-text / --c-blue 等)を編集してください。
