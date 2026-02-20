/**
 * 模写サイトの一覧データ
 *
 * 新しいサイトを追加するときは、このファイルの配列に1オブジェクト追加するだけ。
 *
 * 各フィールド:
 *   title       : サイト名（必須）
 *   description : 一言説明（必須）
 *   thumbnail   : サムネイル画像のパス（public/thumbnails/ に置いた画像ファイル名を指定）
 *                 省略すると自動でプレースホルダーを表示
 *   originalUrl : 模写元サイトのURL（省略可）
 *   repoUrl     : GitHubリポジトリのURL（省略可）
 *   demoUrl     : ライブデモのURL（省略可）
 */
const sites = [
  {
    id: "codejump-profile",
    title: "プロフィールサイト",
    description: "【Codejump #1】プロフィールサイトの模写。画像の配置や、間隔など基礎を練習。",
    thumbnail: "/thumbnails/profile.png",
    originalUrl: "https://code-jump.com/profile-menu/",
    repoUrl: "https://github.com/kana10-dev/codejump-profile",
    demoUrl: "https://kana10-dev.github.io/codejump-profile/",
  },
  {
    id: "codejump-photo-book",
    title: "フォトサイト",
    description: "【Codejump #2】フォトサイトの模写。innerやflex, listの練習。",
    thumbnail: "/thumbnails/photo-book.png",
    originalUrl: "https://code-jump.com/photo-menu/",
    repoUrl: "https://github.com/kana10-dev/codejump-photo-book",
    demoUrl: "https://kana10-dev.github.io/codejump-photo-book/",
  },
  {
    id: "codejump-photo-book2",
    title: "フォトサイト2",
    description: "【Codejump #3】フォトサイト2の模写。innerやflex, listの練習。",
    thumbnail: "/thumbnails/photo-book2.png",
    originalUrl: "https://code-jump.com/photo-menu/",
    repoUrl: "https://github.com/kana10-dev/codejump-photo-book",
    demoUrl: "https://kana10-dev.github.io/codejump-photo-book/",
  },
  {
    id: "codejump-recipe-diary",
    title: "レシピサイト",
    description: "【Codejump #4】レシピサイトの模写。画像制御やレイアウトの練習。",
    thumbnail: "/thumbnails/recipe-diary.png",
    originalUrl: "https://code-jump.com/recipe-menu/",
    repoUrl: "https://github.com/kana10-dev/codejump-recipe-diary",
    demoUrl: "https://kana10-dev.github.io/codejump-recipe-diary/",
  },
  {
    id: "codejump-recipe2",
    title: "レシピページ",
    description: "【Codejump #5】レシピページの模写。2カラム構成の練習。",
    thumbnail: "/thumbnails/recipe2.png",
    originalUrl: "https://code-jump.com/recipe2-menu/",
    repoUrl: "https://github.com/kana10-dev/codejump-recipe2",
    demoUrl: "https://kana10-dev.github.io/codejump-recipe2/",
  },
]

export default sites
