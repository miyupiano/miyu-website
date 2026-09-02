import SectionTitle from "@/components/common/SectionTitle";

const points = [
  {
    title: "音色・響き",
    description:
      "曲や場面にふさわしい音色や響きになっているかを確認します。",
  },
  {
    title: "強弱・バランス",
    description:
      "自然なダイナミクスや旋律と伴奏のバランスを確認します。",
  },
  {
    title: "リズム・テンポ",
    description:
      "拍感やテンポの安定感を確認します。",
  },
  {
    title: "アーティキュレーション",
    description:
      "楽譜に込められた表現を確認します。",
  },
  {
    title: "曲全体の流れ",
    description:
      "作品全体の構成や音楽の流れを確認します。",
  },
  {
    title: "練習方法",
    description:
      "改善につながる具体的な練習方法をご提案します。",
  },
];

export default function Points() {
  return (
    <section className="mx-auto max-w-6xl px-8 pt-26">

      <SectionTitle
        title="演奏で確認するポイント"
        subtitle="演奏レベルや目的に合わせて、総合的に確認いたします。"
      />

      <div className="mt-12 grid gap-5 md:grid-cols-2">

        {points.map((point) => (

          <div
            key={point.title}
            className="
              rounded-xl
              border
              border-neutral-200
              bg-white
              px-6
              py-5
            "
          >

            <h3 className="text-lg font-medium">
              {point.title}
            </h3>

            <p className="mt-2 text-sm leading-7 text-neutral-600">
              {point.description}
            </p>

          </div>

        ))}

      </div>

      <p
        className="
          mx-auto
          mt-10
          max-w-3xl
          text-center
          leading-8
          text-neutral-600
        "
      >
        上記以外にも、一人ひとりの演奏や目標に合わせて、
        必要な内容を総合的にフィードバックいたします。
      </p>

    </section>
  );
}