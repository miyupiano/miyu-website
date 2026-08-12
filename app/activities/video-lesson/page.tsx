// import Image from "next/image";
// import Button from "@/components/common/Button";

// export default function VideoLessonPage() {
//   return (
//     <main>

//       {/* Hero */}
//       <section className="relative h-[55vh]">

//         <Image
//           src="/images/activities/video-lesson/hero.jpg"
//           alt="動画添削レッスン"
//           fill
//           className="object-cover"
//         />

//         <div className="absolute inset-0 bg-black/40" />

//         <div className="absolute inset-0 flex items-center justify-center px-8">

//           <div className="text-center text-white">

//             <h1 className="text-5xl font-extralight tracking-[0.15em] md:text-6xl">
//               動画添削レッスン
//             </h1>

//             <p className="mt-8 leading-8">
//               独学ピアノの「これで合ってる？」を、
//               <br />
//               一緒に解決します。
//             </p>

//             <div className="mt-10">
//               <Button href="/contact/video-lesson">
//                 動画添削レッスンについて問い合わせる
//               </Button>
//             </div>

//           </div>

//         </div>

//       </section>



//       {/* Introduction */}

//       <section className="mx-auto max-w-4xl px-8 py-28">

//         <h2 className="text-4xl font-extralight">
//           演奏をより良くするための
//           <br />
//           個別フィードバック
//         </h2>

//         <p className="mt-10 leading-9 text-neutral-700">

//           ご自身で撮影した演奏動画と楽譜をもとに、
//           音楽的な表現や技術面について丁寧にアドバイスを行います。

//           <br /><br />

//           初心者の方には練習方法や楽譜の読み方から、
//           趣味で楽しむ方には演奏をさらに魅力的にするための視点を。

//           <br /><br />

//           コンクール・受験・演奏会準備など、
//           専門的に学ぶ方にも対応しています。

//         </p>

//       </section>




//       {/* Problems */}

//       <section className="bg-neutral-50">

//         <div className="mx-auto max-w-5xl px-8 py-24">

//           <h2 className="text-3xl font-light">
//             こんなお悩みありませんか？
//           </h2>

//           <div className="mt-10 space-y-5 leading-8 text-neutral-700">

//             <p>・練習しているけれど、この弾き方で合っているかわからない</p>
//             <p>・独学で何を練習したらよいかわからない</p>
//             <p>・もっと表現豊かに演奏したい</p>
//             <p>・自分では気づけない課題を知りたい</p>
//             <p>・発表会やコンクールに向けて演奏を深めたい</p>

//           </div>

//         </div>

//       </section>




//       {/* Target */}

//       <section className="mx-auto max-w-5xl px-8 py-28">

//         <h2 className="text-3xl font-light">
//           こんな方におすすめです
//         </h2>


//         <div className="mt-12 grid gap-10 md:grid-cols-3">


//           <div>
//             <h3 className="text-xl">
//               初心者の方
//             </h3>

//             <p className="mt-5 leading-8 text-neutral-600">
//               楽譜の読み方や練習方法など、
//               基礎から学びたい方へ。
//             </p>
//           </div>



//           <div>
//             <h3 className="text-xl">
//               趣味で楽しむ方
//             </h3>

//             <p className="mt-5 leading-8 text-neutral-600">
//               好きな曲をもっと素敵に弾きたい方、
//               客観的な意見がほしい方へ。
//             </p>
//           </div>



//           <div>
//             <h3 className="text-xl">
//               専門的に学ぶ方
//             </h3>

//             <p className="mt-5 leading-8 text-neutral-600">
//               コンクール、受験、演奏会準備など、
//               演奏をさらに深めたい方へ。
//             </p>
//           </div>


//         </div>

//       </section>




//       {/* Check points */}

//       <section className="bg-neutral-50">

//         <div className="mx-auto max-w-5xl px-8 py-24">

//           <h2 className="text-3xl font-light">
//             添削で確認するポイント
//           </h2>


//           <div className="mt-10 grid gap-4 md:grid-cols-2 text-neutral-700">

//             <p>・音色</p>
//             <p>・強弱</p>
//             <p>・フレージング</p>
//             <p>・アーティキュレーション</p>
//             <p>・リズム、テンポ</p>
//             <p>・ペダリング</p>
//             <p>・左右のバランス</p>
//             <p>・曲全体の流れ</p>
//             <p>・音楽的な表現</p>
//             <p>・練習方法、身体の使い方</p>

//           </div>

//         </div>

//       </section>




//       {/* Feedback */}

//       <section className="mx-auto max-w-5xl px-8 py-28">

