import SectionTitle from "@/components/common/SectionTitle";

const steps = [
  {
    step: "STEP 1",
    title: "お申し込み",
    description:
      "お申し込みフォームより必要事項をご入力ください。",
  },
  {
    step: "STEP 2",
    title: "内容の確認・ご案内",
    description:
      "メールにてレッスン内容やご希望を確認し、料金やお支払い方法、動画送付先などをご案内いたします。",
  },
  {
    step: "STEP 3",
    title: "料金のお支払い",
    description:
      "内容をご確認いただいた後、銀行振込にてお支払いいただきます。",
  },
  {
    step: "STEP 4",
    title: "演奏動画・楽譜の送付",
    description:
      "メール等で演奏動画と楽譜（PDF）をお送りください。",
  },
  {
    step: "STEP 5",
    title: "添削・フィードバック",
    description:
      "演奏を確認し、楽譜への書き込みと文章によるフィードバックを作成いたします。",
  },
  {
    step: "STEP 6",
    title: "添削結果のお届け",
    description:
      "添削済み楽譜（PDF）と文章によるフィードバックをメールにてお送りいたします。",
  },
];

export default function Flow() {
  return (
    <section className="mx-auto max-w-6xl px-8 pt-26">

      <SectionTitle
        title="ご利用の流れ"
        subtitle=""
      />

      <div
        className="
          grid
          pt-8
          gap-10
          md:grid-cols-3
        "
      >

        {steps.map((step, index) => (

          <div
            key={step.step}
            className="relative"
          >

            {/* Step Circle */}

            <div
              className="
                absolute
                left-1/2
                top-0
                z-20
                -translate-x-1/2
                -translate-y-1/2
              "
            >

              <div
                className="
                  flex
                  h-16
                  w-16
                  flex-col
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-neutral-300
                  bg-white
                "
              >

                <span
                  className="
                    text-[10px]
                    tracking-[0.2em]
                    text-neutral-400
                  "
                >
                  STEP
                </span>

                <span
                  className="
                    text-2xl
                    font-light
                    leading-none
                  "
                >
                  {index + 1}
                </span>

              </div>

            </div>

            {/* Card */}

            <div
              className="
                h-full
                rounded-2xl
                border
                border-neutral-200
                bg-white
                px-8
                pt-14
                pb-4
                text-center
              "
            >

              <h3
                className="
                  text-2xl
                  font-light
                "
              >
                {step.title}
              </h3>

              <p
                className="
                  mt-6
                  leading-8
                  text-neutral-600
                "
              >
                {step.description}
              </p>

            </div>

          </div>

        ))}

      </div>
            <div
        className="
          mx-auto
          mt-16
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
          ご不明な点がございましたら、
          <br />
          お申し込み前でもお気軽にお問い合わせください。
        </p>

      </div>

    </section>
  );
}