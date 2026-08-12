"use client";

import { useState } from "react";
import { sendContact } from "@/lib/contact/sendContact";


type FormData = {
  name: string;
  email: string;
  instrument: string;
  piece: string;
  composer: string;
  date: string;
  rehearsal: string;
  venue: string;
  message: string;
};


export default function AccompanimentContactPage() {

  const [step, setStep] = useState<
    "form" | "confirm" | "complete"
  >("form");

  const [isSending, setIsSending] = useState(false);


  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    instrument: "",
    piece: "",
    composer: "",
    date: "",
    rehearsal: "",
    venue: "",
    message: "",
  });


  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
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
      message: "",
    };


    if (!formData.name.trim()) {
      newErrors.name =
        "お名前を入力してください";
    }


    if (!formData.email.trim()) {

      newErrors.email =
        "メールアドレスを入力してください";

    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
    ) {

      newErrors.email =
        "メールアドレスの形式をご確認ください";

    }


    if (!formData.message.trim()) {

      newErrors.message =
        "お問い合わせ内容を入力してください";

    }


    setErrors(newErrors);


    return (
      !newErrors.name &&
      !newErrors.email &&
      !newErrors.message
    );

  };

  const sendMail = async () => {
    setIsSending(true);

    try {
      await sendContact(formData);
      setStep("complete");

    } catch (error) {
      alert("送信に失敗しました。");
      console.error(error);

    } finally {
      setIsSending(false);
    }
  };


  return (
    <main className="mx-auto max-w-3xl px-8 py-28">


      <h1 className="mb-6 text-5xl font-extralight">
        伴奏依頼について
      </h1>


      <p className="mb-12 leading-9 text-neutral-700">
        コンクール、試験、演奏会などの伴奏依頼はこちらからお願いいたします。
        曲目や本番日など、分かる範囲でご入力ください。
      </p>



      {step === "form" && (

        <div className="space-y-8">


          <div>

            <label className="mb-2 block text-sm">
              お名前
            </label>

            <input
              value={formData.name}
              onChange={(e)=>
                updateField("name", e.target.value)
              }
              className="w-full rounded-lg border border-neutral-300 p-4 outline-none focus:border-black"
            />

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
              onChange={(e)=>
                updateField("email", e.target.value)
              }
              className="w-full rounded-lg border border-neutral-300 p-4 outline-none focus:border-black"
            />

            {errors.email && (
              <p className="mt-2 text-sm text-red-500">
                {errors.email}
              </p>
            )}

          </div>



          <div>

            <label className="mb-2 block text-sm">
              楽器・声種
            </label>

            <input
              value={formData.instrument}
              onChange={(e)=>
                updateField(
                  "instrument",
                  e.target.value
                )
              }
              placeholder="例：ヴァイオリン、声楽（ソプラノ）"
              className="w-full rounded-lg border border-neutral-300 p-4"
            />

          </div>



          <div>

            <label className="mb-2 block text-sm">
              曲目
            </label>

            <input
              value={formData.piece}
              onChange={(e)=>
                updateField(
                  "piece",
                  e.target.value
                )
              }
              className="w-full rounded-lg border border-neutral-300 p-4"
            />

          </div>



          <div>

            <label className="mb-2 block text-sm">
              作曲者
            </label>

            <input
              value={formData.composer}
              onChange={(e)=>
                updateField(
                  "composer",
                  e.target.value
                )
              }
              className="w-full rounded-lg border border-neutral-300 p-4"
            />

          </div>



          <div>

            <label className="mb-2 block text-sm">
              本番日
            </label>

            <input
              value={formData.date}
              onChange={(e)=>
                updateField(
                  "date",
                  e.target.value
                )
              }
              placeholder="例：2027年5月10日"
              className="w-full rounded-lg border border-neutral-300 p-4"
            />

          </div>



          <div>

            <label className="mb-2 block text-sm">
              希望リハーサル日
            </label>

            <input
              value={formData.rehearsal}
              onChange={(e)=>
                updateField(
                  "rehearsal",
                  e.target.value
                )
              }
              className="w-full rounded-lg border border-neutral-300 p-4"
            />

          </div>



          <div>

            <label className="mb-2 block text-sm">
              会場
            </label>

            <input
              value={formData.venue}
              onChange={(e)=>
                updateField(
                  "venue",
                  e.target.value
                )
              }
              className="w-full rounded-lg border border-neutral-300 p-4"
            />

          </div>



          <div>

            <label className="mb-2 block text-sm">
              お問い合わせ内容
            </label>

            <textarea
              rows={8}
              value={formData.message}
              onChange={(e)=>
                updateField(
                  "message",
                  e.target.value
                )
              }
              className="w-full rounded-lg border border-neutral-300 p-4"
            />


            {errors.message && (
              <p className="mt-2 text-sm text-red-500">
                {errors.message}
              </p>
            )}

          </div>



          <button
            onClick={()=>{
              if(validateForm()){
                setStep("confirm");
              }
            }}
            className="mx-auto block cursor-pointer rounded-full border border-black px-8 py-4 transition hover:bg-black hover:text-white"
          >
            確認する
          </button>


        </div>

      )}



      {step === "confirm" && (

        <div>


          <h2 className="text-2xl font-light">
            内容確認
          </h2>


          <div className="mt-10 space-y-5 leading-8">


            <p>
              お名前：
              {formData.name}
            </p>


            <p>
              メール：
              {formData.email}
            </p>


            <p>
              楽器・声種：
              {formData.instrument}
            </p>


            <p>
              曲目：
              {formData.piece}
            </p>


            <p>
              作曲者：
              {formData.composer}
            </p>


            <p>
              本番日：
              {formData.date}
            </p>


            <p>
              リハーサル：
              {formData.rehearsal}
            </p>


            <p>
              会場：
              {formData.venue}
            </p>


            <p>
              内容：
              {formData.message}
            </p>


          </div>



          <div className="mt-10 flex justify-center gap-4">


            <button
              onClick={() => setStep("form")}
              className="cursor-pointer rounded-full border border-neutral-300 px-8 py-4 text-neutral-600 transition hover:bg-neutral-100"
            >
              戻る
            </button>


            <button
              onClick={sendMail}
              disabled={isSending}
              className="cursor-pointer rounded-full bg-black px-8 py-4 text-white transition hover:opacity-70 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {isSending ? "送信中..." : "送信する"}
            </button>


          </div>


        </div>

      )}



      {step === "complete" && (

        <div className="py-10">

          <h2 className="text-2xl font-light">
            お問い合わせありがとうございます
          </h2>


          <p className="mt-6 leading-8 text-neutral-600">
            内容を確認の上、改めてご連絡いたします。
          </p>


        </div>

      )}


    </main>
  );
}