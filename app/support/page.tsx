"use client";

import { useState } from "react";
import { sendContact } from "@/lib/contact/sendContact";
import Image from "next/image";
import Button from "@/components/common/Button";


export default function SupportPage() {
    type FormData = {
    name: string;
    email: string;
    amount: string;
    schedule: string;
    message: string;
  };

  const [step, setStep] = useState<"form" | "complete">("form");

  const [isSending, setIsSending] = useState(false);

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    amount: "",
    schedule: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
  });

  const updateField = (
    field: keyof FormData,
    value: string
  ) => {
    setFormData({
      ...formData,
      [field]: value,
    });
  };

  const validateForm = () => {
    const newErrors = {
      name: "",
      email: "",
    };

    if (!formData.name.trim()) {
      newErrors.name = "お名前を入力してください";
    }

    if (!formData.email.trim()) {
      newErrors.email = "メールアドレスを入力してください";
    }

    else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
    )

    setErrors(newErrors);

    return (
      !newErrors.name &&
      !newErrors.email
    );
  };

  const sendMail = async () => {
    setIsSending(true);

    try {
      await sendContact(formData);
      setStep("complete");
    } catch {
      alert("送信に失敗しました");
    } finally {
      setIsSending(false);
    }
  };


  return (
    <main>

      {/* Hero */}

      <section className="relative h-[70vh]">

        <Image
          src="/images/support/hero.jpg"
          alt="SUPPORT"
          fill
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/45" />

        <div className="absolute inset-0 flex items-center justify-center px-8">

          <div className="text-center text-white">

            <p
              className="
                text-sm
                tracking-[0.45em]
                uppercase
              "
            >
              SUPPORT
            </p>

            <h1
              className="
                mt-6
                text-3xl md:text-4xl 
                font-extralight
                leading-relaxed
                md:text-6xl
              "
            >
              2年間の音楽留学を
              <br />
              応援していただけませんか？
            </h1>

            <p
              className="
                mt-8
                text-lg
                tracking-[0.3em]
              "
            >
              2026.09 — 2028
            </p>

          </div>

        </div>

      </section>



      {/* Journey */}

      <section className="mx-auto max-w-7xl px-8 py-14 md:py-28">

        <div
          className="
            grid
            gap-16
            items-center
            md:grid-cols-2
          "
        >

          <div>

            <Image
              src="/images/support/journey.jpg"
              alt="ブリュッセルへの旅"
              width={900}
              height={1200}
              className="rounded-2xl object-cover"
            />

          </div>

          <div>

            <p
              className="
                text-sm
                tracking-[0.3em]
                text-neutral-400
              "
            >
              MY JOURNEY
            </p>

            <h2
              className="
                mt-4
                text-3xl md:text-4xl 
                font-extralight
              "
            >
              新しい音楽の旅へ
            </h2>

            <div
              className="
                mt-8
                space-y-7
                leading-9
                text-neutral-700
              "
            >

              <p>
                2026年9月より、ブリュッセル王立音楽院の修士課程で学びます。
              </p>

              <p>
                これまで日本で音楽を学び、演奏活動を続けてきた私にとって、ヨーロッパで音楽を学ぶことは、長く抱いてきた夢のひとつでした。
              </p>

              <p>
                これまでとは異なる環境でさまざまな音楽に触れ、多くの演奏家や学生と出会い、新しい視点から音楽と向き合う2年間にしたいと思っています。
              </p>

              <p>
                この場所でしか得られない経験を大切にし、演奏家としてさらに成長していきたいと思います。
              </p>

            </div>

          </div>

        </div>

      </section>
            {/* WHY SUPPORT */}

      <section className="bg-neutral-50">

        <div className="mx-auto max-w-7xl px-8 py-14 md:py-20">

          <div className="max-w-4xl">

            <p
              className="
                text-sm
                tracking-[0.3em]
                text-neutral-400
              "
            >
              WHY SUPPORT?
            </p>

            <h2
              className="
                mt-4
                text-3xl md:text-4xl 
                font-extralight
              "
            >
              この2年間を、
              <br />
              応援していただけたら嬉しいです
            </h2>

          </div>

          <div
            className="
              mt-8
              max-w-4xl
              space-y-7
              leading-9
              text-neutral-700
            "
          >

            <p>
              海外で音楽を学ぶためには、学費や生活費、練習・演奏活動にかかる費用など、さまざまな負担があります。
            </p>

            <p>
              私自身も演奏活動や仕事を続けながら、自分にできる限りの準備をしていきます。
            </p>

            <p>
              その一方で、この2年間の学びをより充実したものにするため、私の音楽活動を応援してくださる皆さまからのご支援を受け付けることにしました。
            </p>

            <p>
              大きなご支援だけでなく、少額でも、「応援したい」と思っていただけるお気持ちが何より励みになります。
            </p>

            <p>
              皆さまからいただいた応援を力に変えて、ベルギーでの学びを演奏という形で皆さまへお届けできるよう、一日一日を大切に過ごしていきます。
            </p>

          </div>

        </div>

      </section>



      {/* THANK YOU */}

      <section className="mx-auto max-w-7xl px-8 py-14 md:py-20">

        <p
          className="
            text-sm
            tracking-[0.3em]
            text-neutral-400
          "
        >
          THANK YOU
        </p>

        <h2
          className="
            mt-4
            text-3xl md:text-4xl 
            font-extralight
          "
        >
          ご支援くださった皆さまへ
        </h2>

        <p
          className="
            mt-8
            max-w-4xl
            leading-9
            text-neutral-700
          "
        >
          ご支援は「何かを購入する」というものではなく、ベルギーでの2年間を一緒に見守ってくださる皆さまへの感謝の気持ちとして、ささやかなお礼をご用意しております。
        </p>
                <div
          className="
            mt-8 md:mt-12
            grid
            gap-8
            md:grid-cols-2
          "
        >

          <div className="rounded-2xl border border-neutral-200 bg-white p-6">

            <p className="text-sm tracking-[0.2em] text-neutral-400">
              BENEFIT 01
            </p>

            <h3 className="mt-4 text-2xl font-light">
              ブリュッセル音楽便り
            </h3>

            <p className="mt-6 leading-8 text-neutral-700">
              月に一度ほど、ブリュッセルでの音楽活動や暮らしの様子、レッスンや演奏会、日々感じたことなどを写真とともにメールでお届けします。
            </p>

          </div>

          <div className="rounded-2xl border border-neutral-200 bg-white p-6">

            <p className="text-sm tracking-[0.2em] text-neutral-400">
              BENEFIT 02
            </p>

            <h3 className="mt-4 text-2xl font-light">
              演奏会の先行案内
            </h3>

            <p className="mt-6 leading-8 text-neutral-700">
              日本へ帰国後に開催する演奏会について、一般公開に先駆けてご案内いたします。
            </p>

          </div>

          <div className="rounded-2xl border border-neutral-200 bg-white p-6">

            <p className="text-sm tracking-[0.2em] text-neutral-400">
              BENEFIT 03
            </p>

            <h3 className="mt-4 text-2xl font-light">
              サイン入りポストカード
            </h3>

            <p className="mt-6 leading-8 text-neutral-700">
              ブリュッセルから、感謝の気持ちを込めたサイン入りポストカードをお送りします。
            </p>

          </div>

          <div className="rounded-2xl border border-neutral-200 bg-white p-6">

            <p className="text-sm tracking-[0.2em] text-neutral-400">
              BENEFIT 04
            </p>

            <h3 className="mt-4 text-2xl font-light">
              限定公開動画
            </h3>

            <p className="mt-6 leading-8 text-neutral-700">
              演奏の様子や学校生活、練習風景など、ベルギーでの2年間の一部を限定公開動画でお届けします。
            </p>

            <p className="mt-4 text-sm leading-7 text-neutral-500">
              ※学校やレッスン等で撮影する場合は、許可の範囲内で公開いたします。
            </p>

          </div>

        </div>

      </section>
            {/* BRUSSELS MUSIC LETTER */}

      <section className="bg-neutral-50">

        <div className="mx-auto max-w-7xl px-8 py-14 md:py-20">

          <div
            className="
              grid
              items-center
              gap-10 md:gap-20
              md:grid-cols-2
            "
          >

            {/* Image */}

            <div>

              <Image
                src="/images/support/music-letter.jpg"
                alt="ブリュッセル音楽便り"
                width={900}
                height={1200}
                className="rounded-2xl object-cover shadow-sm"
              />

            </div>

            {/* Text */}

            <div>

              <p
                className="
                  text-sm
                  tracking-[0.3em]
                  text-neutral-400
                "
              >
                BRUSSELS MUSIC LETTER
              </p>

              <h2
                className="
                  mt-4
                  text-3xl md:text-4xl 
                  font-extralight
                "
              >
                ブリュッセル音楽便り
              </h2>

              <p
                className="
                  mt-8
                  leading-5
                  text-neutral-700
                "
              >
                月に一度ほど、ブリュッセルでの音楽や暮らしの様子をメールでお届けします。
              </p>

              <p
                className="
                  mt-6
                  leading-5
                  text-neutral-700
                "
              >
                レッスンや練習、演奏会、学校での出来事、街で出会った音楽、日々の生活の中で感じたことなど、写真とともにお伝えします。
              </p>

              <p
                className="
                  mt-6
                  leading-5
                  text-neutral-700
                "
              >
                応援してくださる皆さまと、遠く離れたブリュッセルでの2年間を少しでも共有できたら嬉しいです。
              </p>

              <div
                className="
                  mt-8
                  rounded-2xl
                  border
                  border-neutral-200
                  bg-white
                  p-8
                "
              >

                <p className="text-sm tracking-[0.2em] text-neutral-400">
                  Monthly Contents
                </p>

                <ul
                  className="
                    mt-5
                    space-y-3
                    leading-6
                    text-neutral-700
                  "
                >

                  <li>・レッスンや練習の日々</li>

                  <li>・演奏会・コンサート情報</li>

                  <li>・ブリュッセルで出会った音楽</li>

                  <li>・街や暮らしの様子</li>

                  <li>・写真と近況報告</li>

                </ul>

              </div>

            </div>

          </div>

        </div>

      </section>
      
      {/* SUPPORT PLAN */}

      <section className="mx-auto max-w-7xl px-8 py-18">

        <p
          className="
            text-sm
            tracking-[0.3em]
            text-neutral-400
          "
        >
          SUPPORT PLAN
        </p>

        <h2
          className="
            mt-4
            text-3xl md:text-4xl 
            font-extralight
          "
        >
          ご支援について
        </h2>

        <p
          className="
            mt-8
            max-w-3xl
            leading-9
            text-neutral-700
          "
        >
          ご支援金額に応じて、
          下記のお礼をご用意しております。
        </p>


        <div className="hidden md:block mt-8 md:mt-12 overflow-x-auto">

          <table className="w-full overflow-hidden rounded-2xl border border-neutral-200">

            <thead className="bg-neutral-50">

              <tr>

                <th className="w-48 px-8 py-3 text-left text-sm font-normal text-neutral-500">
                  ご支援金額
                </th>

                <th className="px-6 py-3 text-center text-sm font-normal text-neutral-500">
                  📩<br />
                  音楽便り
                </th>

                <th className="px-6 py-3 text-center text-sm font-normal text-neutral-500">
                  🎵<br />
                  先行案内
                </th>

                <th className="px-6 py-3 text-center text-sm font-normal text-neutral-500">
                  💌<br />
                  ポストカード
                </th>

                <th className="px-6 py-3 text-center text-sm font-normal text-neutral-500">
                  🎥<br />
                  限定動画
                </th>

              </tr>

            </thead>

            <tbody>

              <tr className="border-t border-neutral-200">

                <td className="px-8 py-4 text-lg font-light">
                  ¥1,000〜
                </td>

                <td className="text-center text-2xl text-rose-400">
                  ♡
                </td>

                <td />
                <td />
                <td />

              </tr>

              <tr className="border-t border-neutral-200">

                <td className="px-8 py-4 text-lg font-light">
                  ¥3,000〜
                </td>

                <td className="text-center text-2xl text-rose-400">
                  ♡
                </td>

                <td className="text-center text-2xl text-rose-400">
                  ♡
                </td>

                <td />
                <td />

              </tr>

              <tr className="border-t border-neutral-200">

                <td className="px-8 py-4 text-lg font-light">
                  ¥5,000〜
                </td>

                <td className="text-center text-2xl text-rose-400">
                  ♡
                </td>

                <td className="text-center text-2xl text-rose-400">
                  ♡
                </td>

                <td className="text-center text-2xl text-rose-400">
                  ♡
                </td>

                <td />

              </tr>

              <tr className="border-t border-neutral-200">

                <td className="px-8 py-4 text-lg font-light">
                  ¥10,000〜
                </td>

                <td className="text-center text-2xl text-rose-400">
                  ♡
                </td>

                <td className="text-center text-2xl text-rose-400">
                  ♡
                </td>

                <td className="text-center text-2xl text-rose-400">
                  ♡
                </td>

                <td className="text-center text-2xl text-rose-400">
                  ♡
                </td>

              </tr>

            </tbody>

          </table>

        </div>

        <div className="mt-8 space-y-5 md:hidden">

          <div className="rounded-2xl border border-neutral-200 bg-white p-6">
            <h3 className="text-xl font-light">¥1,000〜</h3>

            <ul className="mt-4 space-y-2 text-neutral-700">
              <li>♡ ブリュッセル音楽便り</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-neutral-200 bg-white p-6">
            <h3 className="text-xl font-light">¥3,000〜</h3>

            <ul className="mt-4 space-y-2 text-neutral-700">
              <li>♡ ブリュッセル音楽便り</li>
              <li>♡ 演奏会の先行案内</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-neutral-200 bg-white p-6">
            <h3 className="text-xl font-light">¥5,000〜</h3>

            <ul className="mt-4 space-y-2 text-neutral-700">
              <li>♡ ブリュッセル音楽便り</li>
              <li>♡ 演奏会の先行案内</li>
              <li>♡ サイン入りポストカード</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-neutral-200 bg-white p-6">
            <h3 className="text-xl font-light">¥10,000〜</h3>

            <ul className="mt-4 space-y-2 text-neutral-700">
              <li>♡ ブリュッセル音楽便り</li>
              <li>♡ 演奏会の先行案内</li>
              <li>♡ サイン入りポストカード</li>
              <li>♡ 限定公開動画</li>
            </ul>
          </div>

        </div>

      </section>
            {/* SUPPORT FORM */}

      <section className="mx-auto max-w-3xl px-8 py-14 md:py-20">

        <p
          className="
            text-sm
            tracking-[0.3em]
            text-neutral-400
          "
        >
          SUPPORT
        </p>

        <h2
          className="
            mt-4
            text-3xl md:text-4xl 
            font-extralight
          "
        >
          ご支援のお申し込み
        </h2>

        <p
          className="
            mt-8
            leading-9
            text-neutral-700
          "
        >
          ご支援をご希望くださる方は、下記フォームよりお申し込みください。お申し込み後、振込先口座をご案内いたします。
        </p>



        {step === "form" && (

          <div className="mt-10 md:mt-16 space-y-8">

            <div>

              <label className="mb-2 block text-sm">
                お名前
              </label>

              <input
                value={formData.name}
                onChange={(e) =>
                  updateField("name", e.target.value)
                }
                className="w-full rounded-lg border border-neutral-300 p-4"
              />

              {errors.name && (
                <p className="mt-2 text-sm text-red-500">
                  {errors.name}
                </p>
              )}

              {errors.name && (
                <p className="mt-2 text-sm text-red-500">
                  {errors.name}
                </p>
              )}

            </div>

            <div>

              <label className="mb-2 block text-sm">
                メールアドレス
              </label>

              <input
                type="email"
                value={formData.email}
                onChange={(e) =>
                  updateField("email", e.target.value)
                }
                className="w-full rounded-lg border border-neutral-300 p-4"
              />

              {errors.email && (
                <p className="mt-2 text-sm text-red-500">
                  {errors.email}
                </p>
              )}

            </div>

            <div>

              <label className="mb-2 block text-sm">
                ご支援金額
              </label>

              <select
                value={formData.amount}
                onChange={(e) =>
                  updateField("amount", e.target.value)
                }
                className="w-full rounded-lg border border-neutral-300 p-4"
              >

                <option>¥1,000〜</option>
                <option>¥3,000〜</option>
                <option>¥5,000〜</option>
                <option>¥10,000〜</option>
                <option>その他</option>

              </select>

            </div>

            <div>

              <label className="mb-2 block text-sm">
                振込予定日（任意）
              </label>

              <input
                value={formData.schedule}
                onChange={(e) =>
                  updateField("schedule", e.target.value)
                }
                placeholder="例：2026年10月頃"
                className="w-full rounded-lg border border-neutral-300 p-4"
              />

            </div>

            <div>

              <label className="mb-2 block text-sm">
                メッセージ（任意）
              </label>

              <textarea
                rows={7}
                value={formData.message}
                onChange={(e) =>
                  updateField("message", e.target.value)
                }
                className="w-full rounded-lg border border-neutral-300 p-4"
              />

            </div>


            <div className="flex justify-center">
              <Button
                onClick={async () => {
                  if (!validateForm()) return;
                  await sendMail();
                }}
                className="mx-auto"
              >
                {isSending ? "送信中..." : "お申し込み"}
              </Button>
            </div>          
          </div>
        )}

        {step === "complete" && (
          <div className="py-12 text-center">

            <h2 className="text-3xl font-light">
              お申し込みありがとうございます
            </h2>

            <p className="mt-6 leading-8 text-neutral-600">
              内容を確認のうえ、
              振込先口座をご案内いたします。
            </p>

          </div>
        )}

      </section>

      {/* THANK YOU */}

      <section className="mx-auto overflow-x-auto px-8 pb-14 md:pb-20 text-center">

        <p
          className="
            text-sm
            tracking-[0.3em]
            text-neutral-400
          "
        >
          THANK YOU
        </p>

        <h2
          className="
            mt-4
            text-3xl md:text-4xl 
            font-extralight
          "
        >
          最後までご覧いただき、ありがとうございます
        </h2>

        <div
          className="
            mx-auto
            mt-8 md:mt-12
            max-w-4xl
            space-y-8
            leading-9
            text-neutral-700
          "
        >

          <p>
            ベルギーでの2年間は、演奏家として大きく成長するための大切な挑戦になります。
          </p>

          <p>
            皆さまからいただいた応援を力に、日々学び、多くの経験を積み重ね、音楽で恩返しができるよう歩んでまいります。
          </p>

          <p>
            留学中の様子や演奏活動は、ホームページやSNS、「ブリュッセル音楽便り」を通して発信していきます。
          </p>

          <p>
            応援していただけましたら嬉しいです。
          </p>

          <div className="pt-10">

            <p
              className="
                text-lg
                font-light
                tracking-[0.2em]
              "
            >
              Miyu Yukiiri
            </p>

          </div>

        </div>

      </section>

    </main>
  );
}