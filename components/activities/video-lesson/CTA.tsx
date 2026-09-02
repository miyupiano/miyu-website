import Button from "@/components/common/Button";

export default function CTA() {
  return (
    <section className="mx-auto max-w-5xl px-8 py-26">

      <div
        className="
          rounded-3xl
          border
          border-neutral-200
          bg-neutral-50
          px-8
          py-16
          text-center
          md:px-16
          md:py-20
        "
      >

        <p
          className="
            text-sm
            tracking-[0.2em]
            text-neutral-400
          "
        >
          PIANO VIDEO FEEDBACK LESSON
        </p>

        <h2
          className="
            mt-6
            text-3xl
            font-extralight
            leading-tight
            md:text-5xl
          "
        >
          あなたの演奏に、
          <br />
          次の一歩を。
        </h2>

        <p
          className="
            mx-auto
            mt-8
            max-w-2xl
            leading-8
            text-neutral-700
          "
        >
          演奏は、一人で悩み続けるよりも、
          少し視点が変わるだけで大きく変化することがあります。
        </p>

        <p
          className="
            mx-auto
            mt-6
            max-w-2xl
            leading-8
            text-neutral-700
          "
        >
          初心者の方から専門的に学ばれている方まで、
          一人ひとりの目標に寄り添いながら、
          次の練習につながるフィードバックをお届けします。
        </p>

        <p
          className="
            mx-auto
            mt-6
            max-w-2xl
            leading-8
            text-neutral-700
          "
        >
          ご不明な点がございましたら、
          お申し込み前でもお気軽にお問い合わせください。
        </p>

        <div className="mt-12">

          <Button href="/contact/video-lesson">
            動画添削レッスンを申し込む
          </Button>

        </div>

      </div>

    </section>
  );
}