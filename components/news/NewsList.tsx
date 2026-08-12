import { news } from "@/data/news";
import NewsCard from "./NewsCard";

type Props = {
  limit?: number;
  category?: string;
};

export default function NewsList({
  limit,
  category = "ALL",
}: Props) {

  const filteredNews =
    category === "ALL"
      ? news
      : news.filter(
          (item) => item.category === category
        );

  const displayNews =
    limit
      ? filteredNews.slice(0, limit)
      : filteredNews;

  return (
    <div
      className="
        overflow-hidden
        rounded-2xl
        border
        border-neutral-200
        bg-neutral-50
        shadow-sm
      "
    >

      {displayNews.map((item, index) => (

        <NewsCard
          key={item.id}
          item={item}
          showBorder={
            index !== displayNews.length - 1
          }
        />

      ))}

    </div>
  );
}