//         <h2 className="text-3xl font-light">
//           楽譜への書き込みと
//           詳細なフィードバック
//         </h2>

//         <p className="mt-8 leading-9 text-neutral-700">

//           添削後は、

//           <br /><br />

//           ・楽譜への直接書き込み
//           <br />
//           ・文章による詳細なフィードバック

//           <br /><br />

//           をお送りします。

//           <br /><br />

//           次の練習で意識するポイントが明確になるよう、
//           具体的なアドバイスをお届けします。

//         </p>

//       </section>




//       {/* Flow */}

//       <section className="bg-neutral-50">

//         <div className="mx-auto max-w-5xl px-8 py-24">

//           <h2 className="text-3xl font-light">
//             ご利用の流れ
//           </h2>


//           <div className="mt-10 space-y-8">

//             {[
//               "申し込みフォームから申し込み",
//               "料金を銀行振込",
//               "演奏動画と楽譜を送付",
//               "演奏を確認し、添削",
//               "添削済み楽譜PDFとフィードバックを受け取る",
//             ].map((item,index)=>(

//               <div key={item}>

//                 <p className="text-sm tracking-widest text-neutral-400">
//                   STEP {index + 1}
//                 </p>

//                 <p className="mt-2 text-lg">
//                   {item}
//                 </p>

//               </div>

//             ))}

//           </div>

//         </div>

//       </section>




//       {/* Price */}

//       <section className="mx-auto max-w-4xl px-8 py-28 text-center">

//         <h2 className="text-3xl font-light">
//           料金
//         </h2>

//         <p className="mt-10 text-2xl">
//           動画添削レッスン
//         </p>

//         <p className="mt-4 text-4xl">
//           3,000円（税込）
//         </p>


//         <p className="mt-8 leading-8 text-neutral-600">

//           内容：
//           <br />
//           演奏動画確認
//           <br />
//           楽譜への書き込み
//           <br />
//           文章フィードバック

//           <br /><br />

//           基本：1曲、動画5分程度

//           <br />
//           ※内容によって相談可能です。

//         </p>

//       </section>




//       {/* Profile */}

//       <section className="bg-neutral-50">

//         <div className="mx-auto max-w-4xl px-8 py-24">

//           <h2 className="text-3xl font-light">
//             講師プロフィール
//           </h2>

//           <p className="mt-8 leading-9 text-neutral-700">

//             雪入 美優

//             <br /><br />

//             ピアニスト。
//             桐朋学園大学音楽学部ピアノ専攻卒業。

//             <br /><br />

//             国内外で演奏活動を行いながら、
//             一人ひとりの音楽性を大切にした指導を行っています。

//           </p>

//         </div>

//       </section>




//       {/* FAQ */}

//       <section className="mx-auto max-w-4xl px-8 py-28">

//         <h2 className="text-3xl font-light">
//           よくある質問
//         </h2>

//         <div className="mt-10 space-y-8 leading-8 text-neutral-700">

//           <p>
//             Q. 初心者でも利用できますか？
//             <br />
//             A. はい。基礎的な内容から対応しています。
//           </p>


//           <p>
//             Q. 動画はどのように送りますか？
//             <br />
//             A. YouTube限定公開、またはGoogle Driveをご利用いただけます。
//           </p>


//           <p>
//             Q. どんな曲でも可能ですか？
//             <br />
//             A. クラシック作品を中心に対応しています。
//           </p>

//         </div>

//       </section>




//       {/* CTA */}

//       <section className="pb-28 text-center">

//         <h2 className="text-3xl font-light">
//           あなたの演奏を、
//           <br />
//           次のステップへ。
//         </h2>

//         <div className="mt-10">

//           <Button href="/contact/video-lesson">
//             動画添削レッスンについて問い合わせる
//           </Button>

//         </div>

//       </section>


//     </main>
//   );
// }


import Image from "next/image";

export default function VideoLessonPage() {
  return (
    <main>


      {/* Hero */}

      <section className="relative h-[55vh]">

        <Image
          src="/images/activities/video-lesson/hero.jpg"
          alt="動画添削レッスン"
          fill
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/40" />


        <div className="absolute inset-0 flex items-center justify-center px-8">

          <div className="text-center text-white">


            <h1 className="text-5xl font-extralight tracking-[0.15em] md:text-6xl">
              動画添削レッスン
            </h1>


            <p className="mt-8 leading-8">

              独学ピアノの「これで合ってる？」を、
              <br />
              一緒に解決するレッスンを準備しています。

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

          動画添削レッスンページは現在準備中です。

          <br /><br />

          詳細ページを近日公開予定です。

        </p>


      </section>


    </main>
  );
}