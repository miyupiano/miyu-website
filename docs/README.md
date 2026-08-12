# Miyu Yukiiri Official Website

ピアニスト **雪入 美優** の公式ホームページです。

このプロジェクトは、単なるポートフォリオサイトではなく、
「世界観を伝え、活動へ繋げるブランドサイト」として制作しています。

---

# プロジェクトの目的

このホームページには以下の役割があります。

- 演奏活動を紹介する
- 演奏依頼へ繋げる
- レッスン依頼へ繋げる
- 伴奏依頼へ繋げる
- 留学支援へ繋げる
- 支援者との接点を作る
- 世界観を伝える

「静けさが音楽になる場所。」

このコンセプトを軸として制作しています。

---

# ターゲット

- クラシック音楽ファン
- 演奏会主催者
- ホール・施設
- 学校
- ピアノを学ぶ方
- 留学希望者
- 支援者

---

# コンセプト

演奏を聴いた人が、

「それぞれ違う景色を思い浮かべる」

そんな体験を、
ホームページでも実現することを目指しています。

余白
静けさ
透明感
温かさ

を大切にしています。

---

# 技術スタック

- Next.js
- React
- TypeScript
- Tailwind CSS
- App Router
- Vercel

---

# 開発方針

## シンプルに作る

必要になるまで機能を作らない。

(YAGNI)

---

## 共通化

3回以上使用するものだけ共通コンポーネント化する。

---

## 保守性

後から修正しやすい設計を優先する。

---

## AIとの共同開発

ChatGPTを利用しながら開発を進める。

コードだけでなく、
設計書も常に更新する。

---

# フォルダ構成

```
app/
components/
public/
docs/
```

詳細は

docs/STRUCTURE.md

を参照。

---

# ドキュメント

docs/

```
PROJECT.md
STRUCTURE.md
DESIGN.md
CONTENT.md
DECISIONS.md
TODO.md
CHANGELOG.md
PROMPT.md
MEETING.md
```

---

# 開発ルール

ページ

```
app
```

↓

画面部品

```
components
```

↓

共通UI

```
components/ui
```

↓

画像

```
public
```

---

# 命名規則

フォルダ

camelCase

```
home
layout
common
```

コンポーネント

PascalCase

```
Hero.tsx

Button.tsx

SectionTitle.tsx
```

---

# Import

絶対パスを使用する。

```
@/components/home/Hero
```

相対パスは禁止。

---

# デザインルール

写真を主役にする。

余白を広く使う。

アニメーションは控えめ。

高級感を大切にする。

日本語を基本とする。

将来的に

JP / EN

切替を実装予定。

---

# Git運用

1機能ごとにCommitする。

意味のある単位で履歴を残す。

---

# 起動方法

インストール

```bash
npm install
```

開発

```bash
npm run dev
```

ビルド

```bash
npm run build
```

本番確認

```bash
npm start
```

---

# 今後実装予定

- プロフィールページ
- 演奏活動ページ
- その他活動ページ
- お問い合わせページ
- Supportページ
- CMS化
- 多言語対応
- SEO
- OGP
- Google Analytics
- 独自ドメイン

---

# AIへの引き継ぎ

このプロジェクトを引き継ぐ場合は、

以下の順番でドキュメントを読むこと。

1. README.md
2. docs/PROJECT.md
3. docs/STRUCTURE.md
4. docs/DESIGN.md
5. docs/DECISIONS.md
6. docs/TODO.md

その後にコードを読むこと。

コードより先に設計思想を理解する。

---

# 最終目標

このホームページは、

「演奏家のブランド価値を高める作品」

として制作する。

見た人が、

「この人の演奏を聴いてみたい」

そう思える体験を目指す。