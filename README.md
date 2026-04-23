# Compass

Geekfeed の AI カスタマーサポート運用ダッシュボードの UI モックです。React + Vite + Tailwind CSS で作られています。

**公開 URL:** https://geekfeedjapan.github.io/compass/
（`main` ブランチに push すると GitHub Actions が自動でビルド・公開します）

---

## これは何？

- `src/App.jsx` 1 ファイルに画面全体のコンポーネントが入っています
- 見た目の確認用モックなので、データは全部ハードコードされています
- 実 API 連携はありません

## 初めて触る人向け：ローカルで動かす手順

### 1. Node.js をインストール

[Node.js 公式サイト](https://nodejs.org/) から **LTS 版（20 以上）** をダウンロードしてインストールしてください。

インストール後、ターミナル（Windows なら PowerShell）で確認:

```sh
node -v   # v20.x.x などが出れば OK
npm -v
```

### 2. このリポジトリを取得

```sh
git clone git@github.com:geekfeedjapan/compass.git
cd compass
```

### 3. パッケージをインストール（初回のみ）

```sh
npm install
```

`node_modules/` というフォルダが作られます。数分かかります。

### 4. 開発サーバーを起動

```sh
npm run dev
```

ターミナルに `http://localhost:5173/` のような URL が出るのでブラウザで開いてください。
**ファイルを保存すると、画面が自動でリロードされます。**

止めるときは `Ctrl + C`。

### 5. 本番ビルドの確認（任意）

```sh
npm run build     # dist/ に静的ファイルを生成
npm run preview   # dist/ の中身をローカルでプレビュー
```

---

## 編集の始め方

- 画面の中身はすべて [`src/App.jsx`](src/App.jsx) にあります
- `default export` の `CompassMockup` 関数がルート。その下に `DashboardView`、`ProjectView` などの画面コンポーネントが並んでいます
- サイドバーのメニューを足したいとき → `CompassMockup` 内の `<SidebarItem ... />` 行を増やす
- 新しい画面を追加したいとき → `App.jsx` 末尾にコンポーネントを追記し、`activeView === 'xxx' && <XxxView />` の分岐を増やす
- スタイルは **Tailwind CSS のクラス名**（`className="flex items-center..."`）か `style={{ ... }}` で書かれています

### よく使うアイコン / グラフ

- アイコン: [`lucide-react`](https://lucide.dev/icons/)（`import { アイコン名 } from 'lucide-react'`）
- グラフ: [`recharts`](https://recharts.org/)

## デプロイ（GitHub Pages）

1. `main` に push するだけ
2. GitHub 側で Settings → Pages → **Source: GitHub Actions** に設定されていることを確認
3. Actions タブで `Deploy to GitHub Pages` が緑になれば公開完了

ビルドが失敗しているときは Actions のログを開いて赤いステップを確認してください。

## AI（Claude Code など）に修正してもらうとき

プロジェクト直下の [`CLAUDE.md`](CLAUDE.md) に AI 向けの前提情報を書いています。AI アシスタントを使うときはその内容が自動で参照されます。
「〇〇画面にボタンを追加して」のように自然言語で頼めば、`src/App.jsx` の該当箇所を見つけて編集してくれます。

## ディレクトリ構成

```
compass/
├── index.html                  Vite のエントリ HTML
├── package.json                依存パッケージとコマンド
├── vite.config.js              Vite 設定（GitHub Pages 用の base 設定あり）
├── tailwind.config.js          Tailwind のスキャン対象設定
├── postcss.config.js
├── src/
│   ├── main.jsx                React をマウントする起動ファイル
│   ├── App.jsx                 画面全体のコンポーネント（ここを編集）
│   └── index.css               Tailwind のディレクティブ
├── .github/workflows/deploy.yml  main への push で Pages に自動デプロイ
├── CLAUDE.md                   AI アシスタント向けの前提
└── README.md                   このファイル
```

## ライセンス

[LICENSE](LICENSE) を参照してください。
