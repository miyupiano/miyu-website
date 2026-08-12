import SectionTitle from "@/components/common/SectionTitle";
import Button from "@/components/common/Button";

export default function Contact() {
  return (
    <section className="mx-auto max-w-6xl px-8 pt-26 pb-10">

      <div
        className="
          rounded-3xl
          bg-neutral-50
          px-8
          py-6
          text-center
        "
      >

        <h2 className="text-3xl font-extralight tracking-wide">
          お問い合わせ
        </h2>

        <div className="mt-10 flex justify-center">

          <Button href="/contact">
            お問い合わせはこちら
          </Button>

        </div>

      </div>

    </section>
  );
}