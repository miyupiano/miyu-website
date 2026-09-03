import Image from "next/image";
import Button from "@/components/common/Button";

const services = [
  {
    title: "室内楽",
    description:
      "ピアノトリオをはじめとした室内楽や、二重奏・三重奏などのアンサンブルに対応しております。連弾や2台ピアノなど、さまざまな編成での共演も承ります。",
    achievements: ["ピアノトリオ演奏会"],
  },
  {
    title: "リサイタル伴奏",
    description:
      "弦楽器・管楽器・声楽などのソロリサイタルにおける伴奏を承ります。約1〜2時間の演奏会を通して、共演者の音楽を支える伴奏を心掛けています。",
    achievements: ["桐朋学園大学ホルン科宮崎公演、東京公演"],
  },
  {
    title: "コンクール・試験伴奏",
    description:
      "コンクールや実技試験、学校の授業などの伴奏を承ります。本番だけでなく、本番前の合わせ（1〜2回程度）にも対応しております。",
    achievements: [
      "桐朋学園大学実技試験",
      "洗足学園大学授業内演奏",
    ],
  },
  {
    title: "アマチュア伴奏アドバイス",
    description:
      "伴奏をしながら演奏についてのアドバイスを行います。音楽の流れやアンサンブルを大切にしながら、より演奏しやすくなるようサポートいたします。",
    achievements: ["ヴァイオリン、チェロ伴奏"],
  },
  {
    title: "発表会伴奏",
    description:
      "発表会での伴奏を承ります。1曲のみの伴奏から、終日にわたる伴奏まで対応可能です。音楽教室や先生方からのご依頼も歓迎しております。",
    achievements: ["長野県新人演奏会"],
  },
  {
    title: "レッスン同行",
    description:
      "音楽大学生を中心に、実技レッスンへの伴奏同行を承ります。レッスン内容や先生のご指導に合わせ、柔軟に対応いたします。",
    achievements: ["管楽器、弦楽器レッスン同行"],
  },
  {
    title: "譜めくり",
    description:
      "コンサートや発表会、コンクールなどでの譜めくりを承ります。演奏者が安心して演奏に集中できるよう、丁寧なサポートを心掛けています。",
    achievements: ["リサイタル譜めくり"],
  },
];

export default function AccompanimentPage() {
  return (
    <main>

      {/* Hero */}

      <section className="relative h-[55vh]">

        <Image
          src="/images/activities/accompaniment/hero.jpg"
          alt="伴奏依頼・その他"
          fill
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/40" />

        <div className="absolute inset-0 flex items-center justify-center px-8">

          <div className="text-center text-white">

            <h1 className="text-5xl font-extralight tracking-[0.15em] md:text-6xl">
              伴奏依頼・その他
            </h1>

            <p className="mt-8 leading-8">
              共演者の音楽に寄り添い、
              <br />
              ともに音楽を創り上げる伴奏を目指しています。
            </p>

          </div>

        </div>

      </section>

      {/* Availability */}

      <section className="mx-auto max-w-7xl px-8 py-28">

        <h2 className="text-4xl font-extralight">
          対応期間・活動拠点
        </h2>

        <div className="mt-12 space-y-6 leading-5 text-neutral-700">

          <p>
            現在、ベルギー・ブリュッセルを拠点に演奏活動を行っております。
          </p>

          <p>
            日本でのご依頼は、一時帰国期間を中心に承っております。
          </p>

          <div className="rounded-2xl bg-neutral-50 p-8">

            <p>
              <strong>冬：</strong>12月21日頃〜12月30日頃
            </p>

            <p className="mt-3">
              <strong>夏：</strong>7月〜8月頃
            </p>

          </div>

          <p>
            上記以外の期間につきましては、ヨーロッパでのご依頼を承っております。
          </p>

          <p>
            日本では東京・長野を中心に活動しておりますが、
            その他の地域につきましてもお気軽にご相談ください。
          </p>

          <p>
            日程や演奏料、交通費など、ご依頼内容に応じてご案内いたします。
            まずはお問い合わせフォームよりお気軽にご相談ください。
          </p>

        </div>

      </section>

      {/* Services */}

      <section className="mx-auto max-w-7xl px-8 pb-28">

        <h2 className="text-4xl font-extralight">
          お受けしている内容
        </h2>

        <p className="mt-6 max-w-3xl leading-8 text-neutral-700">
          伴奏を中心に、室内楽やレッスン同行、譜めくりなど、
          幅広いご依頼を承っております。
        </p>

        <div
          className="
            mt-10
            grid
            gap-8
            md:grid-cols-2
            xl:grid-cols-3
          "
        >

          {services.map((service) => (

            <div
              key={service.title}
              className="
                flex
                flex-col
                rounded-2xl
                border
                border-neutral-200
                bg-white
                p-8
              "
            >

              <h3 className="text-xl font-light leading-8">
                {service.title}
              </h3>

              <p className="mt-5
                flex-1
                leading-8
                text-neutral-700">
                {service.description}
              </p>

              <div className="mt-6">

                <div className="border-t border-neutral-200 pt-3 h-20">

                  <p className="text-xs tracking-[0.15em] text-neutral-400">
                    主な実績
                  </p>

                  <ul className="mt-3 space-y-1 text-sm leading-5 text-neutral-600">

                    {service.achievements.map((achievement) => (

                      <li key={achievement}>
                        ・{achievement}
                      </li>

                    ))}

                  </ul>

                </div>

              </div>

            </div>

          ))}

        </div>

            </section>

      {/* Contact */}

      <section className="mx-auto max-w-4xl px-8 pb-32">

        <div className="rounded-2xl bg-neutral-50 px-10 py-16 text-center">

          <h2 className="text-3xl font-extralight">
            お問い合わせ
          </h2>

          <p className="mt-8 leading-8 text-neutral-700">
            伴奏や室内楽、レッスン同行、譜めくりなどのご依頼は、
            <br />
            お問い合わせフォームよりお気軽にご相談ください。
          </p>

          <p className="mt-4 text-sm leading-7 text-neutral-500">
            演奏内容や日程、演奏料などにつきましては、
            ご依頼内容を確認の上、ご案内いたします。
          </p>

          <div className="mt-10">

            <Button href="/contact/accompaniment">
              お問い合わせはこちら →
            </Button>

          </div>

        </div>

      </section>

    </main>
  );
}