"use client";

import { useState } from "react";
import { sendContact } from "@/lib/contact/sendContact";


type FormData = {
  name: string;
  email: string;
  category: string;
  date: string;
  venue: string;
  duration: string;
  budget: string;
  message: string;
};


export default function PerformanceContactPage() {

  const [step, setStep] = useState<
    "form" | "confirm" | "complete"
  >("form");

  const [isSending, setIsSending] = useState(false);

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    category: "コンサート",
    date: "",
    venue: "",
    duration: "",
    budget: "",
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
    <main className="mx-auto max-w-3xl px_-8 py-28">


      <h1 className="mb-6 text-5xl font-extralight">
        演奏依頼について
      </h1>


      <p className="mb-12 leading-9 text-neutral-700">
        コンサート、イベント、学校や施設での演奏など、
        演奏依頼に関するお問い合わせはこちらからお願いいたします。
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
              ご依頼内容
            </label>


            <select
              value={formData.category}
              onChange={(e)=>
                updateField(
                  "category",
                  e.target.value
                )
              }
              className="w-full rounded-lg border border-neutral-300 p-4"
            >

              <option>
                コンサート
              </option>

              <option>
                イベント
              </option>

              <option>
                学校・教育施設
              </option>

              <option>
                施設演奏
              </option>

              <option>
                その他
              </option>

            </select>

          </div>



          <div>

            <label className="mb-2 block text-sm">
              希望日
            </label>

            <input
              value={formData.date}
              onChange={(e)=>
                updateField(
                  "date",
                  e.target.value
                )
              }
              placeholder="例：2027年4月頃"
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
              演奏時間
            </label>

            <input
              value={formData.duration}
              onChange={(e)=>
                updateField(
                  "duration",
                  e.target.value
                )
              }
              placeholder="例：60分"
              className="w-full rounded-lg border border-neutral-300 p-4"
            />

          </div>



          <div>

            <label className="mb-2 block text-sm">
              ご予算（任意）
            </label>

            <input
              value={formData.budget}
              onChange={(e)=>
                updateField(
                  "budget",
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
              内容：
              {formData.category}
            </p>

            <p>
              希望日：
              {formData.date}
            </p>

            <p>
              会場：
              {formData.venue}
            </p>

            <p>
              演奏時間：
              {formData.duration}
            </p>

            <p>
              ご予算：
              {formData.budget}
            </p>

            <p>
              詳細：
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