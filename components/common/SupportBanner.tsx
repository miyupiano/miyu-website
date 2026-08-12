import Button from "@/components/common/Button";

export default function SupportBanner() {
  return (
    <section className="mx-auto max-w-3xl px-8 pt-30 pb-12">

      <div className="rounded-3xl bg-[#f7f5f1] px-8 py-8 text-center">

        <h2 className="text-2xl font-extralight tracking-wide">
          音楽活動を支えてくださる方へ♡
        </h2>


        <p className="mx-auto mt-5 max-w-2xl leading-8 text-neutral-600">
          これからも演奏を通して、
          音楽の魅力を届け続けていくために。
          <br />
          活動を温かく見守り、応援してくださる方とのつながりを大切にしています。
        </p>


        <Button
          href="/support"
          className="mt-6 tracking-[0.15em]"
        >
          活動を応援する
        </Button>

      </div>

    </section>
  );
}