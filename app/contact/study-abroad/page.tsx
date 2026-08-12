"use client";

import { useState } from "react";
import { sendContact } from "@/lib/contact/sendContact";


type FormData = {
  name: string;
  email: string;
  status: string;
  destination: string;
  timing: string;
  message: string;
};


export default function StudyAbroadContactPage() {

  const [step, setStep] = useState<
    "form" | "confirm" | "complete"
  >("form");

  const [isSending, setIsSending] = useState(false);

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    status: "",
    destination: "",
    timing: "",
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
        "相談内容を入力してください";

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
        留学支援について
      </h1>


      <p className="mb-12 leading-9 text-neutral-700">
        音楽留学に関するご相談はこちらからお願いいたします。
        出願準備やオーディション、渡航準備などについてご相談いただけます。
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
                updateField(
                  "name",
                  e.target.value
                )
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
                updateField(
                  "email",
                  e.target.value
                )
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
              現在の状況
            </label>


            <input
              value={formData.status}
              onChange={(e) =>
                updateField(
                  "status",
                  e.target.value
                )
              }
              placeholder="例：音楽大学生、社会人など"
              className="w-full rounded-lg border border-neutral-300 p-4"
            />

          </div>



          <div>

            <label className="mb-2 block text-sm">
              希望留学先
            </label>


            <input
              value={formData.destination}
              onChange={(e) =>
                updateField(
                  "destination",
                  e.target.value
                )
              }
              placeholder="例：ドイツ、ベルギーなど"
              className="w-full rounded-lg border border-neutral-300 p-4"
            />

          </div>



          <div>

            <label className="mb-2 block text-sm">
              希望時期
            </label>


            <input
              value={formData.timing}
              onChange={(e) =>
                updateField(
                  "timing",
                  e.target.value
                )
              }
              placeholder="例：2027年度入学希望"
              className="w-full rounded-lg border border-neutral-300 p-4"
            />

          </div>



          <div>

            <label className="mb-2 block text-sm">
              相談内容
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
            className="
              mx-auto
              block
              cursor-pointer
              rounded-full
              border
              border-black
              px-8
              py-4
              transition
              hover:bg-black
              hover:text-white
            "
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
              現在の状況：
              {formData.status}
            </p>


            <p>
              希望留学先：
              {formData.destination}
            </p>


            <p>
              希望時期：
              {formData.timing}
            </p>


            <p>
              相談内容：
              {formData.message}
            </p>


          </div>



          <div className="mt-10 flex justify-center gap-4">


            <button
              onClick={() => setStep("form")}
              className="
                cursor-pointer
                rounded-full
                border
                border-neutral-300
                px-8
                py-4
                text-neutral-600
                transition
                hover:bg-neutral-100
              "
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