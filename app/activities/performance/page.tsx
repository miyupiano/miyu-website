// import Image from "next/image";
// import Button from "@/components/common/Button";

// export default function PerformanceRequestPage() {
//   return (
//     <main>

//       <section className="relative h-[55vh]">

//         <Image
//           src="/images/activities/performance/hero.jpg"
//           alt="演奏依頼"
//           fill
//           className="object-cover"
//         />

//         <div className="absolute inset-0 bg-black/35" />


//         <div className="absolute inset-0 flex items-center justify-center">

//           <h1 className="text-6xl font-extralight tracking-[0.15em] text-white">
//             演奏依頼
//           </h1>

//         </div>

//       </section>



//       <section className="mx-auto max-w-4xl px-8 pt-26">

//         <h2 className="mb-10 text-4xl font-extralight">
//           心に残る音楽の時間を
//         </h2>


//         <p className="leading-9 text-neutral-700">

//           コンサート、イベント、学校、施設など、
//           様々な場での演奏依頼を承っています。

//           <br /><br />

//           空間や目的に合わせたプログラムをご提案し、
//           音楽を通した時間をお届けします。

//         </p>

//       </section>



//       <section className="mx-auto max-w-5xl px-8 pb-28">

//         <h2 className="mb-8 text-3xl font-light">
//           対応例
//         </h2>


//         <ul className="space-y-4 leading-8 text-neutral-700">

//           <li>
//             ・ホールコンサート
//           </li>

//           <li>
//             ・学校、教育施設での演奏
//           </li>

//           <li>
//             ・イベントや記念日の演奏
//           </li>

//         </ul>

//       </section>



//       <section className="pb-28 text-center">

//         <Button
//           href="/contact/performance"
//           className=""
//         >
//           演奏依頼について問い合わせる
//         </Button>

//       </section>


//     </main>
//   );
// }


import Image from "next/image";

export default function PerformanceRequestPage() {
  return (
    <main>


      {/* Hero */}

      <section className="relative h-[55vh]">

        <Image
          src="/images/activities/performance/hero.jpg"
          alt="演奏依頼"
          fill
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/40" />


        <div className="absolute inset-0 flex items-center justify-center px-8">

          <div className="text-center text-white">

            <h1 className="text-5xl font-extralight tracking-[0.15em] md:text-6xl">
              演奏依頼
            </h1>


            <p className="mt-8 leading-8">

              心に残る音楽の時間を届けるため、
              <br />
              演奏依頼ページを準備しています。

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

          演奏依頼ページは現在準備中です。

          <br /><br />

          詳細ページを近日公開予定です。

        </p>


      </section>


    </main>
  );
}