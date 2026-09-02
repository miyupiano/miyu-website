import Image from "next/image";
import SectionTitle from "@/components/common/SectionTitle";

const features = [
  {
    title: "ご自身のペースで受講",
    description:
      "レッスン時間を合わせる必要がなく、お好きなタイミングで動画を撮影・送付できます。",
  },
  {
    title: "一人ひとりに合わせたアドバイス",
    description:
      "演奏レベルや目標に合わせて、改善点だけでなく、より良い演奏につながる具体的な方法をご提案します。",
  },
  {
    title: "次の練習につながるフィードバック",
    description:
      "課題をお伝えするだけでなく、その課題をどのように練習すると改善できるのかまで丁寧にお伝えします。",
  },
];

export default function About() {
  return (
    <section className="mx-auto max-w-6xl px-10 pt-26">
      <SectionTitle
        title="動画添削レッスンとは？"
        subtitle=""
      />

      <div
        className="
          grid
          items-center
          gap-14
          md:grid-cols-[1fr_420px]
        "
      >
        {/* Left */}

        <div>
          <p className="leading-8 text-neutral-700">
            演奏動画と使用されている楽譜をお送りいただき、
            一人ひとりの演奏に合わせた
            フィードバックをお返しするサービスです。
          </p>

          <p className="mt-6 leading-8 text-neutral-700">
            リアルタイムのオンラインレッスンとは異なり、
            ご自身のご都合に合わせて受講できるため、
            お仕事や学校などで忙しい方でも、
            無理なくご利用いただけます。
          </p>

          <p className="mt-6 leading-8 text-neutral-700">
            演奏を確認し、
            課題や改善点だけではなく、
            <strong className="font-medium text-black">
              「どう練習すると、より良い演奏につながるか」
            </strong>
            を大切にしながら、
            次の練習に活かせる具体的なアドバイスをお届けします。
          </p>
        </div>

        {/* Image */}

        <div className="overflow-hidden rounded-2xl">
          <Image
            src="/images/activities/video-lesson/about.jpg"
            alt="動画添削レッスン"
            width={1200}
            height={900}
            className="h-auto w-full"
          />
        </div>
      </div>

      {/* Features */}

      <div
        className="
          mt-20
          grid
          gap-6
          md:grid-cols-3
        "
      >
        {features.map((feature) => (
          <div
            key={feature.title}
            className="
              rounded-2xl
              border
              border-neutral-200
              bg-white
              p-8
            "
          >
            <h3
              className="
                text-xl
                font-light
              "
            >
              {feature.title}
            </h3>

            <p
              className="
                mt-5
                leading-8
                text-neutral-600
              "
            >
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}