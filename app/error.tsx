"use client";

type ErrorProps = {
  error: Error;
  reset: () => void;
};

export default function Error({
  error,
  reset,
}: ErrorProps) {
  console.error(error);

  return (
    <main className="flex min-h-screen items-center justify-center px-8">
      <div className="max-w-md text-center">
        <h1 className="text-5xl font-extralight">
          エラーが発生しました
        </h1>

        <p className="mt-6 leading-8 text-neutral-600">
          申し訳ありません。
          予期しないエラーが発生しました。
        </p>

        <button
          onClick={reset}
          className="mt-10 rounded-full border border-black px-8 py-3 transition hover:bg-black hover:text-white"
        >
          もう一度試す
        </button>
      </div>
    </main>
  );
}