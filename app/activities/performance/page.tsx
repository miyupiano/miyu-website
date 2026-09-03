import Image from "next/image";
import Button from "@/components/common/Button";

const services = [
  {
    title: "ピアノリサイタル（クラシック）",
    description:
      "ホールやサロンなどで約1〜2時間のクラシック・ピアノリサイタルを行います。ご希望のテーマや会場の雰囲気に合わせて、プログラムのご提案も可能です。",
    achievements: [
      "雪入美優ピアノリサイタル",
    ],
  },
  {
    title: "ピアノコンチェルト",
    description:
      "オーケストラとの共演によるピアノ協奏曲の演奏を承ります。十分な準備期間が必要となるため、半年以上前を目安にご相談ください。",
    achievements: [
      "諏訪交響楽団",
    ],
  },
  {
    title: "クラシック演奏（ゲスト出演等）",
    description:
      "演奏会や式典などで、1曲から数曲程度の演奏を承ります。演奏時間や催しの趣旨に合わせてプログラムをご提案いたします。",
    achievements: [
      "発表会でのゲスト演奏",
    ],
  },
  {
    title: "ホテル・レストランでのBGM演奏",
    description:
      "クラシックからポップスまで、空間に寄り添うBGM演奏を行います。会場や時間帯に合わせた選曲もお任せください。",
    achievements: [
      "ホテルサンルート銀座",
    ],
  },
  {
    title: "結婚式・イベント演奏",
    description:
      "結婚式やクリスマス、お正月など、さまざまなイベントでの演奏を承ります。ご希望の楽曲の演奏はもちろん、選曲のご相談も可能です。",
    achievements: [
      "ニューイヤーコンサート（1月1日）",
    ],
  },
  {
    title: "病院・高齢者施設での演奏",
    description:
      "クラシックに加え、昭和歌曲や童謡など親しみやすい楽曲も交えながら、約30分程度のコンサートを行います。",
    achievements: [
      "長野松代総合病院ロビー",
    ],
  },
  {
    title: "学校公演・レクチャーコンサート",
    description:
      "学校公演や芸術鑑賞会などに対応しております。テーマに合わせた演奏とトークを交え、音楽の魅力を分かりやすくお届けします。",
    achievements: [
      "都内学童でのコンサート",
    ],
  },
  {
    title: "新作ピアノ作品の初演",
    description:
      "作曲家の皆様からの新作ピアノ作品の初演依頼も歓迎しております。作品について相談しながら、一つひとつ丁寧に演奏へと形にしてまいります。",
    achievements: [
      "久保力輝作曲:drop（世界初演）",
    ],
  },
  {
    title: "ワークショップ「音楽×⚪︎⚪︎」",
    description:
      "ピアノの生演奏を聴き、音楽から感じたことやイメージを、絵・言葉・身体表現などさまざまな方法で自由に表現するワークショップを行います。",
    achievements: [
      "音楽×美術「あなたのジブンイロ、何色ですか。」/参加者23名",
    ],
  },
];

export default function PerformanceRequestPage() {
  return (
    <main>

      {/* Hero */}

      <section className="relative h-[55vh]">

        <Image
          src="/images/activities/performance/hero.jpg"
          alt="演奏依頼"
          fill
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/40" />

        <div className="absolute inset-0 flex items-center justify-center px-8">

          <div className="text-center text-white">

            <h1 className="text-5xl font-extralight tracking-[0.15em] md:text-6xl">
              演奏依頼
            </h1>

            <p className="mt-8 leading-8">
              心に残る音楽の時間を、
              <br />
              一つひとつ丁寧にお届けします。
            </p>

          </div>

        </div>

      </section>



      {/* Availability */}

      <section className="mx-auto max-w-7xl px-8 py-28">

        <h2 className="text-4xl font-extralight">
          対応期間・活動拠点
        </h2>

        <div className="mt-12 space-y-6 leading-9 text-neutral-700">

          <p>
            現在、ベルギー・ブリュッセルを拠点としております。
          </p>

          <p>
            日本での演奏は、一時帰国期間を中心に承っております。
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
            上記以外の期間につきましては、ヨーロッパでの演奏依頼を承っております。
          </p>

          <p>
            日本では東京・長野を中心に活動しておりますが、
            その他の地域につきましてもお気軽にご相談ください。
          </p>

          <p>
            演奏内容や日程、演奏料、交通費など、
            ご依頼内容に応じてご案内いたします。
            まずはお気軽にお問い合わせください。
          </p>

        </div>

      </section>



            {/* Services */}

      <section className="mx-auto max-w-7xl px-8 pb-28">

        <h2 className="text-4xl font-extralight">
          お受けしている演奏内容
        </h2>

        <div
          className="
            mt-16
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
                h-full
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

              <p
                className="
                  mt-5
                  leading-8
                  text-neutral-700
                "
              >
                {service.description}
              </p>

              <div className="mt-auto pt-8">

                <div className="border-t border-neutral-200 pt-6">

                  <p
                    className="
                      text-xs
                      tracking-[0.15em]
                      text-neutral-400
                    "
                  >
                    主な実績
                  </p>

                  <ul
                    className="
                      mt-3
                      space-y-2
                      text-sm
                      leading-7
                      text-neutral-600
                    "
                  >

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
            演奏会やイベント、学校公演などのご依頼は、
            <br />
            お問い合わせフォームよりお気軽にご相談ください。
          </p>

          <p className="mt-4 text-sm leading-7 text-neutral-500">
            演奏内容や日程、演奏時間、演奏料などにつきましては、
            ご依頼内容を確認の上、ご案内いたします。
          </p>

          <div className="mt-10">

            <Button href="/contact/performance">
              お問い合わせはこちら →
            </Button>

          </div>

        </div>

      </section>

    </main>
  );
}