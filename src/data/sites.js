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
  {
    id: "codejump-wooden-jewelry",
    title: "ブランドサイト",
    description: "【Codejump #6】ブランドサイトの模写。mailtoやcolumn_reverseなどを学んだ。",
    thumbnail: "/thumbnails/brand.png",
    originalUrl: "https://code-jump.com/brand-menu/",
    repoUrl: "https://github.com/kana10-dev/codejump-wooden-jewelry",
    demoUrl: "https://kana10-dev.github.io/codejump-wooden-jewelry/",
  },
  {
    id: "codejump-portfolio1",
    title: "ポートフォリオサイト",
    description: "【Codejump #7】ポートフォリオサイトの模写。pictureタグやフォームの作り方を学んだ。",
    thumbnail: "/thumbnails/portfolio1.png",
    originalUrl: "https://code-jump.com/portfolio1-menu/",
    repoUrl: "https://github.com/kana10-dev/codejump-portfolio1",
    demoUrl: "https://kana10-dev.github.io/codejump-portfolio1/",
  },
  {
    id: "codejump-store1",
    title: "ストアサイト",
    description: "【Codejump #8】ストアサイトの模写。画像を背景にする方法を学んだ。",
    thumbnail: "/thumbnails/store1.png",
    originalUrl: "https://code-jump.com/store1-menu/",
    repoUrl: "https://github.com/kana10-dev/codejump-store1",
    demoUrl: "https://kana10-dev.github.io/codejump-store1/",
  },
  {
    id: "codejump-ec",
    title: "ECサイト",
    description: "【Codejump #9】ECサイトの模写。tableタグの基礎を学んだ。",
    thumbnail: "/thumbnails/ec.png",
    originalUrl: "https://code-jump.com/ec-menu/",
    repoUrl: "https://github.com/kana10-dev/codejump-ec",
    demoUrl: "https://kana10-dev.github.io/codejump-ec/",
  },
  {
    id: "codejump-corporate2",
    title: "コーポレートサイト",
    description: "【Codejump #10】コーポレートサイトの模写。難しい配置を練習した。",
    thumbnail: "/thumbnails/corporate2.png",
    originalUrl: "https://code-jump.com/corporate2-menu/",
    repoUrl: "https://github.com/kana10-dev/codejump-corporate2",
    demoUrl: "https://kana10-dev.github.io/codejump-corporate2/",
  },
  {
    id: "codejump-store3",
    title: "ストア(和菓子)サイト",
    description: "【Codejump #11】ストア(和菓子)サイトの模写。縦書きとiframeでマップを埋め込む方法を学んだ。",
    thumbnail: "/thumbnails/store3.png",
    originalUrl: "https://code-jump.com/store3-menu/",
    repoUrl: "https://github.com/kana10-dev/codejump-store3",
    demoUrl: "https://kana10-dev.github.io/codejump-store3/",
  },
  {
    id: "codejump-store2",
    title: "ストア(インテリア)サイト",
    description: "【Codejump #12】ストア(インテリア)サイトの模写。複数ページや、JQueryに挑戦した。",
    thumbnail: "/thumbnails/store2.png",
    originalUrl: "https://code-jump.com/store2-menu/",
    repoUrl: "https://github.com/kana10-dev/codejump-store2",
    demoUrl: "https://kana10-dev.github.io/codejump-store2/",
  },
  {
    id: "codejump-blog",
    title: "ブログサイト",
    description: "【Codejump #13】ブログサイトの模写。2カラム構成で、スタイリングとアニメーションを学んだ。",
    thumbnail: "/thumbnails/blog.png",
    originalUrl: "https://code-jump.com/blog-menu/",
    repoUrl: "https://github.com/kana10-dev/codejump-blog",
    demoUrl: "https://kana10-dev.github.io/codejump-blog/",
  },
]

export default sites