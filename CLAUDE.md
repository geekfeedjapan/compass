# Compass — AI アシスタント向けガイド

## プロジェクト概要

- Geekfeed の AI カスタマーサポート運用ダッシュボード「Compass」の **UI モック**
- React 18 + Vite 5 + Tailwind CSS 3、言語は **プレーン JavaScript (JSX)**（TypeScript は使っていない）
- デプロイ先は GitHub Pages (`/compass/` サブパス)。`vite.config.js` の `base: '/compass/'` がこれを担う

## 画面コードの置き場所

- **`src/App.jsx` に全コンポーネントが 1 ファイルで入っている**（約 1700 行）
- `export default function CompassMockup()` がルート
- 主要なビュー関数コンポーネント:
  - `DashboardView` / `ExecutiveView` / `ProjectView`
  - `AssessmentView` / `DataSourceView` / `KnowledgeView`
  - `TestsView` / `ProductionView` / `AutomationView`
  - `AskCompassPanel`（右側スライドオーバー）
- 小さなプリミティブ: `SidebarItem`, `PlaceholderView` など

分割したほうがよい規模だが、**まだ分割しない**こと。オーナーは初学者で、1 ファイルのほうが全体像を把握しやすいと判断している。ファイル分割を提案する場合は先に確認を取る。

## 依存ライブラリ

- `lucide-react` — アイコン。`import { Icon } from 'lucide-react'` で読み込む
- `recharts` — グラフ (RadarChart / AreaChart / BarChart / LineChart / ComposedChart)

## スタイリング方針

- Tailwind のユーティリティクラスを優先 (`className="flex items-center gap-2"`)
- カラーパレットなど一部は **インライン `style={{ ... }}`** で直書きしている。Geekfeed のブランドカラーを維持するため、既存の色コードをむやみに書き換えない
- 日本語フォント: `Plus Jakarta Sans` + `Noto Sans JP`。`App.jsx` 内で Google Fonts を `<link>` 読み込みしている

## データ

- すべて **モックデータ**。`projects` 配列など、コンポーネント内にハードコード
- API 呼び出しや状態管理ライブラリ（Redux, Zustand など）は**なし**。React の `useState` のみ

## 変更するときの原則

- 1 ファイル構成を維持（上記参照）
- 新しい依存パッケージを足す前に `package.json` を確認し、必要性を一行で説明する
- Tailwind クラス名を書き換えたら、見た目が壊れていないか必ず指摘する（ユーザーは手元で `npm run dev` して確認する）
- 日本語 UI テキストを勝手に英語化しない
- TypeScript 化の提案はしない（オーナーは JS のまま運用したい）

## ビルド / デプロイ

- ローカル: `npm run dev`（http://localhost:5173 で起動）
- 本番ビルド: `npm run build` → `dist/`
- デプロイ: `main` ブランチに push すると `.github/workflows/deploy.yml` が GitHub Pages へ自動公開

## よくあるタスクの進め方

- **「〇〇画面にボタン追加」** → 対応する `XxxView` を探し、既存のボタン JSX をコピーして書き換える
- **「サイドバーに項目追加」** → `CompassMockup` 内の `<SidebarItem>` 行を増やし、末尾の `activeView === 'xxx' &&` 分岐にビューを追加
- **「アイコン変更」** → `lucide-react` の import 行に追加し、該当箇所で差し替える
- **「グラフのデータを差し替え」** → 呼び出し元のコンポーネント内の配列リテラルを書き換える
