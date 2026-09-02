import SectionTitle from "@/components/common/SectionTitle";

const faqs = [
  {
    question: "初心者でも受講できますか？",
    answer:
      "もちろんです。ピアノを始めたばかりの方から、趣味で楽しまれている方、専門的に学ばれている方まで、それぞれの目標に合わせてフィードバックいたします。",
  },
  {
    question: "どのような曲でも添削できますか？",
    answer:
      "クラシックを中心に対応しております。その他のジャンルについても、内容によって対応可能な場合がありますので、お気軽にご相談ください。",
  },
  {
    question: "スマートフォンで撮影した動画でも大丈夫ですか？",
    answer:
      "はい、問題ありません。演奏全体と手元がある程度確認できる画角で撮影していただければ十分です。",
  },
  {
    question: "添削結果はどのくらいで届きますか？",
    answer:
      "通常は動画を受け取ってから1週間程度を目安にお返しいたします。演奏会シーズンなどは前後する場合がありますので、あらかじめご了承ください。",
  },
  {
    question: "動画はどのように送ればよいですか？",
    answer:
      "YouTubeの限定公開、またはGoogle Driveなどの共有リンクをご利用いただけます。",
  },
  {
    question: "海外からでも受講できますか？",
    answer:
      "はい。動画と楽譜の送付ができれば、日本国内・海外を問わずご利用いただけます。",
  },
  {
    question: "質問したいことがあるのですが。",
    answer:
      "お申し込み前でもお気軽にお問い合わせください。サービス内容について丁寧にご案内いたします。",
  },
];

export default function FAQ() {
  return (
    <section className="mx-auto max-w-5xl px-8 pt-26">

      <SectionTitle
        title="よくあるご質問"
        subtitle=""
      />

      <div className="mt-12 space-y-4">

        {faqs.map((faq) => (

          <details
            key={faq.question}
            className="
              rounded-2xl
              border
              border-neutral-200
              bg-white
              p-6
              group
            "
          >

            <summary
              className="
                flex
                cursor-pointer
                list-none
                items-center
                justify-between
                text-lg
                font-light
              "
            >
              {faq.question}

              <span
                className="
                  text-2xl
                  text-neutral-400
                  transition
                  group-open:rotate-45
                "
              >
                ＋
              </span>

            </summary>

            <p
              className="
                mt-6
                leading-8
                text-neutral-700
              "
            >
              {faq.answer}
            </p>

          </details>

        ))}

      </div>

    </section>
  );
}