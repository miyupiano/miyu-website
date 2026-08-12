# フォルダ構成

## ディレクトリ構成

```
miyu-website
│
├── app
│   ├── activities
│   ├── contact
│   ├── performance
│   ├── profile
│   ├── support
│   ├── favicon.ico
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
│
├── components
│   ├── common
│   │   └── SectionTitle.tsx
│   │
│   ├── home
│   │   ├── Hero.tsx
│   │   ├── News.tsx
│   │   ├── Message.tsx
│   │   ├── Performance.tsx
│   │   ├── SupportBanner.tsx
│   │   ├── Activities.tsx
│   │   └── Contact.tsx
│   │
│   ├── layout
│   │   ├── Header.tsx
│   │   └── Footer.tsx
│   │
│   └── ui
│       └── （共通UIを今後追加）
│
├── public
│   ├── images
│   ├── icons
│   └── videos
│
├── docs
│
├── package.json
└── README.md
```

---

# 各フォルダの役割

## app

Next.js のルーティング。

URLを管理する。

例

```
/profile

/contact

/performance
```

---

## components

画面を構成する部品。

---

### home

トップページ専用。

他ページでは使わない。

---

### common

複数ページで使うが

UIではないもの。

例

SectionTitle

---

### ui

完全に共通UI。

例

Button

Card

Modal

Badge

---

### layout

Header

Footer

など。

---

## public

画像。

動画。

アイコン。

フォント。

---

## docs

設計書。

---

# 命名ルール

フォルダ

camelCase

```
home

layout

common
```

---

コンポーネント

PascalCase

```
Hero.tsx

Button.tsx

SectionTitle.tsx
```

---

# Importルール

絶対パスを使用。

```
@/components/home/Hero
```

相対パスは禁止。

```
../../Hero
```

---

# 共通化ルール

3回以上使うコードのみ

components/uiへ移動。

それまでは各コンポーネント内に置く。

---

# ページ作成ルール

app/page.tsx

↓

components/home

を呼ぶだけ。

ロジックを書かない。

---

# データ

将来的に

```
data

news.ts

concerts.ts

works.ts
```

を追加予定。

コンテンツは

コンポーネントと分離する。

---

# 将来追加予定

```
hooks

lib

types

utils
```

必要になるまで作らない。

（YAGNI）