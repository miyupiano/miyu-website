import Image from "next/image";
import Button from "@/components/common/Button";

export default function Message() {
  return (
    <section
      id="message"
      className="mx-auto max-w-6xl px-8 pt-12 md:pt-26"
    >

      <div className="grid gap-8 md:grid-cols-2 md:items-start md:gap-16">


        {/* Left */}

        <div className="relative aspect-[3/2] overflow-hidden rounded-2xl">

          <Image
            src="/images/home/message.jpg"
            alt="Miyu Yukiiri"
            fill
            className="object-cover"
          />

        </div>



        {/* Right */}

        <div>


          {/* Title */}

          <div className="relative">

            <h2
              className="
                text-4xl
                font-extralight
                tracking-wide
              "
            >
              想い
            </h2>


            <Image
              src="/images/common/autograph.jpg"
              alt="Miyu"
              width={80}
              height={80}
              className="
                absolute
                left-[90px]
                md:left-[110px]
                top-[5px]
                opacity-80
              "
            />

          </div>




          {/* Text */}

          <div
            className="
              mt-10
              space-y-5
              leading-7
              text-neutral-700
            "
          >

            <p>
              静けさが音楽になる場所。
            </p>


            <p>
              音楽には、答えを伝える力ではなく、
              一人ひとりの心の中に新しい景色を生み出す力があると信じています。
            </p>


            <p>
              同じ演奏を聴いても、思い浮かぶ情景は人それぞれ。
              その違いこそが、音楽の美しさだと思っています。
            </p>


            <p>
              演奏を通して、
              誰かの心にそっと寄り添う時間を届けられたら嬉しいです。
            </p>


          </div>


        </div>


      </div>




      {/* Button */}

      <div className="pt-6 md:pt-12 text-center">

        <Button href="/profile">
          プロフィールを見る
        </Button>

      </div>


    </section>
  );
}