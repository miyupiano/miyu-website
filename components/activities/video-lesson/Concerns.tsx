import Image from "next/image";
import SectionTitle from "@/components/common/SectionTitle";

const concernsLeft = [
  "この弾き方で\n合っているのか、\n自信が持てない。",
  "独学で練習していて、\n客観的なアドバイスが\nほしい。",
  "練習方法が分からず、\nなかなか上達を\n実感できない。",
];

const concernsRight = [
  "発表会やコンクール、\n本番前に演奏を\n見てもらいたい。",
  "レッスンに通う時間はないけれど、\n必要なときだけ\n相談したい。",
  "もっと音楽的な表現や\n演奏の完成度を\n高めたい。",
];

export default function Concerns() {
  return (
    <section className="mx-auto max-w-7xl px-8 pt-26">

      <SectionTitle
        title="こんなお悩みありませんか？"
        subtitle=""
      />

      {/* PC */}

      <div className="mt-16 hidden lg:grid grid-cols-[1fr_280px_1fr] gap-2 items-center">

        {/* Left */}

        <div className="space-y-8">

          {concernsLeft.map((concern) => (

            <div
              key={concern}
              className="relative h-[190px]"
            >

              <Image
                src="/images/activities/video-lesson/bubble-right.png"
                alt=""
                fill
                className="-scale-x-100 object-contain"
              />

              <div
                className="
                  absolute
                  inset-0
                  flex
                  items-center
                  justify-center
                  px-12
                  text-center
                "
              >

                <p
                  className="
                    whitespace-pre-line
                    text-lg
                    leading-9
                    text-neutral-700
                  "
                >
                  {concern}
                </p>

              </div>

            </div>

          ))}

        </div>

        {/* Center */}

        <div className="flex flex-col items-center">

          <Image
            src="/images/activities/video-lesson/worried-person.jpg"
            alt="悩んでいる人物"
            width={280}
            height={280}
          />

        </div>

        {/* Right */}

        <div className="space-y-8">

          {concernsRight.map((concern) => (

            <div
              key={concern}
              className="relative h-[190px]"
            >

              <Image
                src="/images/activities/video-lesson/bubble-right.png"
                alt=""
                fill
                className="object-contain"
              />

              <div
                className="
                  absolute
                  inset-0
                  flex
                  items-center
                  justify-center
                  px-12
                  text-center
                "
              >

                <p
                  className="
                    whitespace-pre-line
                    text-lg
                    leading-9
                    text-neutral-700
                  "
                >
                  {concern}
                </p>

              </div>

            </div>

          ))}

        </div>

      </div>

      {/* Mobile */}

      <div className="mt-12 lg:hidden">

        <div className="mb-10 flex justify-center">

          <Image
            src="/images/activities/video-lesson/worried-person.svg"
            alt="悩んでいる人物"
            width={220}
            height={220}
          />

        </div>

        <div className="space-y-5">

          {[...concernsLeft, ...concernsRight].map((concern) => (

            <div
              key={concern}
              className="
                relative
                h-[190px]
              "
            >

              <Image
                src="/images/activities/video-lesson/bubble-right.png"
                alt=""
                fill
                className="object-contain"
              />

              <div
                className="
                  absolute
                  inset-0
                  flex
                  items-center
                  justify-center
                  px-12
                  text-center
                "
              >

                <p
                  className="
                    whitespace-pre-line
                    text-lg
                    leading-9
                    text-neutral-700
                  "
                >
                  {concern}
                </p>

              </div>

            </div>

          ))}

        </div>

      </div>

      <div
        className="
          mx-auto
          mt-20
          max-w-3xl
          text-center
        "
      >

        <p
          className="
            text-xl
            font-light
            leading-10
          "
        >
          一人で悩み続けるのではなく、
          <br />
          必要なときに専門家の視点を取り入れてみませんか。
        </p>

        <p
          className="
            mt-6
            leading-8
            text-neutral-700
          "
        >
          動画添削レッスンでは、
          演奏をより良くするための具体的なアドバイスと、
          次の練習につながるフィードバックをお届けします。
        </p>

      </div>

    </section>
  );
}