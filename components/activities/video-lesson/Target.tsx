import SectionTitle from "@/components/common/SectionTitle";

const targets = [
  {
    title: "初心者の方",
    catch: "基礎から安心して学びたい",
    description:
      "ピアノを始めたばかりの方や、独学で練習されている方へ。演奏だけでなく、楽譜の読み方や練習方法についてもアドバイスいたします。",
  },
  {
    title: "趣味で楽しまれている方",
    catch: "もっと楽しく、自分らしい演奏へ",
    description:
      "好きな曲を練習しているけれど、この弾き方で合っているか不安な方へ。普段はご自身のペースで練習しながら、必要なときだけ専門家のフィードバックを受けられます。",
  },
  {
    title: "専門的に学ばれている方",
    catch: "本番に向けて演奏をさらに磨く",
    description:
      "発表会、コンクール、オーディション、音楽高校・音楽大学受験、演奏会など、一つひとつの演奏をより深く仕上げるためのお手伝いをいたします。",
  },
];

export default function Target() {
  return (
    <section className="mx-auto max-w-6xl px-8 pt-26">

      <SectionTitle
        title="こんな方におすすめ"
        subtitle=""
      />

      <div
        className="
          grid
          gap-8
          md:grid-cols-3
        "
      >

        {targets.map((target) => (

          <div
            key={target.title}
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

            <p
              className="
                text-sm
                tracking-[0.15em]
                text-neutral-400
              "
            >
              {target.catch}
            </p>

            <h3
              className="
                mt-3
                text-2xl
                font-light
                leading-snug
              "
            >
              {target.title}
            </h3>

            <p
              className="
                mt-6
                leading-8
                text-neutral-700
              "
            >
              {target.description}
            </p>

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
            text-xl
            font-light
            leading-10
          "
        >
          年齢や経験を問わず、
          <br />
          一人ひとりの目標に合わせてサポートいたします。
        </p>

        <p
          className="
            mt-6
            leading-8
            text-neutral-700
          "
        >
          「もっと良い演奏をしたい」というお気持ちがあれば、
          どなたでも安心してご利用いただけます。
        </p>

      </div>

    </section>
  );
}