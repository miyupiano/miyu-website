"use client";

import { useState } from "react";
import { sendContact } from "@/lib/contact/sendContact";


type FormData = {
  name: string;
  email: string;
  age: string;
  experience: string;
  style: string;
  frequency: string;
  message: string;
};


export default function LessonContactPage() {

  const [step, setStep] = useState<
    "form" | "confirm" | "complete"
  >("form");

  const [isSending, setIsSending] = useState(false);


  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    age: "",
    experience: "初心者",
    style: "対面",
    frequency: "",
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
      newErrors.name = "お名前を入力してください";
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
        レッスンについて
      </h1>


      <p className="mb-12 leading-9 text-neutral-700">
        ピアノレッスンに関するお問い合わせはこちらからお願いいたします。
        ご希望やご経験に合わせてご相談ください。
      </p>



      {/* 入力画面 */}

      {step === "form" && (

        <div className="space-y-8">


          {/* 名前 */}

          <div>

            <label className="mb-2 block text-sm">
              お名前
            </label>


            <input
              value={formData.name}
              onChange={(e) =>
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



          {/* メール */}

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
              className="w-full rounded-lg border border-neutral-300 p-4 outline-none focus:border-black"
            />


            {errors.email && (
              <p className="mt-2 text-sm text-red-500">
                {errors.email}
              </p>
            )}

          </div>



          {/* 年齢 */}

          <div>

            <label className="mb-2 block text-sm">
              年齢
            </label>


            <input
              value={formData.age}
              onChange={(e) =>
                updateField("age", e.target.value)
              }
              className="w-full rounded-lg border border-neutral-300 p-4"
            />

          </div>



          {/* 経験 */}

          <div>

            <label className="mb-2 block text-sm">
              ピアノ経験
            </label>


            <select
              value={formData.experience}
              onChange={(e) =>
                updateField(
                  "experience",
                  e.target.value
                )
              }
              className="w-full rounded-lg border border-neutral-300 p-4"
            >

              <option>未経験</option>
              <option>初心者</option>
              <option>経験あり</option>

            </select>

          </div>



          {/* 形式 */}

          <div>

            <label className="mb-2 block text-sm">
              希望レッスン形式
            </label>


            <select
              value={formData.style}
              onChange={(e) =>
                updateField(
                  "style",
                  e.target.value
                )
              }
              className="w-full rounded-lg border border-neutral-300 p-4"
            >

              <option>対面</option>
              <option>オンライン相談</option>

            </select>

          </div>



          {/* 頻度 */}

          <div>

            <label className="mb-2 block text-sm">
              希望頻度
            </label>


            <input
              value={formData.frequency}
              onChange={(e) =>
                updateField(
                  "frequency",
                  e.target.value
                )
              }
              placeholder="例：月2回、週1回など"
              className="w-full rounded-lg border border-neutral-300 p-4"
            />

          </div>



          {/* 内容 */}

          <div>

            <label className="mb-2 block text-sm">
              お問い合わせ内容
            </label>


            <textarea
              rows={8}
              value={formData.message}
              onChange={(e) =>
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
            onClick={() => {
              if (validateForm()) {
                setStep("confirm");
              }
            }}
            className="mx-auto block cursor-pointer rounded-full border border-black px-8 py-4 transition hover:bg-black hover:text-white"
          >
            確認する
          </button>


        </div>

      )}



      {/* 確認画面 */}

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
              年齢：
              {formData.age}
            </p>


            <p>
              経験：
              {formData.experience}
            </p>


            <p>
              形式：
              {formData.style}
            </p>


            <p>
              頻度：
              {formData.frequency}
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



      {/* 完了画面 */}

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