import Image from "next/image";
import SectionTitle from "@/components/common/SectionTitle";

export default function Feedback() {
  return (
    <section className="mx-auto max-w-6xl px-8 pt-26">

      <SectionTitle
        title="添削はこのようにお返しします"
        subtitle="楽譜への書き込みと文章によるフィードバックで、次の練習につながるアドバイスをお届けします。"
      />

      <div
        className="
          grid
          gap-16
          items-center
          md:grid-cols-[420px_1fr]
        "
      >

        {/* Image */}

        <div
          className="
            relative
            aspect-[3/4]
            overflow-hidden
            rounded-2xl
            border
            border-neutral-200
          "
        >

          <Image
            src="/images/activities/video-lesson/feedback-sample.jpg"
            alt="添削例"
            fill
            className="object-contain bg-white"
          />

        </div>

        {/* Text */}

        <div>

          <h3
            className="
              text-3xl
              font-light
              leading-snug
            "
          >
            楽譜への書き込みと、
            <br />
            文章によるフィードバック
          </h3>

          <p
            className="
              mt-8
              leading-8
              text-neutral-700
            "
          >
            添削では、楽譜へ直接書き込みを行いながら、
            演奏をより良くするためのポイントを
            分かりやすくお伝えします。
          </p>

          <p
            className="
              mt-6
              leading-8
              text-neutral-700
            "
          >
            「ここを直しましょう」という指摘だけではなく、
            なぜそうすると良くなるのか、
            どのような練習をすると改善しやすいのかまで、
            丁寧にご説明いたします。
          </p>

          <p
            className="
              mt-6
              leading-8
              text-neutral-700
            "
          >
            一人ひとりの目標やレベルに合わせて、
            次の練習につながるフィードバックを
            心がけています。
          </p>

        </div>

      </div>

      {/* Example */}

      <div
        className="
          mt-20
          rounded-3xl
          bg-neutral-50
          p-8
          md:p-12
        "
      >

        <p
          className="
            text-sm
            tracking-[0.2em]
            text-neutral-400
          "
        >
          フィードバック例
        </p>

        <blockquote
          className="
            mt-6
            border-l-2
            border-neutral-300
            pl-6
            leading-8
            text-neutral-700
          "
        >
          冒頭のメロディーはとても自然に歌えています。
          一方で、左手の和音が少し前に出てしまうため、
          右手の旋律が聴こえにくくなっています。
          <br />
          <br />
          左手だけをppで練習し、
          その上に右手を乗せるようなイメージで弾いてみると、
          より立体的な響きになります。
          <br />
          <br />
          また、31小節からのクレッシェンドは、
          音量だけではなく音色の変化も意識すると、
          より自然な盛り上がりになります。
        </blockquote>

      </div>

    </section>
  );
}