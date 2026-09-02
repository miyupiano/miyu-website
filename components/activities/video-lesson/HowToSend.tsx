import SectionTitle from "@/components/common/SectionTitle";

const methods = [
  {
    title: "YouTube（限定公開）",
    description:
      "演奏動画をYouTubeへ「限定公開」でアップロードし、URLをお送りください。限定公開のため、URLを知っている方のみ動画を閲覧できます。",
  },
  {
    title: "Google Drive など",
    description:
      "Google DriveやDropboxなどのクラウドストレージをご利用いただくことも可能です。共有リンクをお送りください。",
  },
];

export default function HowToSend() {
  return (
    <section className="mx-auto max-w-6xl px-8 pt-26">

      <SectionTitle
        title="動画の送付方法"
        subtitle=""
      />

      <p
        className="
          mx-auto
          mb-14
          max-w-3xl
          text-center
          leading-8
          text-neutral-700
        "
      >
        演奏動画は、ご都合の良い方法でお送りいただけます。
        特別な機材やアプリは必要ありません。
      </p>

      <div
        className="
          grid
          gap-8
          md:grid-cols-2
        "
      >

        {methods.map((method) => (

          <div
            key={method.title}
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
                text-2xl
                font-light
              "
            >
              {method.title}
            </h3>

            <p
              className="
                mt-6
                leading-8
                text-neutral-700
              "
            >
              {method.description}
            </p>

          </div>

        ))}

      </div>

      <div
        className="
          mt-14
          rounded-3xl
          bg-neutral-50
          p-8
          md:p-10
        "
      >

        <h3
          className="
            text-xl
            font-light
          "
        >
          お送りいただくもの
        </h3>

        <ul
          className="
            mt-6
            space-y-4
            leading-8
            text-neutral-700
          "
        >
          <li>・演奏動画</li>

          <li>・使用されている楽譜（PDF）</li>

          <li>・ご質問や特に見てほしいポイント（任意）</li>
        </ul>

      </div>

      <div
        className="
          mx-auto
          mt-14
          max-w-3xl
          text-center
        "
      >

        <p
          className="
            leading-8
            text-neutral-700
          "
        >
          「この送り方でも大丈夫かな？」
          という場合も、お気軽にご相談ください。
          ご状況に合わせて柔軟に対応いたします。
        </p>

      </div>

    </section>
  );
}