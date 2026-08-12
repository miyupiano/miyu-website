import Image from "next/image";

export default function ProfilePage() {
  return (
    <main>

      <section
            className="
              mx-auto
              max-w-6xl
              px-8
              pt-12
              md:pt-26
            "
          >
            {/* Name */}
      
            <div className="pt-5 mb-6 text-center">
      
              <p className="mb-2 text-sm tracking-[0.2em] text-neutral-500">
                ゆきいり  みゆう
              </p>
      
              <h1 className="text-4xl font-extralight">
                雪入 美優
              </h1>
      
            </div>
      
            {/* Content */}
      
            <div
              className="
                grid
                gap-8
                md:gap-16
                md:grid-cols-[4fr_6fr]
                md:items-start
              "
            >
      
              {/* Image */}
      
              <div>
      
                <div
                  className="
                    relative
                    aspect-[4/5]
                    w-full
                    max-w-md
                    overflow-hidden
                    rounded-2xl
                    mx-auto
                  "
                >
                  <Image
                    src="/images/profile/profile.jpg"
                    alt="雪入 美優"
                    fill
                    className="object-cover"
                  />
                </div>
      
              </div>
      
              {/* Right */}
      
              <div className="leading-8 text-neutral-700">
      
                <p>
                  長野県長野市出身。2002年生まれ。6歳よりピアノを始め、11歳より桐朋学園大学音楽学部附属「子供のための音楽教室」長野教室にて学ぶ。同時期にヴァイオリンを始める。
                </p>
      
                <br />
      
                <p>
                  諏訪交響楽団と小山賢治作曲ピアノ協奏曲を共演し、ソリストを務める。
                </p>
      
                <p>
                  長野県長野高等学校在学中に信州つばさプロジェクト芸術コースに選抜され、ウィーンへ短期留学。モーツァルトハウスにて演奏する。セシリア国際音楽コンクール高校生部門第3位。
                </p>
      
                <p>
                  大学在学中には長野桐朋会主催「夏の夕べのコンサート」に出演。桐朋学園大学音楽学部卒業後、同大学カレッジディプロマコースに在籍しながら、ヨーロッパ留学に向けた研鑽を積む。これまでに長野、東京、横浜にてソロリサイタルを開催。現在は東京・長野を中心にソロリサイタル、室内楽、伴奏等の演奏活動を行いながら、後進の指導にもあたっている。
                </p>
      
                <p>
                  2026年9月よりブリュッセル王立音楽院修士課程へ進学予定。
                </p>
      
                <br />
      
                <p>
                  これまでにピアノを小山香織、深沢雅美、玉置善己の各氏に師事。室内楽を島田彩乃氏に師事。
                </p>
      
              </div>
      
            </div>
      
          </section>

    </main>
  );
}