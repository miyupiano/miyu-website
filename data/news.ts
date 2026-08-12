export type NewsCategory =
  | "CONCERT"
  | "YOUTUBE"
  | "NOTE"
  | "MEDIA"
  | "SNS"
  | "その他";

export type NewsItem = {
  id: number;
  date: string;
  category: NewsCategory;
  title: string;
  href: string;
  external?: boolean;
};

export const news: NewsItem[] = [
  {
    id: 1,
    date: "2026.08.11",
    category: "その他",
    title: "ホームページを開設しました。",
    href: "/news",
  },

  // {
  //   id: 2,
  //   date: "2026.08.28",
  //   category: "NOTE",
  //   title: "ベルギー留学日記を更新しました。",
  //   href: "https://note.com/xxxxxxxx",
  //   external: true,
  // },

  // {
  //   id: 3,
  //   date: "2026.08.20",
  //   category: "YOUTUBE",
  //   title: "ラヴェル《水の戯れ》を公開しました。",
  //   href: "/performance/videos",
  // },

  // {
  //   id: 4,
  //   date: "2026.08.10",
  //   category: "MEDIA",
  //   title: "ホームページを公開しました。",
  //   href: "/",
  // },
];