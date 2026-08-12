"use client";

import { useState } from "react";

type Concert = {
  title: string;
  date: string;
  time?: string;
  venue: string;
  price: string;
};

type Props = {
  concert: Concert;
  onClose: () => void;
};


type FormData = {
  name: string;
  email: string;
  number: string;
  message: string;
};


export default function ConcertApplyModal({
  concert,
  onClose,
}: Props) {

  const [step, setStep] = useState<
    "form" | "confirm" | "complete"
  >("form");


  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    number: "1名",
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
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
    ) {
      newErrors.email =
        "メールアドレスの形式をご確認ください";
    }


    setErrors(newErrors);


    return (
      !newErrors.name &&
      !newErrors.email
    );
  };

  const handleSubmit = async () => {

    try {

      const response = await fetch(
        "/api/contact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ...formData,

            category: "演奏会申し込み",

            concertTitle: concert.title,
            concertDate: concert.date,
            concertTime: concert.time,
            concertVenue: concert.venue,
            concertPrice: concert.price,
          }),
        }
      );


      if (!response.ok) {
        throw new Error("送信失敗");
      }


      setStep("complete");


    } catch (error) {

      console.error(error);

      alert(
        "送信に失敗しました。時間をおいて再度お試しください。"
      );

    }

  };


  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-6"
      onClick={onClose}
    >

      <div
        className="relative max-h-[90vh] w-full max-w-xl overflow-y-auto rounded-2xl bg-white p-8"
        onClick={(e) => e.stopPropagation()}
      >

        <button
          onClick={onClose}
          className="absolute right-6 top-5 cursor-pointer text-2xl text-neutral-400 hover:text-black"
        >
          ×
        </button>


        {/* 入力画面 */}

        {step === "form" && (

          <>

            <h2 className="text-2xl font-light">
              お申し込み
            </h2>


            <div className="mt-6 space-y-2 text-neutral-600">

              <p>
                {concert.title}
              </p>

              <p>
                {concert.date}
                {concert.time && ` ${concert.time}`}
              </p>

              <p>
                {concert.venue}
              </p>

              <p>
                {concert.price}
              </p>

            </div>



            <div className="mt-10 space-y-6">


              <div>

                <label className="mb-2 block text-sm">
                  お名前
                </label>

                <input
                  value={formData.name}
                  onChange={(e) =>
                    updateField("name", e.target.value)
                  }
                  className="w-full rounded-lg border border-neutral-300 p-3 outline-none focus:border-black"
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
                  className="w-full rounded-lg border border-neutral-300 p-3 outline-none focus:border-black"
                />


                {errors.email && (
                  <p className="mt-2 text-sm text-red-500">
                    {errors.email}
                  </p>
                )}

              </div>



              <div>

                <label className="mb-2 block text-sm">
                  人数
                </label>

                <select
                  value={formData.number}
                  onChange={(e) =>
                    updateField("number", e.target.value)
                  }
                  className="w-full rounded-lg border border-neutral-300 p-3"
                >
                  <option>1名</option>
                  <option>2名</option>
                  <option>3名</option>
                  <option>4名以上</option>
                </select>

              </div>



              <div>

                <label className="mb-2 block text-sm">
                  備考
                </label>

                <textarea
                  rows={4}
                  value={formData.message}
                  onChange={(e) =>
                    updateField("message", e.target.value)
                  }
                  className="w-full rounded-lg border border-neutral-300 p-3"
                />

              </div>



              <div className="flex justify-center">

                <button
                  onClick={() => {
                    if (validateForm()) {
                      setStep("confirm");
                    }
                  }}
                  className="
                    cursor-pointer
                    rounded-full
                    bg-black
                    px-8
                    py-3
                    text-white
                    transition
                    hover:opacity-70
                  "
                >
                  確認する
                </button>

              </div>


            </div>

          </>

        )}



        {/* 確認画面 */}

        {step === "confirm" && (

          <>

            <h2 className="text-2xl font-light">
              内容確認
            </h2>


            <div className="mt-8 space-y-4 leading-8">

              <p>
                演奏会：
                {concert.title}
              </p>

              <p>
                日時：
                {concert.date}
                {concert.time && ` ${concert.time}`}
              </p>

              <p>
                会場：
                {concert.venue}
              </p>

              <p>
                料金：
                {concert.price}
              </p>


              <hr />


              <p>
                お名前：
                {formData.name}
              </p>

              <p>
                メール：
                {formData.email}
              </p>

              <p>
                人数：
                {formData.number}
              </p>

              <p>
                備考：
                {formData.message}
              </p>

            </div>



            <div className="mt-10 flex justify-center gap-4">

              <button
                onClick={() => setStep("form")}
                className="cursor-pointer rounded-full border border-neutral-300 px-8 py-3 text-neutral-600 transition hover:bg-neutral-100"
              >
                戻る
              </button>


              <button
                onClick={handleSubmit}
                className="cursor-pointer rounded-full bg-black px-8 py-3 text-white transition hover:opacity-70"
              >
                送信する
              </button>

            </div>

          </>

        )}



        {/* 完了画面 */}

        {step === "complete" && (

          <div className="py-10 text-center">

            <h2 className="text-2xl font-light">
              お申し込みありがとうございます
            </h2>


            <p className="mt-6 leading-8 text-neutral-600">
              内容を確認の上、改めてご連絡いたします。
            </p>


            <button
              onClick={onClose}
              className="mt-10 cursor-pointer rounded-full border border-neutral-300 px-8 py-3 text-neutral-600 transition hover:bg-neutral-100"
            >
              閉じる
            </button>

          </div>

        )}

      </div>

    </div>
  );
}