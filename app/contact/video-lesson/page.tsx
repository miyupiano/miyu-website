"use client";

import { useState } from "react";
import { sendContact } from "@/lib/contact/sendContact";


type FormData = {
  name: string;
  email: string;
  age: string;
  experience: string;
  song: string;
  video: string;
  message: string;
};


export default function VideoLessonContactPage() {

  const [step, setStep] = useState<
    "form" | "confirm" | "complete"
  >("form");

  const [isSending, setIsSending] = useState(false);

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    age: "",
    experience: "初心者",
    song: "",
    video: "",
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
        動画添削レッスンについて
      </h1>


      <p className="mb-12 leading-9 text-neutral-700">
        演奏動画をもとにした添削レッスンについてのお問い合わせはこちらからお願いいたします。
      </p>



      {step === "form" && (

        <div className="space-y-8">


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



          <div>

            <label className="mb-2 block text-sm">
              添削希望曲
            </label>

            <input
              value={formData.song}
              onChange={(e) =>
                updateField("song", e.target.value)
              }
              placeholder="例：ショパン バラード第1番"
              className="w-full rounded-lg border border-neutral-300 p-4"
            />

          </div>



          <div>

            <label className="mb-2 block text-sm">
              演奏動画について
            </label>

            <textarea
              rows={4}
              value={formData.video}
              onChange={(e) =>
                updateField("video", e.target.value)
              }
              placeholder="動画の長さや提出方法など"
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
              曲目：
              {formData.song}
            </p>

            <p>
              動画：
              {formData.video}
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