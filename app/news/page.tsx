"use client";

import { useState } from "react";
import SectionTitle from "@/components/common/SectionTitle";
import NewsFilter from "@/components/news/NewsFilter";
import NewsList from "@/components/news/NewsList";
import { NewsCategory } from "@/data/news";

type FilterType = "ALL" | NewsCategory;

export default function NewsPage() {

  const [category, setCategory] =
    useState<FilterType>("ALL");

  return (
    <main className="mx-auto max-w-6xl px-8 py-20">

      <SectionTitle
        title="お知らせ"
        subtitle="演奏会・メディア掲載・活動のお知らせ"
      />

      <NewsFilter
        selected={category}
        onSelect={setCategory}
      />

      <NewsList category={category} />

    </main>
  );
}