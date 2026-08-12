import SectionTitle from "@/components/common/SectionTitle";
import Button from "@/components/common/Button";
import NewsList from "@/components/news/NewsList";

export default function News() {
  return (
    <section className="mx-auto max-w-6xl px-8 pt-26">

      <SectionTitle
        title="お知らせ"
        subtitle="演奏会・メディア掲載・活動のお知らせ"
      />

      <NewsList limit={3} />

      <div className="mt-12 text-center">

        <Button href="/news">
          すべてのお知らせを見る
        </Button>

      </div>

    </section>
  );
}