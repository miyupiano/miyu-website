import Image from "next/image";

export default function StudyAbroadPage() {
  return (
    <main>

      <section className="relative h-[55vh]">

        <Image
          src="/images/activities/study-abroad/hero.jpg"
          alt="留学支援"
          fill
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/40" />

        <div className="absolute inset-0 flex items-center justify-center">

          <h1 className="text-5xl font-extralight tracking-[0.15em] text-white">
            留学支援
          </h1>

        </div>

      </section>


      <section className="mx-auto max-w-4xl px-8 py-28 text-center">

        <h2 className="text-4xl font-extralight">
          Coming Soon
        </h2>

        <p className="mt-10 leading-9 text-neutral-600">
          留学支援ページは現在準備中です。
        </p>

      </section>

    </main>
  );
}