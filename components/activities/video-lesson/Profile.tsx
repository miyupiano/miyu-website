import Image from "next/image";
import SectionTitle from "@/components/common/SectionTitle";

export default function Profile() {
  return (
    <section className="mx-auto max-w-6xl px-8 pt-26">

      <SectionTitle
        title="講師プロフィール"
        subtitle=""
      />

      <div
        className="
          grid
          gap-12
          items-center
          md:grid-cols-[360px_1fr]
        "
      >

        {/* Photo */}

        <div
          className="
            relative
            aspect-[4/5]
            overflow-hidden
            rounded-2xl
          "
        >
          <Image
            src="/images/profile/profile.jpg"
            alt="雪入 美優"
            fill
            className="object-cover"
          />
        </div>

        {/* Text */}

        <div>

          <h3
            className="
              text-3xl
              font-light
            "
          >
            雪入 美優
          </h3>

          <p
            className="
              mt-8
              leading-8
              text-neutral-700
            "
          >
            桐朋学園大学音楽学部ピアノ専攻卒業。
            現在、ベルギー・ブリュッセル王立音楽院
            （Koninklijk Conservatorium Brussel）
            修士課程に在籍しています。
          </p>

          <p
            className="
              mt-6
              leading-8
              text-neutral-700
            "
          >
            ソロリサイタルや室内楽、伴奏など幅広い演奏活動を行いながら、
            初心者から専門的に学ぶ方まで、一人ひとりに寄り添った指導を行っています。
          </p>

          <p
            className="
              mt-6
              leading-8
              text-neutral-700
            "
          >
            大切にしているのは、
            「正しく弾くこと」だけではなく、
            「どうすれば自分の音楽をより伝えられるか」
            という視点です。
          </p>

          <p
            className="
              mt-6
              leading-8
              text-neutral-700
            "
          >
            演奏動画だからこそ繰り返し確認できる利点を活かし、
            一人ひとりの演奏や目標に合わせた、
            次の練習につながるフィードバックをお届けします。
          </p>

        </div>

      </div>

    </section>
  );
}