import Link from "next/link";
import Image from "next/image";

const activities = [
  {
    title: "対面レッスン",
    description:
      "一人ひとりの目標や個性に合わせたピアノレッスンを行っています。初心者の方から専門的に学びたい方まで対応しています。",
    image: "/images/activities/lesson/hero.jpg",
    href: "/activities/lesson",
  },
  {
    title: "動画添削レッスン",
    description:
      "遠方にお住まいの方にも対応した、演奏動画をもとにしたオンラインレッスンを行っています。",
    image: "/images/activities/video-lesson/hero.jpg",
    href: "/activities/video-lesson",
  },
  {
    title: "演奏依頼",
    description:
      "コンサート、イベント、学校、施設など、さまざまな場での演奏依頼を承っています。",
    image: "/images/activities/performance/hero.jpg",
    href: "/activities/performance",
  },
  {
    title: "伴奏依頼",
    description:
      "コンクール、試験、演奏会など、幅広い場面での伴奏を承っています。",
    image: "/images/activities/accompaniment/hero.jpg",
    href: "/activities/accompaniment",
  },
  // {
  //   title: "留学支援",
  //   description:
  //     "自身のベルギー留学経験をもとに、音楽留学の準備や相談をサポートします。",
  //   image: "/images/activities/study-abroad/hero.jpg",
  //   href: "/activities/study-abroad",
  // },
];

export default function ActivitiesPage() {
  return (
    <main>

      {/* Hero */}

      <section className="relative h-[27vh] md:h-[40vh]">

        <Image
          src="/images/activities/hero.jpg"
          alt="その他活動"
          fill
          priority
          className="object-cover"
        />

        {/* Overlay */}

        <div className="absolute inset-0 bg-black/50" />

        {/* Text */}

        <div className="absolute inset-0 flex items-center justify-center">

          <div className="text-center text-white">

            <h1 className="pt-12 text-4xl md:text-6xl font-extralight tracking-[0.15em]">
              その他活動
            </h1>
            

          </div>

        </div>

      </section>

      {/* Activity Cards */}
      <section className="mx-auto max-w-6xl px-8 pt-12 md:pt-26 pb-20">

        <div className="grid gap-4 md:gap-8 md:grid-cols-2">

          {activities.map((activity) => (

            <Link
              key={activity.title}
              href={activity.href}
              className="
                group
                overflow-hidden
                rounded-2xl
                border
                border-neutral-200
                bg-white
                transition
                hover:shadow-lg
              "
            >
{/* 
              <div className="relative aspect-[16/9]">

                <Image
                  src={activity.image}
                  alt={activity.title}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                />

              </div> */}

              <div className="p-6 md:p-8">

                <h2 className="text-2xl md:text-3xl font-light tracking-wide">
                  {activity.title}
                </h2>

                <p className="mt-5 md:leading-8 text-neutral-600">
                  {activity.description}
                </p>

                <div className="mt-6 md:mt-8 text-sm tracking-[0.15em]">
                  詳しく見る →
                </div>

              </div>

            </Link>

          ))}

        </div>

      </section>

    </main>
  );
}