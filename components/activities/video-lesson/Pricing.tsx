import Button from "@/components/common/Button";
import SectionTitle from "@/components/common/SectionTitle";

const includes = [
  "演奏動画の確認",
  "楽譜への書き込み",
  "文章によるフィードバック",
];

export default function Pricing() {
  return (
    <section className="mx-auto max-w-6xl px-8 pt-26">

      <SectionTitle
        title="料金"
        subtitle=""
      />

      <div
        className="
          mx-auto
          max-w-3xl
          rounded-3xl
          border
          border-neutral-200
          bg-white
          p-10
          md:p-14
        "
      >

        <p
          className="
            text-center
            text-sm
            tracking-[0.2em]
            text-neutral-400
          "
        >
          VIDEO FEEDBACK LESSON
        </p>

        <h2
          className="
            mt-4
            text-center
            text-3xl
            font-light
            md:text-4xl
          "
        >
          3,000円
        </h2>

        <p
          className="
            mt-2
            text-center
            text-neutral-500
          "
        >
          ／1回
        </p>

        <div className="my-10 h-px bg-neutral-200" />

        <div className="space-y-5">

          {includes.map((item) => (

            <div
              key={item}
              className="
                flex
                items-center
                gap-3
              "
            >

              <span className="text-neutral-400">
                ✓
              </span>

              <p className="text-neutral-700">
                {item}
              </p>

            </div>

          ))}

        </div>

        <div
          className="
            mt-10
            rounded-2xl
            bg-neutral-50
            p-6
          "
        >

          <p
            className="
              leading-8
              text-neutral-700
            "
          >
            基本は
            <strong className="font-medium">
              1曲・動画5分程度
            </strong>
            を目安としております。
          </p>

          <p
            className="
              mt-3
              leading-8
              text-neutral-700
            "
          >
            曲の内容や目的によっては
            柔軟に対応いたしますので、
            お気軽にご相談ください。
          </p>

        </div>

        <div
          className="
            mt-12
            text-center
          "
        >

          <Button href="/contact/video-lesson">
            動画添削レッスンを申し込む
          </Button>

        </div>

      </div>

      <p
        className="
          mx-auto
          mt-8
          max-w-2xl
          text-center
          text-sm
          leading-7
          text-neutral-500
        "
      >
        ※料金体系は今後変更となる場合があります。
        最新の内容はお問い合わせ時にご案内いたします。
      </p>

    </section>
  );
}