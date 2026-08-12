import SectionTitle from "@/components/common/SectionTitle";
import Button from "@/components/common/Button";

const activities = [
  {
    title: "対面レッスン",
    description:
      "一人ひとりの個性を大切にしたピアノレッスンを行っています。",
  },
  {
    title: "動画添削レッスン",
    description:
      "遠方の方にも対応したオンラインでのレッスンを行っています。",
  },
  {
    title: "演奏依頼",
    description:
      "コンサートやイベントなどでの演奏依頼を承っています。",
  },
  {
    title: "伴奏依頼",
    description:
      "試験・コンクール・演奏会などの伴奏を承っています。",
  },
  // {
  //   title: "留学支援",
  //   description:
  //     "音楽留学の経験をもとに準備や相談をサポートします。",
  // },
];

export default function Activities() {
  return (
    <section className="mx-auto max-w-6xl px-8 pt-26">

      <SectionTitle
        title="その他活動"
        subtitle="演奏活動以外にも、音楽を通してさまざまな活動を行っています。"
      />

      <div className="grid gap-2 md:gap-6 grid-cols-2 md:grid-cols-3">

        {activities.map((activity) => (

          <div
            key={activity.title}
            className="
              rounded-2xl
              border
              border-neutral-200
              bg-white
              p-3
              md:p-8
            "
          >

            <h3 className="text-base md:text-xl font-light tracking-wide">
              {activity.title}
            </h3>

            <p className="text-sm md:text-base mt-2 md:mt-5 leading-5 md:leading-8 text-neutral-600">
              {activity.description}
            </p>

          </div>

        ))}

      </div>

      <div className="mt-12 text-center">

        <Button
          href="/activities"
          className=""
        >
          その他活動について詳しく見る
        </Button>

      </div>

    </section>
  );
}