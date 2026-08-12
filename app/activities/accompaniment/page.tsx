// 


import Image from "next/image";

export default function AccompanimentPage() {
  return (
    <main>

      <section className="relative h-[55vh]">

        <Image
          src="/images/activities/accompaniment/hero.jpg"
          alt="伴奏依頼"
          fill
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/40" />


        <div className="absolute inset-0 flex items-center justify-center px-8">

          <div className="text-center text-white">

            <h1 className="text-5xl font-extralight tracking-[0.15em] md:text-6xl">
              伴奏依頼
            </h1>


            <p className="mt-8 leading-8">

              共演者の音楽を支え、
              <br />
              ともに音楽を作り上げる伴奏を目指しています。

            </p>

          </div>

        </div>

      </section>



      <section className="mx-auto max-w-4xl px-8 py-28 text-center">

        <h2 className="text-4xl font-extralight">

          Coming Soon

        </h2>


        <p className="mt-10 leading-9 text-neutral-600">

          伴奏依頼ページは現在準備中です。

          <br /><br />

          詳細ページを近日公開予定です。

        </p>


      </section>


    </main>
  );
}