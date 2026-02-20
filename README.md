# 模写サイト集

[CodeJump](https://code-jump.com/) などを使ったコーディング練習の模写サイトをまとめたポートフォリオサイトです。

🔗 **https://kana10-dev.github.io/copy-sites/**

## サイトの追加方法

`src/data/sites.js` にオブジェクトを1つ追加して `main` ブランチにプッシュするだけで自動デプロイされます。

```js
{
  id: "リポジトリ名",           // 一意なID（必須）
  title: "サイト名",
  description: "一言説明",
  thumbnail: "/thumbnails/xxx.png", // public/thumbnails/ に画像を置く（省略可）
  originalUrl: "https://...",       // 模写元URL（省略可）
  repoUrl: "https://github.com/kana10-dev/...",
  demoUrl: "https://kana10-dev.github.io/...",
},
```

## 開発

```bash
npm install
npm run dev
```

## 技術スタック

- React + Vite
- GitHub Actions（push 時に自動デプロイ）
- GitHub Pages
