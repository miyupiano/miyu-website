export default function Loading() {
  return (
    <main className="flex min-h-screen items-center justify-center">
      <div className="flex flex-col items-center gap-6">
        <div className="h-10 w-10 animate-spin rounded-full border-2 border-neutral-300 border-t-black" />

        <p className="text-sm tracking-[0.2em] text-neutral-500">
          LOADING...
        </p>
      </div>
    </main>
  );
}