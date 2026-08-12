// import Image from "next/image";
// import Button from "@/components/common/Button";

// export default function LessonPage() {
//   return (
//     <main>


//       {/* Hero */}

//       <section className="relative h-[55vh]">

//         <Image
//           src="/images/activities/lesson/hero.jpg"
//           alt="対面レッスン"
//           fill
//           className="object-cover"
//         />

//         <div className="absolute inset-0 bg-black/35" />


//         <div className="absolute inset-0 flex items-center justify-center">

//           <h1 className="text-6xl font-extralight tracking-[0.15em] text-white">
//             対面レッスン
//           </h1>

//         </div>

//       </section>



//       {/* Introduction */}

//       <section className="mx-auto max-w-4xl px-8 py-28">

//         <h2 className="mb-10 text-4xl font-extralight">
//           一人ひとりに寄り添うレッスン
//         </h2>


//         <p className="leading-9 text-neutral-700">

//           初心者の方から、より専門的にピアノを学びたい方まで、
//           それぞれの目標や個性に合わせたレッスンを行っています。

//           <br /><br />

//           技術的な向上だけではなく、
//           音楽を深く楽しみ、自分自身の表現を育てていくことを大切にしています。

//         </p>

//       </section>



//       {/* Content */}

//       <section className="mx-auto grid max-w-5xl gap-16 px-8 pb-28 md:grid-cols-3">


//         <div className="rounded-2xl border p-8">

//           <h3 className="mb-5 text-2xl font-light">
//             初心者の方
//           </h3>

//           <p className="leading-8 text-neutral-600">
//             基礎から丁寧に学び、
//             楽しくピアノを続けられることを大切にします。
//           </p>

//         </div>



//         <div className="rounded-2xl border p-8">

//           <h3 className="mb-5 text-2xl font-light">
//             経験者の方
//           </h3>

//           <p className="leading-8 text-neutral-600">
//             表現力や技術面をさらに磨き、
//             演奏の可能性を広げていきます。
//           </p>

//         </div>



//         <div className="rounded-2xl border p-8">

//           <h3 className="mb-5 text-2xl font-light">
//             音楽を深めたい方
//           </h3>

//           <p className="leading-8 text-neutral-600">
//             曲への理解や音楽的な表現を大切にした
//             レッスンを行います。
//           </p>

//         </div>


//       </section>



//       {/* Contact */}

//       <section className="pb-28 text-center">

//         <h2 className="mb-8 text-3xl font-light">
//           レッスンについてのお問い合わせ
//         </h2>


//         <Button
//           href="/contact/lesson"
//           className=""
//         >
//           お問い合わせはこちら
//         </Button>

//       </section>


//     </main>
//   );
// }

import Image from "next/image";

export default function LessonPage() {
  return (
    <main>


      {/* Hero */}

      <section className="relative h-[55vh]">

        <Image
          src="/images/activities/lesson/hero.jpg"
          alt="対面レッスン"
          fill
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/40" />


        <div className="absolute inset-0 flex items-center justify-center px-8">

          <div className="text-center text-white">

            <h1 className="text-5xl font-extralight tracking-[0.15em] md:text-6xl">
              対面レッスン
            </h1>


            <p className="mt-8 leading-8">

              一人ひとりの目標や個性に寄り添い、
              <br />
              音楽を深く楽しむためのレッスンを準備しています。

            </p>

          </div>

        </div>

      </section>




      {/* Coming Soon */}

      <section className="mx-auto max-w-4xl px-8 py-28 text-center">


        <h2 className="text-4xl font-extralight">
          Coming Soon
        </h2>



        <p className="mt-10 leading-9 text-neutral-600">

          対面レッスンページは現在準備中です。

          <br /><br />

          詳細ページを近日公開予定です。

        </p>


      </section>


    </main>
  );
}