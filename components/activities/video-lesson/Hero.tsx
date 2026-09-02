import Image from "next/image";
import Button from "@/components/common/Button";

export default function Hero() {
  return (
    <section className="mx-auto max-w-6xl px-8 pt-12 md:pt-26">
      <div
        className="
          grid
          items-center
          gap-12
          md:grid-cols-[1fr_480px]
        "
      >
        {/* Left */}

        <div>
          <h1
            className="
              pt-10
              text-4xl
              font-extralight
              leading-tight
              md:text-6xl
              md:pd-0
            "
          >
            あなたの演奏に、
            <br />
            次の一歩を。
          </h1>

          <p
            className="
              mt-10
              leading-8
              text-neutral-700
            "
          >
            演奏動画と楽譜をお送りいただくだけで、一人ひとりの演奏に合わせた具体的なアドバイスをお届けします。
          </p>

          <p
            className="
              mt-6
              leading-8
              text-neutral-700
            "
          >
            初心者の方から、趣味でピアノを楽しまれている方、コンクールや演奏会、音楽高校・音楽大学受験を控えた方まで。
          </p>

          <p
            className="
              mt-6
              leading-8
              text-neutral-700
            "
          >
            時間や場所に縛られず、ご自身のペースで学べる動画添削レッスンです。
          </p>

          <p
            className="
              mt-6
              leading-8
              text-neutral-700
            "
          >
            必要なときだけ専門家のアドバイスを受けながら、
            ご自身のペースで演奏を深めていただけます。
          </p>
        </div>

        {/* Right */}

        <div className="overflow-hidden rounded-2xl">
          <Image
            src="/images/activities/video-lesson/hero.jpg"
            alt="動画添削レッスン"
            width={1200}
            height={900}
            className="h-auto w-full"
          />
        </div>
      </div>

      <div
        className="
          mt-12
          flex
          justify-center
        "
      >
        <Button href="/contact/video-lesson">
          動画添削レッスンを申し込む
        </Button>
      </div>
    </section>
  );
}